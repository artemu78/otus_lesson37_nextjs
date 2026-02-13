import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-6">
        Next.js 15 Demo App
      </h1>
      <p className="text-xl text-gray-400 mb-8 max-w-2xl">
        Demonstrating Server Actions, Data Fetching, NextAuth.js Authentication, and File System interaction.
      </p>

      <div className="flex gap-6">
        <Link
          href="/weather"
          className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Check Weather (Data Fetching)
        </Link>
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Go to Dashboard (Protected)
        </Link>
      </div>

      <div className="mt-12 p-6 border border-gray-800 rounded-lg bg-gray-900/50">
        <h3 className="text-lg font-semibold mb-2">Test Credentials</h3>
        <p className="font-mono text-sm text-gray-300">Email: admin@example.com</p>
        <p className="font-mono text-sm text-gray-300 mb-2">Password: password123</p>
        <div className="h-px bg-gray-800 my-2"></div>
        <p className="font-mono text-sm text-gray-300">Email: student@react.js</p>
        <p className="font-mono text-sm text-gray-300">Password: learn2026</p>
      </div>
    </div>
  );
}
