# Instagram Analytics Simulation App (Next.js + Recharts)

A full-stack simulation app built with **Next.js**, **MongoDB**, **Tailwind CSS**, and **Recharts**. It displays follower growth, engagement rate of posts, and the best time to post on Instagram using mock or seeded data.

---

## Features

- **Follower Growth** over 7 days (Line Chart via Recharts)
- **Engagement Rate** for recent posts (Bar Chart)
- **Best Time to Post** (Simulated like "Wednesday 7 PM")
- Upload JSON data via API (optional)
- Fullstack with **Next.js App Router** and **MongoDB**

---

## Tech Stack

| Layer       | Tech                          |
|-------------|-------------------------------|
| Frontend    | **Next.js (App Router)**      |
| UI Styling  | **Tailwind CSS**              |
| Charts      | **Recharts**                  |
| Backend     | **Next.js API Route Handlers**|
| Database    | **MongoDB + Mongoose**        |
| Fetching    | `fetch()` via route handlers  |

---

## Sample Data Format

```json
{
  "followers": [1200, 1250, 1280, 1295, 1330, 1360, 1400],
  "engagement": [
    { "post": 1, "likes": 320, "comments": 25 },
    { "post": 2, "likes": 400, "comments": 40 },
    { "post": 3, "likes": 290, "comments": 10 }
  ],
  "bestPostTime": "Wednesday 7 PM"
}
