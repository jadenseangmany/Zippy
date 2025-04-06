// GPT Generated Code to reroute default home page to dashboard page

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return null; // You can add a loading spinner here if needed.
}
