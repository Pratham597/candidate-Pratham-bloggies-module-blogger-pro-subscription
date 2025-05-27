import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#3F51B5] mb-4">
        Welcome to Bloggies Awards
      </h1>
      <p className="text-gray-700 text-lg sm:text-xl max-w-xl mb-6">
        A global platform to celebrate top bloggers, powered by community nominations, voting, and premium honors.
      </p>
      <div className="space-x-4">
        <Link
          to="/pricing"
          className="bg-[#3F51B5] text-white px-6 py-2 rounded-full hover:bg-[#303F9F] transition"
        >
          Go Pro
        </Link>
        <Link
          to="/pro-dashboard"
          className="border border-[#3F51B5] text-[#3F51B5] px-6 py-2 rounded-full hover:bg-[#3F51B5] hover:text-white transition"
        >
          View Dashboard
        </Link>
      </div>
    </div>
  );
}
