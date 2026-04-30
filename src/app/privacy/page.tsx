import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | China Travel Guide',
  description: 'Privacy policy for China Travel Guide app and website.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600">
              China Travel Guide ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, 
              use, and protect your personal information when you use our mobile application and website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Information You Provide</h3>
            <ul className="text-gray-600 list-disc pl-6 mb-4">
              <li>Language preferences (stored locally on your device)</li>
              <li>Theme preferences (light/dark mode, stored locally)</li>
              <li>Custom shortcuts you create (stored locally on your device)</li>
              <li>Favorite items (stored locally on your device)</li>
            </ul>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Information We Do NOT Collect</h3>
            <ul className="text-gray-600 list-disc pl-6">
              <li>We do NOT collect your name, email, or phone number</li>
              <li>We do NOT track your location</li>
              <li>We do NOT collect device identifiers</li>
              <li>We do NOT use analytics or tracking cookies</li>
              <li>We do NOT share any data with third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">How We Use Information</h2>
            <p className="text-gray-600">
              All preferences and data are stored locally on your device using AsyncStorage. We do not transmit, 
              store, or process any of your personal information on our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              Our app provides links to third-party applications (Alipay, WeChat, Didi, etc.) and external websites. 
              When you click these links or use third-party apps, you leave our app. We are not responsible for the 
              privacy practices of these third-party services. Please review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600">
              Since we do not collect or store any personal information on our servers, there is no risk of 
              your data being compromised through our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Children's Privacy</h2>
            <p className="text-gray-600">
              Our app is intended for general audiences and does not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please visit our website: 
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
