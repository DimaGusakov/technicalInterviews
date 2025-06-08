export default function CircleScore({ score }) {
   const max = 10;
  const percentage = Math.min(score / max, 1);
  const radius = 160;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percentage);

  return (
    <div className="flex flex-col items-center">
      <p className="text-xl text-gray-600 mb-1">Результат</p>
      <svg width="400" height="400">
        <circle
          cx="200"
          cy="200"
          r={radius}
          fill="none"
          stroke="#e5e7eb" // gray-200
          strokeWidth="20"
        />
        <circle
          cx="200"
          cy="200"
          r={radius}
          fill="none"
          stroke="#6a0bff" // blue-500
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 200 200)"
        />
        <text
          x="200"
          y="215"
          textAnchor="middle"
          fontSize="72"
          fill="#374151" // gray-700
          fontWeight="bold"
        >
          {score}
        </text>
      </svg>
    </div>
  );
};
