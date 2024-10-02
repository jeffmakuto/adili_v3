const ReportAnonymously: React.FC = () => {
  const reportUrl = process.env.NEXT_PUBLIC_KQ_ETHICS_HOTLINE_URL || '#';

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 mt-4" style={{ flex: 1 }}>
      <h2 className="text-xl font-semibold mb-3">Report Anonymously</h2>
      <a
        href={reportUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:underline"
      >
        Click here to report an issue
      </a>
    </div>
  );
};

export default ReportAnonymously;
