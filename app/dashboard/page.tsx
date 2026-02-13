import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/api/auth/signin");
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-xl border border-gray-800">
            <h1 className="text-3xl font-bold mb-4 text-white">Protected Dashboard</h1>
            <div className="bg-gray-800 p-4 rounded border border-gray-700">
                <p className="text-lg mb-2">Welcome back, <span className="text-blue-400 font-semibold">{session.user?.email}</span>!</p>
                <p className="text-gray-400">This page is protected using Middleware & Server-Side check.</p>
                <div className="mt-4 p-4 bg-black rounded text-sm font-mono text-green-400 overflow-auto">
                    {JSON.stringify(session, null, 2)}
                </div>
            </div>
        </div>
    );
}
