import Link from 'next/link';

const applications = [
  { id: 1, candidateName: 'John Doe', jobTitle: 'Software Engineer', applicationDate: '2024-07-01', status: 'new' },
  { id: 2, candidateName: 'Jane Smith', jobTitle: 'Product Manager', applicationDate: '2024-07-02', status: 'shortlisted' },
];

const ApplicationList = () => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-2">Applications</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Candidate Name</th>
            <th className="py-2">Job Title</th>
            <th className="py-2">Application Date</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td className="border px-4 py-2">{app.candidateName}</td>
              <td className="border px-4 py-2">{app.jobTitle}</td>
              <td className="border px-4 py-2">{app.applicationDate}</td>
              <td className={`border px-4 py-2 ${app.status === 'new' ? 'text-blue-500' : 'text-green-500'}`}>{app.status}</td>
              <td className="border px-4 py-2">
                <Link href={`/applications/${app.id}`}lassName="text-blue-500">
                    View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationList;
