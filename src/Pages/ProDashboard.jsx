import { useEffect, useState } from 'react';
import { getUserStatus, getProMetrics } from '../Api/testApi';
import Card from '../Components/ProDashboard/Card';
import { Link } from 'react-router-dom';

export default function ProDashboard() {
  const [status, setStatus] = useState(null);
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const statusRes = await getUserStatus();
      setStatus(statusRes);

      if (statusRes.isPro) {
        const metricsRes = await getProMetrics();
        setMetrics(metricsRes);
      }
    };

    fetchData();
  }, []);

  if (status === null) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Loading...</p>
      </div>
    );
  }

  if (!status.isPro) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center text-red-600">
        <p className="text-xl font-semibold mb-2">You're not a Pro user.</p>
        <Link
          href="/pricing"
          className="text-[#3F51B5] underline hover:text-[#303F9F] transition"
        >
          Go to /pricing to subscribe
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#3F51B5]">Pro Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's your subscription status.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card heading={'Trial Status'} parameter={metrics?.trial || 'Loading...'} />
          <Card heading={'Payments'} parameter={metrics?.payments || 'Loading...'} />
          <Card heading={'Next Billing'} parameter={metrics?.nextBilling || 'Loading...'} />
        </div>
      </div>
    </div>
  );
}
