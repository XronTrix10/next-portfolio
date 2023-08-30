"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Buttons } from "./components/ui/Styles";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[75vh] md:min-h-[100vh] px-24 text-center text-white bg-black grid place-content-center">
      <h1 className="text-[8rem] rainbow-neon text-center">OOPS</h1>
      <p className="mb-12">Something Broke on Server !</p>
      <div className="px-8">
        <button
        className={Buttons}
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </main>
  );
}
