export default function BestTimeCard({ bestTime }: { bestTime: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4 rounded-xl shadow">
      <p className="text-lg text-center">{bestTime}</p>
    </div>
  );
}
