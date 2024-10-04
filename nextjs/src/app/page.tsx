"use client";
import Image from "next/image";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ul>
          <li>
            <Link href={"/admin"}>phương thức get, post, patch, …</Link>
          </li>
          <li>
            <Link href={"/reactquery"}>React Query</Link>
          </li>
        </ul>
      </QueryClientProvider>
    </>
  );
}
