const Terms = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="bg-white p-10 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-6"><strong>Last Updated: April 3, 2026</strong></p>
        <p className="text-gray-700 mb-6">
          Hiwa Manpower Solutions ("we," "us," or "our") operates the Hiwa Manpower mobile application. This policy describes how we collect and protect your data.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li><strong>Personal Information:</strong> Name, mobile number, and unique QR identification codes.</li>
          <li><strong>Work & Attendance:</strong> Check-in/Check-out times, venue locations, and assigned event roles.</li>
          <li><strong>Financial Data:</strong> Calculated earnings, travel allowances, and payment status.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">2. Permissions and Sensitive Data</h2>
        <p className="text-gray-700 mb-4">
          <span className="text-red-600 font-bold">Camera Access (android.permission.CAMERA):</span> Our app requires access to your device's camera to enable <strong>QR code scanning</strong>. This is strictly used for verifying your presence at event venues (Check-in/Check-out) and for identity verification via profile photos. We do not store or transmit any images without your explicit action.
        </p>
        <p className="text-gray-700 mb-6">
          <span className="text-red-600 font-bold">Location Data:</span> We collect your precise location only during the check-in and check-out process. This is used solely to verify that you are at the designated work venue. We do <strong>not</strong> track your location in the background.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">3. How We Use Data</h2>
        <p className="text-gray-700 mb-6">
          Data is used to verify work shifts, calculate accurate payments for staff, and manage event logistics for our clients. We do <strong>not sell</strong> your personal information to third parties.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">4. Data Storage and Security</h2>
        <p className="text-gray-700 mb-6">
          Your information is stored securely in encrypted databases. Access is restricted to authorized administrative personnel only for operational purposes.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">5. Your Rights</h2>
        <p className="text-gray-700 mb-6">
          You may request to update your mobile number or delete your account at any time by contacting our administrative team.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">6. Contact Us</h2>
        <p className="text-gray-700 mb-8">
          If you have any questions, please reach out to the Hiwa Administrative Team.
        </p>

        <footer className="text-center text-gray-500 text-sm mt-10">
          &copy; 2026 Hiwa Manpower Solutions
        </footer>
      </div>
    </div>
  );
};

export default Terms;