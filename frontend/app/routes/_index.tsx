import React from "react";
import { useLoaderData } from "@remix-run/react";

// Defines the structure of the response data and error
interface LoaderResponse {
  data?: {
    message: string;
    count: number;
  };
  error?: string;
}

//TODO:
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  return response.json();
}

// clientLoader function, now with a clear return type :)
export async function clientLoader(): Promise<LoaderResponse> {
  try {
    const data = await fetchData<LoaderResponse['data']>('http://localhost:8080/api/data');
    return { data };
  } catch (error) {
    let errorMessage = 'An unexpected error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { error: errorMessage };
  }
}


export default function Index() {
  const { data, error } = useLoaderData<LoaderResponse>();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Hello from Remix!</h1>
      <p>Data from the backend: {JSON.stringify(data)}</p>
    </div>
  );
}

