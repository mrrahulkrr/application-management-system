import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ApplicationDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [application, setApplication] = useState(null);

  useEffect(() => {
    if (id) {
      async function fetchApplication() {
        const res = await fetch(`/api/applications/${id}`);
        if (res.ok) {
          const data = await res.json();
          setApplication(data);
        } else {
          console.error('Application not found');
        }
      }
      fetchApplication();
    }
  }, [id]);

  if (!application) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Application Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg font-semibold mb-2">Candidate Name:</p>
        <p className="text-gray-700 mb-4">{application.candidateName}</p>
        <p className="text-lg font-semibold mb-2">Job Title:</p>
        <p className="text-gray-700 mb-4">{application.jobTitle}</p>
        <p className="text-lg font-semibold mb-2">Application Date:</p>
        <p className="text-gray-700 mb-4">{new Date(application.applicationDate).toLocaleDateString()}</p>
        <p className="text-lg font-semibold mb-2">Status:</p>
        <p className="text-gray-700">{application.status}</p>
      </div>
    </main>
  );
}
