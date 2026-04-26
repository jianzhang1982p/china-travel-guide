import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - China Travel Guide',
  description: 'Complete travel guide for foreigners visiting China. Visa-free policy, Alipay setup, WeChat Pay, eSIM recommendations, and high-speed rail booking. Everything you need for 2026.',
  keywords: ['China travel guide', 'China visa free', 'Alipay for foreigners', 'WeChat Pay setup', 'China eSIM', 'China train booking'],
  openGraph: {
    title: 'China Travel Guide - Essential Tips for Foreigners',
    description: 'Complete travel guide for foreigners visiting China. Updated for 2026.',
    url: 'https://thechinatravelguide.com',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <header className="bg-red-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            <img src="/logo.png" alt="Logo" className="inline-block h-12 w-12 align-middle" />
            China Travel Guide
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Everything foreigners need to know before traveling to China
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#visa" className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">🛂 Visa-Free</a>
            <a href="#payment" className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">💳 Payment</a>
            <a href="#internet" className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">📱 Internet</a>
            <a href="#transport" className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">🚇 Transport</a>
          </div>
        </div>
      </header>

      {/* Visa-Free Policy Section - Summary */}
      <section id="visa" className="py-16 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-4xl">🛂</span> Visa-Free Entry to China
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-green-600 mb-4">✅ Quick Summary</h3>
            <p className="text-gray-700 mb-6">
              China offers visa-free entry for citizens of <strong>30+ countries</strong> plus <strong>144-hour transit visa-free</strong> for 54 countries.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">📍 Visa-Free Countries</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Singapore, Thailand, Malaysia, Japan, Brunei, UAE, Qatar</strong> and more can enter China without a visa for 15-90 days.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">⏱️ 144-Hour Transit</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Citizens of <strong>54 countries</strong> (US, UK, EU, Canada, Australia, etc.) can transit visa-free for up to 6 days.
                </p>
              </div>
            </div>

            <a href="/visa" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              📖 Read Full Visa Guide
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-4xl">💳</span> Payment in China
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">⚠️ The Reality</h3>
            <ul className="space-y-3 text-gray-700">
              <li>💳 Credit cards work at large malls, hotels, and chain stores. However, small vendors and street stalls often don't have card terminals.</li>
              <li>⚠️ Cash can be tricky - vendors often have no change. <strong>But if you say "keep the change," cash is welcome!</strong></li>
              <li>✅ <strong>Alipay & WeChat Pay are essential</strong> - 99% of transactions</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Alipay */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <h4 className="text-2xl font-bold text-blue-600 mb-4">Alipay (支付宝)</h4>
              <p className="text-gray-700 mb-4 text-sm">Recommended for foreigners - more English-friendly</p>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600">1.</span>
                  Download Alipay from App Store
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600">2.</span>
                  Sign up with your foreign phone number
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600">3.</span>
                  Add your credit card (Visa/Mastercard work)
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600">4.</span>
                  Complete identity verification (passport photo)
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-blue-600">5.</span>
                  Ready to scan & pay!
                </li>
              </ol>
              <div className="mt-4 p-3 bg-yellow-100 rounded-lg text-sm space-y-2">
                <div>💡 <strong>Tip:</strong> Search "Alipay+" in app for international card setup guide</div>
                <div>💡 <strong>Tip:</strong> Bind your foreign bank card before arriving in China, just to be safe and prepared!</div>
              </div>
              <a href="/payment/how-to-setup-alipay" className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-sm">
                📖 Full Alipay Setup Guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* WeChat Pay */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <h4 className="text-2xl font-bold text-green-600 mb-4">WeChat Pay (微信支付)</h4>
              <p className="text-gray-700 mb-4 text-sm">More widely accepted, but setup is trickier</p>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="font-bold text-green-600">1.</span>
                  Download WeChat from App Store
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-green-600">2.</span>
                  Sign up and verify your account
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-green-600">3.</span>
                  Go to Me → Services → Wallet
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-green-600">4.</span>
                  Add Cards → Add your foreign card
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-green-600">5.</span>
                  May need a Chinese friend to verify initially
                </li>
              </ol>
              <div className="mt-4 p-3 bg-yellow-100 rounded-lg text-sm space-y-2">
                <div>💡 <strong>Tip:</strong> Some users report needing a Chinese bank card first</div>
                <div>💡 <strong>Tip:</strong> Bind your foreign bank card before arriving in China, just to be safe and prepared!</div>
              </div>
              <a href="/payment/wechat-pay-foreigners" className="mt-4 inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition text-sm">
                📖 Full WeChat Pay Guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Backup Plans */}
          <div className="bg-gray-800 text-white rounded-xl p-6">
            <h4 className="text-xl font-bold mb-4">🪙 Backup Payment Plans</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h5 className="font-semibold text-amber-400 mb-2">Option 1: Cash</h5>
                <p className="text-sm text-gray-300">Withdraw CNY from ATMs (Bank of China, ICBC). Always carry some for emergencies.</p>
              </div>
              <div>
                <h5 className="font-semibold text-amber-400 mb-2">Option 2: UnionPay</h5>
                <p className="text-sm text-gray-300">Get a UnionPay card from your home country - works at most ATMs & some POS.</p>
              </div>
              <div>
                <h5 className="font-semibold text-amber-400 mb-2">Option 3: Ask Hotel</h5>
                <p className="text-sm text-gray-300">Hotels can often help with payments or exchange cash for digital payment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internet Section */}
      <section id="internet" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-4xl">📱</span> Internet & Connectivity
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">⚠️ The Great Firewall</h3>
            <p className="text-gray-700 mb-4">
              Google, Facebook, Instagram, WhatsApp, YouTube, Twitter, Gmail are <strong>all blocked</strong> in China.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-sm text-gray-700">
                <strong>Important:</strong> Set up your solutions BEFORE arriving in China. Once you're there, you can't download VPN apps.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* eSIM */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
                <h3 className="text-2xl font-bold">1. eSIM - Data Connection</h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-bold text-purple-700 mb-2">Airalo</h4>
                    <p className="text-sm text-gray-600 mb-2">~$5-10/GB</p>
                    <p className="text-xs text-gray-500">Easy app, good coverage</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-bold text-purple-700 mb-2">Nomad</h4>
                    <p className="text-sm text-gray-600 mb-2">~$4-8/GB</p>
                    <p className="text-xs text-gray-500">Competitive prices</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-bold text-purple-700 mb-2">China Unicom</h4>
                    <p className="text-sm text-gray-600 mb-2">~$30/unlimited</p>
                    <p className="text-xs text-gray-500">Official carrier, no VPN needed</p>
                    <a href="https://esim.cuniq.com/en" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600 hover:underline mt-1 block">esim.cuniq.com</a>
                  </div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Pro Tip:</strong> China Unicom eSIM works without VPN because it's a Chinese carrier (data is already "inside" the firewall).
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <p className="text-sm text-blue-700">
                    <strong>🎁 Airalo Discount:</strong> Use code <strong className="text-purple-600">JIAN8394</strong> for <strong className="text-green-600">$3 OFF</strong>!
                  </p>
                </div>
                <a href="/internet/best-esim-for-china" className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition text-sm">
                  📖 Full eSIM Comparison Guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* VPN */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6">
                <h3 className="text-2xl font-bold">2. VPN - Access Blocked Apps</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  If you need Google, WhatsApp, Instagram etc., you need a VPN. Install BEFORE arriving!
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">✅ Recommended VPNs</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Astrill VPN (most reliable, expensive)</li>
                      <li>• ExpressVPN (good, but inconsistent)</li>
                      <li>• NordVPN (hit or miss)</li>
                      <li>• LetsVPN (cheap, works well)</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-red-50">
                    <h4 className="font-bold text-red-700 mb-2">❌ Don't Rely On</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Free VPNs (won't work)</li>
                      <li>• Hotel WiFi VPN (unreliable)</li>
                      <li>• "Just use roaming" (expensive, slow)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Apps */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                <h3 className="text-2xl font-bold">3. Chinese App Alternatives</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Instead of</th>
                        <th className="text-left py-3 px-4">Use in China</th>
                        <th className="text-left py-3 px-4">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Google Maps</td>
                        <td className="py-3 px-4">Apple Maps / Baidu Maps</td>
                        <td className="py-3 px-4">Navigation</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Uber</td>
                        <td className="py-3 px-4">Didi (has English!)</td>
                        <td className="py-3 px-4">Ride-hailing</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Yelp/TripAdvisor</td>
                        <td className="py-3 px-4">Trip.com / Dianping</td>
                        <td className="py-3 px-4">Restaurant reviews</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Booking.com</td>
                        <td className="py-3 px-4">Trip.com / Agoda</td>
                        <td className="py-3 px-4">Hotel booking</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">WhatsApp</td>
                        <td className="py-3 px-4">WeChat</td>
                        <td className="py-3 px-4">Messaging (with VPN for WhatsApp)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section id="transport" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-4xl">🚇</span> Getting Around
          </h2>

          {/* Didi */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-3">
              <span className="text-3xl">🚗</span> Didi Chuxing (Chinese Uber)
            </h3>
            <p className="text-gray-700 mb-6">
              Didi has an <strong>English app</strong> and accepts international credit cards!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">How to Use:</h4>
                <ol className="space-y-2 text-gray-700 text-sm">
                  <li>1. Download "Didi" from App Store (the international version)</li>
                  <li>2. Sign up with your foreign phone number</li>
                  <li>3. Add your credit card in Settings → Payment</li>
                  <li>4. Enter destination (English addresses work in major cities)</li>
                  <li>5. Driver will call - use WeChat/Alipay translation if needed</li>
                </ol>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3">💡 Tips:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Show your hotel's Chinese address to the driver</li>
                  <li>• In-app chat has auto-translation</li>
                  <li>• Cheaper than taxis in most cities</li>
                  <li>• Available in 400+ Chinese cities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Metro */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-3">
              <span className="text-3xl">🚇</span> Metro / Subway
            </h3>
            <p className="text-gray-700 mb-6">
              Major cities (Beijing, Shanghai, Guangzhou, Shenzhen) have excellent English-friendly metro systems.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Buying Tickets</h4>
                <p className="text-sm text-gray-600">Use ticket machines (English available) or Alipay metro card</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Alipay Metro</h4>
                <p className="text-sm text-gray-600">In Alipay: Transport → Metro → Get QR code</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">Navigation</h4>
                <p className="text-sm text-gray-600">Apple Maps shows metro routes in English</p>
              </div>
            </div>
          </div>

          {/* High-Speed Rail */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-3">
              <span className="text-3xl">🚄</span> High-Speed Train
            </h3>
            <p className="text-gray-700 mb-6">
              China's high-speed rail is the best way to travel between cities. Fast, clean, and punctual.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-blue-700 mb-4">📱 How to Book (English):</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Trip.com App (Recommended)</h5>
                    <p className="text-sm text-gray-600">English interface, accepts foreign cards, small booking fee</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Railway 12306 App</h5>
                    <p className="text-sm text-gray-600">Official app, has English version, no fee but buggy</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Train Station</h5>
                    <p className="text-sm text-gray-600">Bring passport, expect queues, staff may not speak English</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🎫 At the Station:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Arrive 45+ minutes early</li>
                  <li>• Bring your passport (required!)</li>
                  <li>• No paper ticket needed - scan passport at gate</li>
                  <li>• Find your gate on departure boards (English)</li>
                  <li>• Seat number on booking confirmation</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <h4 className="font-semibold text-amber-700 mb-3">⚠️ Important:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Book in advance during holidays</li>
                  <li>• Second class is comfortable & affordable</li>
                  <li>• Food cars available on long trips</li>
                  <li>• Power outlets at most seats</li>
                </ul>
              </div>
            </div>

            <a href="/transport/high-speed-rail-booking" className="mt-6 inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              📖 Full High-Speed Rail Booking Guide
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Quick Comparison */}
          <div className="bg-gray-800 text-white rounded-xl p-6">
            <h4 className="text-xl font-bold mb-4">📊 Transport Comparison</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3">Method</th>
                    <th className="text-left py-3">Best For</th>
                    <th className="text-left py-3">English Support</th>
                    <th className="text-left py-3">Payment</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-600">
                    <td className="py-3">Didi</td>
                    <td className="py-3">City travel</td>
                    <td className="py-3">✅ Full app</td>
                    <td className="py-3">Credit card</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="py-3">Metro</td>
                    <td className="py-3">Budget city travel</td>
                    <td className="py-3">✅ Signs in English</td>
                    <td className="py-3">Alipay/Cash</td>
                  </tr>
                  <tr className="border-b border-gray-600">
                    <td className="py-3">High-Speed Rail</td>
                    <td className="py-3">Inter-city</td>
                    <td className="py-3">✅ Trip.com</td>
                    <td className="py-3">Credit card</td>
                  </tr>
                  <tr>
                    <td className="py-3">Taxi</td>
                    <td className="py-3">When Didi unavailable</td>
                    <td className="py-3">❌ Rarely</td>
                    <td className="py-3">Cash/WeChat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">🇨🇳 Have a Great Trip!</h3>
          <p className="text-gray-400 mb-8">
            China is incredibly safe, efficient, and welcoming to foreigners. 
            The challenges are surmountable - millions do it every year!
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <div className="text-sm text-gray-400">
              <span className="text-amber-400">💳</span> Setup Alipay before you go
            </div>
            <div className="text-sm text-gray-400">
              <span className="text-purple-400">📱</span> Get eSIM + VPN ready
            </div>
            <div className="text-sm text-gray-400">
              <span className="text-green-400">🚗</span> Download Didi app
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <h4 className="text-lg font-semibold mb-4">📬 Contact Us</h4>
            <p className="text-gray-400 text-sm mb-4">
              Have questions, suggestions, or found an error? We'd love to hear from you!
            </p>
            <a 
              href="mailto:feedback@thechinatravelguide.com" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              📧 feedback@thechinatravelguide.com
            </a>
          </div>
          
          <p className="text-gray-500 text-sm mt-8">
            Last updated: April 2026 | Made with ❤️ for travelers
          </p>
        </div>
      </footer>
    </main>
  )
}
