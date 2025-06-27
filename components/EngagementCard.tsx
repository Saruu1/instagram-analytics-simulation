import { EngagementData } from "./type";

export default function EngagementCard({ data }: { data: EngagementData[] }) {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4 rounded-xl shadow">
      <ul className="space-y-2">
        {data.map((e) => (
          <li key={e.post} className="flex justify-between">
            <span>Post {e.post}</span>
            <span>
              👍 {e.likes} · 💬 {e.comments}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
