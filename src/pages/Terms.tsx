const Terms = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="glass p-10 max-w-5xl mx-auto shadow-2xl border border-glass-border">
          <h1 className="text-4xl font-bold text-foreground border-b-2 border-primary pb-3 mb-6">
            Terms & Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-6">
            <strong>Last Updated: April 3, 2026</strong>
          </p>
          <p className="text-muted-foreground mb-6">
            Hiwa Manpower Solutions ("we," "us," or "our") operates the Hiwa Manpower mobile application. This policy explains the data we collect and how we protect it.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Information We Collect</h2>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, mobile number, and unique QR identification codes.</li>
            <li><strong>Work & Attendance:</strong> Check-in/Check-out times, venue locations, and assigned event roles.</li>
            <li><strong>Financial Data:</strong> Calculated earnings, travel allowances, and payment status.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Permissions and Sensitive Data</h2>
          <p className="text-muted-foreground mb-4">
            <span className="text-destructive font-bold">Camera Access (android.permission.CAMERA):</span> Our app requires access to your device's camera for <strong>QR code scanning</strong>. This is used only to verify attendance at event venues and for identity verification via profile photos. We do not store or transmit any images without your explicit action.
          </p>
          <p className="text-muted-foreground mb-6">
            <span className="text-destructive font-bold">Location Data:</span> We collect your precise location only during check-in and check-out. This is used to verify that you are at the designated work venue. We do <strong>not</strong> track your location in the background.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. How We Use Data</h2>
          <p className="text-muted-foreground mb-6">
            Data is used to verify work shifts, calculate accurate payments for staff, and manage event logistics for our clients. We do <strong>not sell</strong> your personal information to third parties.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Data Storage and Security</h2>
          <p className="text-muted-foreground mb-6">
            Your information is stored securely in encrypted databases. Access is restricted to authorized administrative personnel only for operational needs.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Your Rights</h2>
          <p className="text-muted-foreground mb-6">
            You may request to update your mobile number or delete your account anytime by contacting our administrative team.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Contact Us</h2>
          <p className="text-muted-foreground mb-8">
            If you have any questions, please reach out to the Hiwa Administrative Team.
          </p>

          <footer className="text-center text-sm text-muted-foreground/80 mt-10">
            &copy; 2026 Hiwa Manpower Solutions
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Terms;
