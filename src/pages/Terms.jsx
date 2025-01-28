import React from 'react';

function Terms() {
  return (
    <div className="min-h-[calc(100vh-16rem)] relative bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-purple-100">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 mb-8 text-center">
            Terms of Service
          </h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-purple-900 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using TechMaui, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-900 mb-3">2. User Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>You are responsible for ensuring your use of the tools complies with your local laws and regulations.</li>
                <li>You agree to use the tools responsibly and ethically.</li>
                <li>You understand that some tools may require additional software or configurations for safe usage.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-900 mb-3">3. Disclaimer</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>The tools and resources listed are provided "as is" without any warranties.</li>
                <li>We are not responsible for any consequences resulting from the use of these tools.</li>
                <li>We do not host or maintain any of the third-party tools listed on our platform.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-900 mb-3">4. Safety and Security</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>We strongly recommend using an ad blocker and following security best practices.</li>
                <li>Always scan downloaded files with antivirus software.</li>
                <li>Be cautious when entering personal information on third-party websites.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-900 mb-3">5. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of the platform constitutes acceptance of the updated terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-purple-900 mb-3">6. Contact</h2>
              <p>If you have any questions about these Terms of Service, please contact us.</p>
            </section>

            <div className="mt-8 p-4 bg-purple-50 rounded-lg">
              <p className="text-purple-800 text-sm text-center">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms; 