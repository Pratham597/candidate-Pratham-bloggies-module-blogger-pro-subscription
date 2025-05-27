import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postProTrial } from '../Api/testApi';

export default function Pricing() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubscribe = async () => {
    setLoading(true);
    const response = await postProTrial();
    setLoading(false);
    if (response.success) {
      navigate('/pro-dashboard');
    } else {
      alert('Subscription failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl">
        <h1 className="text-3xl font-bold text-[#3F51B5] mb-4">
          Go Pro
        </h1>
        <p className="text-gray-700 mb-6">
          Unlock analytics & exclusive features with Blogger Pro.
        </p>
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className={`w-full px-6 py-3 rounded-xl transition duration-200 ease-in-out transform ${
            loading
              ? 'bg-[#3F51B5]/70 cursor-not-allowed'
              : 'bg-[#3F51B5] hover:bg-[#303F9F] hover:scale-105'
          } text-white shadow`}
        >
          {loading ? 'Processing...' : 'Subscribe to Pro'}
        </button>
      </div>
    </div>
  );
}
