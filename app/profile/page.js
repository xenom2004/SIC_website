"use client"
import { useSession } from "next-auth/react";

export default function HomePage() {
    const session = useSession();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {session?.status === "loading" ? (
                <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full border-t-4 border-b-4 border-blue-500 h-12 w-12"></div>
                </div>
            ) : (
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Welcome, {session.data.user.name}</h1>
                    {/* Additional content can be added here */}
                </div>
            )}
        </div>
    );
}
