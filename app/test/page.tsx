'use client';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-500 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">CSS Test Page</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-800 text-lg mb-4">If you can see this styled properly:</p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-600">Blue background</li>
            <li className="text-gray-600">White card with shadow</li>
            <li className="text-gray-600">Proper spacing and typography</li>
          </ul>
          <button className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Test Button
          </button>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-red-500 p-4 rounded text-white text-center">Red Box</div>
          <div className="bg-green-500 p-4 rounded text-white text-center">Green Box</div>
          <div className="bg-yellow-500 p-4 rounded text-white text-center">Yellow Box</div>
        </div>
      </div>
    </div>
  );
} 