import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-6xl font-bold text-[#3F51B5] mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! Page not found.</p>
      <Link
        to="/pricing"
        className="bg-[#3F51B5] text-white px-5 py-2 rounded-full hover:bg-[#303F9F] transition"
      >
        Go back home
      </Link>
    </div>
  );
}
