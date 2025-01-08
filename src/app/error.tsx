'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Oops, something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset} type="button">
        Try Again
      </button>
    </div>
  );
}
