"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
    const { data: session, status } = useSession();

    return (
        <nav className="p-4 bg-gray-900 border-b border-gray-800 flex justify-between items-center text-white">
            <Link href="/" className="text-xl font-bold">
                Next.js Demo
            </Link>

            <div className="flex gap-4 items-center">
                <Link href="/weather" className="hover:text-blue-400">Weather</Link>
                <Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link>

                {status === "loading" ? (
                    <span className="text-gray-500">Loading...</span>
                ) : session ? (
                    <div className="flex items-center gap-4">
                        <span className="text-sm">
                            Logged in as <span className="font-semibold text-green-400">{session.user?.email}</span>
                        </span>
                        <button
                            onClick={() => signOut()}
                            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-sm font-medium"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => signIn()}
                        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-sm font-medium"
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
}
