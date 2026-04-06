export default function VisaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-green-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <a href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Back to Home</a>
          <h1 className="text-4xl font-bold mb-4">🛂 China Visa-Free Policy Guide</h1>
          <p className="text-xl opacity-90">Complete guide to visa-free entry and transit policies</p>
        </div>
      </header>

      {/* Visa-Free Countries */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">✅ Visa-Free Countries (2026)</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-gray-700 mb-6">
              Citizens of the following countries can enter China <strong>without a visa</strong> for tourism, business, or transit:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-4 text-lg">📍 Full Visa-Free (15-90 days)</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-800">🇸🇬 Singapore</p>
                    <p className="text-sm text-gray-600">30 days visa-free</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-800">🇹🇭 Thailand</p>
                    <p className="text-sm text-gray-600">60 days visa-free</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-800">🇲🇾 Malaysia</p>
                    <p className="text-sm text-gray-600">30 days visa-free</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-800">🇯🇵 Japan</p>
                    <p className="text-sm text-gray-600">15 days visa-free (Restored 2025)</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-800">🇧🇳 Brunei</p>
                    <p className="text-sm text-gray-600">15 days visa-free</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-800">🇦🇪 United Arab Emirates</p>
                    <p className="text-sm text-gray-600">30 days visa-free</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-800">🇶🇦 Qatar</p>
                    <p className="text-sm text-gray-600">30 days visa-free</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-4 text-lg">📍 More Countries</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-800">🇷🇸 Serbia</p>
                    <p className="text-sm text-gray-600">30 days visa-free</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-800">🇧🇦 Bosnia & Herzegovina</p>
                    <p className="text-sm text-gray-600">90 days visa-free</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-800">🇦🇱 Albania</p>
                    <p className="text-sm text-gray-600">90 days visa-free</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-800">🇧🇾 Belarus</p>
                    <p className="text-sm text-gray-600">30 days visa-free</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-800">🇷🇺 Russia</p>
                    <p className="text-sm text-gray-600">15 days for group tours</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded">
                    <p className="font-medium text-blue-800">🌍 More Countries Coming</p>
                    <p className="text-sm text-blue-700">China continues to expand visa-free access. Check official sources for updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 144-Hour Transit */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">⏱️ 144-Hour Transit Visa-Free</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <p className="text-gray-700 mb-6 text-lg">
              Citizens of <strong>54 countries</strong> can transit through China without a visa for up to <strong>144 hours (6 days)</strong>.
            </p>

            <h3 className="text-xl font-semibold text-blue-600 mb-4">📋 Requirements</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="border-2 border-blue-200 rounded-lg p-4">
                <div className="text-3xl mb-2">1️⃣</div>
                <h4 className="font-bold text-gray-800 mb-2">Eligible Passport</h4>
                <p className="text-sm text-gray-600">Hold passport from eligible country (EU, US, UK, Canada, Australia, Japan, South Korea, etc.)</p>
              </div>
              <div className="border-2 border-blue-200 rounded-lg p-4">
                <div className="text-3xl mb-2">2️⃣</div>
                <h4 className="font-bold text-gray-800 mb-2">Onward Ticket</h4>
                <p className="text-sm text-gray-600">Have confirmed onward ticket to a THIRD country (not your origin country)</p>
              </div>
              <div className="border-2 border-blue-200 rounded-lg p-4">
                <div className="text-3xl mb-2">3️⃣</div>
                <h4 className="font-bold text-gray-800 mb-2">Same Region Entry/Exit</h4>
                <p className="text-sm text-gray-600">Enter and exit from designated ports in the same region</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-blue-600 mb-4">📍 Eligible Regions & Ports</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Beijing-Tianjin-Hebei</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Beijing Capital Airport</li>
                  <li>• Beijing Daxing Airport</li>
                  <li>• Tianjin Binhai Airport</li>
                  <li>• Shijiazhuang Airport</li>
                  <li>• Qinhuangdao Port</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Shanghai-Jiangsu-Zhejiang</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Shanghai Pudong Airport</li>
                  <li>• Shanghai Hongqiao Airport</li>
                  <li>• Hangzhou Xiaoshan Airport</li>
                  <li>• Nanjing Lukou Airport</li>
                  <li>• Shanghai Port (cruise)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Guangdong (Greater Bay Area)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Guangzhou Baiyun Airport</li>
                  <li>• Shenzhen Bao'an Airport</li>
                  <li>• Jieyang Chaoshan Airport</li>
                  <li>• Nansha Port (cruise)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-blue-600 mb-4">📝 How to Apply</h3>
            <div className="bg-green-50 rounded-lg p-6">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <p className="font-semibold text-gray-800">Fill out arrival card</p>
                    <p className="text-sm text-gray-600">On the plane or at the airport arrival hall</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-800">Present documents at immigration</p>
                    <p className="text-sm text-gray-600">Show passport + onward ticket + hotel booking (recommended)</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-800">Inform the officer</p>
                    <p className="text-sm text-gray-600">Tell them you're using "144-hour visa-free transit"</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <p className="font-semibold text-gray-800">Receive temporary entry permit</p>
                    <p className="text-sm text-gray-600">Valid for 144 hours (6 days) from entry</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4">
              <p className="text-sm text-gray-700">
                <strong>💡 Example:</strong> Flying from USA → Shanghai → Japan? You can stay in Shanghai/Jiangsu/Zhejiang for up to 6 days without a visa!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Resources */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">🔗 Official Resources</h2>
          
          <div className="bg-gray-800 text-white rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📌</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">China National Immigration Administration</h3>
                  <p className="text-gray-300 text-sm mb-2">Official visa policy announcements and updates</p>
                  <a href="https://en.nia.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://en.nia.gov.cn/</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">📌</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Ministry of Foreign Affairs</h3>
                  <p className="text-gray-300 text-sm mb-2">Find Chinese embassies and consulates worldwide</p>
                  <a href="https://www.fmprc.gov.cn/eng/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://www.fmprc.gov.cn/eng/</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">📌</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">24/7 Consular Protection Hotline</h3>
                  <p className="text-gray-300 text-sm mb-2">For emergencies while in China</p>
                  <p className="text-xl font-bold text-green-400">+86-10-12308</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-600/20 rounded-lg border border-yellow-600">
              <p className="text-sm text-yellow-200">
                <strong>⚠️ Important:</strong> Visa policies can change frequently. Always verify with official sources before traveling. Information last updated: April 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <a href="/" className="text-blue-400 hover:underline">← Back to Home</a>
          <p className="text-gray-500 text-sm mt-8">
            Last updated: April 2026 | Made with ❤️ for travelers
          </p>
        </div>
      </footer>
    </main>
  )
}
