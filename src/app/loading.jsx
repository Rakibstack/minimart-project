 
 'use client';
const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="text-center">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent mx-auto"></div>

        {/* Text */}
        <p className="mt-6 text-gray-300 text-sm tracking-wide">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
