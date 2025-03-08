"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navigation() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link href="/" className="flex items-center">
              Home
            </Link>
          </div>

          <div className="flex items-center">
            {status === "loading" ? (
              <div>Loading...</div>
            ) : session ? (
              <div className="flex items-center gap-4">
                <span>Welcome, {session.user?.email}</span>
                <button
                  onClick={() => signOut()}
                  className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                href="/auth/signin"
                className="rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
