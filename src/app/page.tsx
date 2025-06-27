"use client";

import BestTimeCard from "@components/BestTimeCard";
import EngagementCard from "@components/EngagementCard";
import FollowerChart from "@components/FollowerChart";
import { AnalyticsData } from "@components/type";
import { useEffect, useState } from "react";

async function fetchAnalytics(): Promise<AnalyticsData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/analytics`, {
    cache: "no-store",
  });
  return res.json();
}

export default function Home() {
  const [data, setData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    fetchAnalytics().then(setData);
  }, []);

  const simulateData = async () => {
    const res = await fetch("/api/analytics/seed", { method: "POST" });
    const json = await res.json();
    console.log(json.message);
    const fresh = await fetchAnalytics();
    setData(fresh);
  };

  const uploadJson = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = "";
    try {
      const text = await file.text();
      const json = JSON.parse(text);

      const res = await fetch("/api/analytics/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json),
      });

      const result = await res.json();
      alert(result.message || result.error);

      const fresh = await fetchAnalytics();
      setData(fresh);
      console.log(data)
    } catch (error) {
      alert("Invalid JSON file or upload error.");
      console.error(error);
    }
  };

  if (!data) return <p className="text-center p-10">Loading...</p>;

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-8">
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Follower Chart */}
        <div className="md:col-span-2">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white text-center">
              Follower Growth
            </h2>
            <FollowerChart data={data.followers} />
          </div>
        </div>

        {/* Engagement */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white text-center">
            Engagement Stats
          </h2>
          <EngagementCard data={data.engagement} />
        </div>

        {/* Best Time */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md md:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white text-center">
            Best Time to Post
          </h2>
          <BestTimeCard bestTime={data.bestPostTime} />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
        <button
          onClick={simulateData}
          className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointerpx-5 py-2.5 px-3 rounded w-full md:w-auto text-sm font-medium transition"
        >
          Show Default Data
        </button>

        <label
          htmlFor="json-upload"
          className="cursor-pointer w-full md:w-auto px-5 py-2.5 bg-gray-100 dark:bg-gray-800 border border-dashed border-gray-400 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300 text-sm font-medium text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          📁 Upload JSON File
          <input
            id="json-upload"
            type="file"
            accept="application/json"
            onChange={uploadJson}
            className="hidden"
          />
        </label>
      </div>
    </main>
  );
}
