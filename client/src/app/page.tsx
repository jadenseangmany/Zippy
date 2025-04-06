// src/app/page.tsx
"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Home() {
  const { user, isLoading, error } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <Link href="/dashboard">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
              Go to Dashboard
            </button>
          </Link>
          <Link href="/api/auth/logout">
            <button className="mt-2 px-4 py-2 bg-gray-300 text-black rounded-md">
              Logout
            </button>
          </Link>
        </>
      ) : (
        <>
          <h2>Please log in to continue</h2>
          <Link href="/api/auth/login?returnTo=/dashboard">
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
              Login
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
