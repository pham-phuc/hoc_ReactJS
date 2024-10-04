"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function ReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <div>Loading...</div>; 

  if (error instanceof Error)
    return <div>An error has occurred: {error.message}</div>; 

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong> {data.subscribers_count}</strong>{" "}
      <strong> {data.stargazers_count}</strong>{" "}
      <strong> {data.forks_count}</strong>
    </div>
  );
}
