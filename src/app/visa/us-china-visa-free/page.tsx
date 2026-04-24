import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'US Citizens China 144-Hour Visa-Free Transit Guide 2026',
  description: 'Complete guide for US citizens visiting China with 144-hour visa-free transit. Requirements, eligible regions, application process, and step-by-step instructions.',
  keywords: ['US citizens China visa free', '144 hour visa free transit China', 'American China transit visa', 'China visa for Americans', 'US passport China entry'],
  openGraph: {
    title: 'US Citizens China 144-Hour Visa-Free Transit Guide 2026',
    description: 'Complete guide for US citizens visiting China with 144-hour visa-free transit.',
    url: 'https://thechinatravelguide.com/visa/us-china-visa-free',
    type: 'website',
  },
}

export default function USChinaVisaFreePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <a href="/visa" className="text-white/80 hover:text-white mb-4 inline-block">← Back to Visa Guide</a>
          <h1 className="text-4xl font-bold mb-4">🇺🇸 US Citizens: 144-Hour Visa-Free Transit</h1>
          <p className="text-xl opacity-90">Stay in China for up to 6 days without a visa</p>
        </div>
      </header>

      {/* What is 144-Hour Transit */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">📋 What is 144-Hour Visa-Free Transit?</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-gray-700 mb-6 text-lg">
              US citizens can <strong>transit through China without a visa</strong> for up to <strong>144 hours (6 days)</strong> when traveling to a third country.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-green-800 text-xl mb-3">🌍 54 Eligible Countries</h3>
              <p className="text-gray-700 mb-3">
                The 144-hour visa-free transit policy applies to citizens of <strong>54 countries</strong>, including the US, UK, Canada, Australia, EU nations, and more.
              </p>
              <a href="/visa/144-hour-countries-list" className="text-green-700 hover:text-green-900 font-semibold inline-flex items-center gap-2">
                View Complete List →
              </a>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-blue-800 text-xl mb-3">✅ Example Route:</h3>
              <p className="text-gray-700">
                <strong>Los Angeles → Shanghai → Tokyo</strong><br/>
                You can spend up to 6 days in Shanghai (and nearby cities like Hangzhou, Suzhou) without a Chinese visa!
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <h3 className="font-bold text-amber-800 text-xl mb-3">⚠️ Important Rules:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• You must be traveling to a <strong>third country</strong> (not returning to the US)</li>
                <li>• Enter and exit from the <strong>same region</strong></li>
                <li>• Stay cannot exceed 144 hours from entry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">📝 Requirements for US Citizens</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
              <div className="text-4xl mb-4">🛂</div>
              <h3 className="font-bold text-gray-800 text-xl mb-3">Valid US Passport</h3>
              <p className="text-gray-600">
                Must be valid for at least 6 months beyond your planned departure date from China
              </p>
            </div>

            <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="font-bold text-gray-800 text-xl mb-3">Onward Ticket</h3>
              <p className="text-gray-600">
                Confirmed ticket to a third country (can't return directly to US)
              </p>
            </div>

            <div className="border-2 border-purple-200 rounded-xl p-6 bg-purple-50">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="font-bold text-gray-800 text-xl mb-3">Accommodation Booking</h3>
              <p className="text-gray-600">
                Hotel reservation in the transit region (recommended but not always required)
              </p>
            </div>

            <div className="border-2 border-orange-200 rounded-xl p-6 bg-orange-50">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-bold text-gray-800 text-xl mb-3">Itinerary Details</h3>
              <p className="text-gray-600">
                Have your travel plans ready (dates, cities, activities)
              </p>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <h3 className="font-bold text-red-800 text-xl mb-3">❌ Not Eligible If:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• You're returning to the US directly (not a true transit)</li>
              <li>• Your only destination is China (no onward ticket)</li>
              <li>• You're working or studying in China</li>
              <li>• You want to stay beyond 144 hours</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Eligible Regions */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">🗺️ Eligible Transit Regions</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-gray-700 mb-6 text-lg">
              US citizens can use 144-hour transit in <strong>20 regions</strong> across China:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-600 mb-2">Beijing-Tianjin-Hebei</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Beijing Capital Airport (PEK)</li>
                  <li>• Beijing Daxing Airport (PKX)</li>
                  <li>• Tianjin Binhai Airport (TSN)</li>
                  <li>• Shijiazhuang Airport (SJW)</li>
                  <li>• Qinhuangdao Port</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-600 mb-2">Shanghai-Jiangsu-Zhejiang</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Shanghai Pudong (PVG)</li>
                  <li>• Shanghai Hongqiao (SHA)</li>
                  <li>• Hangzhou (HGH)</li>
                  <li>• Nanjing (NKG)</li>
                  <li>• Shanghai Port (cruise)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-600 mb-2">Guangdong (Greater Bay Area)</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Guangzhou (CAN)</li>
                  <li>• Shenzhen (SZX)</li>
                  <li>• Jieyang (SWA)</li>
                  <li>• Nansha Port (cruise)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-600 mb-2">Liaoning Province</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Shenyang (SHE)</li>
                  <li>• Dalian (DLC)</li>
                  <li>• Dandong Port</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-600 mb-2">Shandong Province</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Qingdao (TAO)</li>
                  <li>• Jinan (TNA)</li>
                  <li>• Yantai (YNT)</li>
                  <li>• Weihai Port</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-600 mb-2">Sichuan Province</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Chengdu (CTU)</li>
                  <li>• Chongqing (CKG)</li>
                  <li>• Luzhou Port</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>💡 Pro Tip:</strong> Shanghai-Jiangsu-Zhejiang is the most popular region for US travelers. You can visit Shanghai, Hangzhou (West Lake), Suzhou (gardens), and more - all within 6 days!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">✈️ Step-by-Step Application</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                <div>
                  <h3 className="font-bold text-gray-800 text-xl mb-2">Before Departure</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Book flights with a layover in China (12 hours to 6 days)</li>
                    <li>• Print your onward ticket to third country</li>
                    <li>• Have hotel reservation for your stay in China</li>
                    <li>• Check if your layover city is eligible (see regions above)</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                <div>
                  <h3 className="font-bold text-gray-800 text-xl mb-2">On the Plane</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Fill out the Arrival Card (Entry Card)</li>
                    <li>• In "Visit Purpose," write "144-hour transit"</li>
                    <li>• Keep your passport and tickets handy</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                <div>
                  <h3 className="font-bold text-gray-800 text-xl mb-2">At Immigration</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Follow signs for "Transit without Visa" or "144-Hour Transit"</li>
                    <li>• Present: Passport + onward ticket + arrival card</li>
                    <li>• Tell officer: "I'm using 144-hour visa-free transit"</li>
                    <li>• They may ask for hotel booking or itinerary</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                <div>
                  <h3 className="font-bold text-gray-800 text-xl mb-2">Receive Permit & Stay</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Officer issues temporary stay permit</li>
                    <li>• Valid for 144 hours from entry time</li>
                    <li>• Keep permit with you at all times in China</li>
                    <li>• Enjoy your time in China! 🎉</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h3 className="font-bold text-green-800 text-xl mb-3">✅ Tips for Success:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Arrive during business hours (officers are more experienced with transit permits)</li>
                <li>• Have printed copies of all documents</li>
                <li>• Be prepared to explain your itinerary if asked</li>
                <li>• English proficiency varies - be patient and polite</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">❓ Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-2">Can I exit China and re-enter?</h3>
              <p className="text-gray-600">No. The 144-hour permit is for a single entry only. You cannot leave the transit region and return.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-2">Can I travel to other cities in China?</h3>
              <p className="text-gray-600">Only within the designated transit region. For example, if you enter in Shanghai region, you can visit Shanghai, Hangzhou, Suzhou, and Nanjing - but not Beijing.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-2">What if I miss my onward flight?</h3>
              <p className="text-gray-600">Contact the immigration office immediately. You may need to apply for a regular visa if your delay exceeds 144 hours. Don't overstay!</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-2">Is 144-hour transit guaranteed?</h3>
              <p className="text-gray-600">No. The final decision is at the immigration officer's discretion. Have all documents ready and be prepared for the possibility of visa denial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Resources */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">🔗 Official Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">China National Immigration Administration</h3>
              <p className="text-gray-400 text-sm mb-3">Official visa policy and transit rules</p>
              <a href="https://en.nia.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://en.nia.gov.cn/</a>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Chinese Embassy in the US</h3>
              <p className="text-gray-400 text-sm mb-3">Visa information for US residents</p>
              <a href="http://www.china-embassy.org/eng/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">http://www.china-embassy.org/eng/</a>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">24/7 Consular Hotline</h3>
              <p className="text-gray-400 text-sm mb-3">For emergencies in China</p>
              <p className="text-2xl font-bold text-green-400">+86-10-12308</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Airports Info</h3>
              <p className="text-gray-400 text-sm mb-3">Check transit facilities at specific airports</p>
              <a href="https://www.caac.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">CAAC Official Website</a>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-600/20 rounded-lg border border-yellow-600">
            <p className="text-sm text-yellow-200">
              <strong>⚠️ Disclaimer:</strong> This guide is for informational purposes only. Visa policies can change without notice. Always verify with official sources before traveling.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <a href="/visa" className="text-blue-400 hover:underline">← Back to Visa Guide</a>
          <p className="text-gray-500 text-sm mt-8">
            Last updated: April 2026 | Made with ❤️ for US travelers
          </p>
        </div>
      </footer>
    </main>
  )
}
