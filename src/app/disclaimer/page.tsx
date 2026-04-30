import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Disclaimer | China Travel Guide',
  description: 'Important disclaimers and terms of use for China Travel Guide app and website.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Disclaimer</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Information Accuracy</h2>
            <p className="text-gray-600 mb-4">
              The information provided in this app and website (thechinatravelguide.com) is for general informational purposes only. 
              While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, 
              express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained herein.
            </p>
            <p className="text-gray-600">
              Visa policies, entry requirements, payment methods, and other travel-related information are subject to change without notice. 
              Always verify with official government sources before making travel decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Visa & Immigration Information</h2>
            <p className="text-gray-600 mb-4">
              Visa policies, 144-hour visa-free transit eligibility, and entry requirements can change at any time. 
              This app does not constitute legal or immigration advice.
            </p>
            <p className="text-gray-600">
              For official and up-to-date visa information, please consult:
            </p>
            <ul className="text-gray-600 list-disc pl-6 mt-2">
              <li>China National Immigration Administration: <a href="https://en.nia.gov.cn/" className="text-blue-600 hover:underline">en.nia.gov.cn</a></li>
              <li>Chinese Embassy or Consulate in your country</li>
              <li>China Visa Application Service Center: <a href="https://www.visaforchina.org/" className="text-blue-600 hover:underline">visaforchina.org</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Third-Party Apps & Services</h2>
            <p className="text-gray-600 mb-4">
              This app references third-party applications and services (Alipay, WeChat, Didi, etc.) for convenience. 
              We are not affiliated with, endorsed by, or responsible for these third-party services.
            </p>
            <p className="text-gray-600">
              Use of any third-party apps is at your own risk. Please review their respective terms of service and privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">No Professional Advice</h2>
            <p className="text-gray-600">
              The content provided is not intended to be a substitute for professional legal, financial, or travel advice. 
              Always seek the advice of official sources or qualified professionals regarding your specific situation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600">
              In no event shall we be liable for any claim, damages, or other liability arising from the use of this app, 
              reliance on the information provided, or any travel decisions made based on this content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">External Links</h2>
            <p className="text-gray-600">
              This app may contain links to external websites. We have no control over the content of these websites 
              and accept no responsibility for them. Visiting external links is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact</h2>
            <p className="text-gray-600">
              If you have any questions about this disclaimer, please contact us through our website: 
              <a href="https://thechinatravelguide.com" className="text-blue-600 hover:underline ml-1">thechinatravelguide.com</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">Last updated: April 30, 2026</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
