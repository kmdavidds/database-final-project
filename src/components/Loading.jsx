export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <h2 className="mt-6 text-2xl font-semibold text-base-content">
          Loading...
        </h2>
      </div>
    </div>
  );
}
