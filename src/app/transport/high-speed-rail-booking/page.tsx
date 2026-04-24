import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'China High-Speed Rail Booking Guide',
  description: 'Complete guide to booking train tickets in China. 12306 vs Trip.com comparison, seat classes, boarding process, and pro tips for foreigners. 2026 updated.',
  keywords: ['China train booking', '12306 for foreigners', 'China high-speed rail', 'Trip.com train', 'China train tickets', 'China railway guide'],
  openGraph: {
    title: 'China High-Speed Rail Booking Guide - 2026',
    description: 'Complete guide to booking train tickets in China. 12306 vs Trip.com, seat classes, pro tips.',
    url: 'https://thechinatravelguide.com/transport/high-speed-rail-booking',
    type: 'website',
  },
}

export default function HighSpeedRailPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <header className="bg-red-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <a href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Back to Home</a>
          <h1 className="text-4xl font-bold mb-4">🚄 China High-Speed Rail Booking Guide</h1>
          <p className="text-xl opacity-90">Complete guide to booking train tickets in China (2026)</p>
        </div>
      </header>

      {/* Quick Summary */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>✅ Updated:</strong> April 2026 | <strong>⏱️ Read time:</strong> 15 minutes | <strong>💰 Price:</strong> From ¥50-1500
            </p>
          </div>
        </div>
      </section>

      {/* Why High-Speed Rail */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">🤔 Why Take High-Speed Rail in China?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4">✅ Advantages</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium">Fast & Punctual</p>
                    <p className="text-sm text-gray-600">350 km/h top speed, 98% on-time rate</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium">Comfortable</p>
                    <p className="text-sm text-gray-600">Spacious seats, clean toilets, dining car</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium">City Center to City Center</p>
                    <p className="text-sm text-gray-600">No airport transfers needed</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium">Affordable</p>
                    <p className="text-sm text-gray-600">Beijing-Shanghai (1318km) from ¥550</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4">📊 Popular Routes</h3>
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold">Beijing ↔ Shanghai</p>
                  <p className="text-gray-600">4.5 hours | ¥550-1800 | 1318 km</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold">Shanghai ↔ Hangzhou</p>
                  <p className="text-gray-600">1 hour | ¥70-120 | 175 km</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold">Guangzhou ↔ Shenzhen</p>
                  <p className="text-gray-600">30 min | ¥75-100 | 142 km</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Methods */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">🎫 How to Book Train Tickets</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left py-4 px-6">Method</th>
                  <th className="text-left py-4 px-6">Pros</th>
                  <th className="text-left py-4 px-6">Cons</th>
                  <th className="text-left py-4 px-6">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-6 font-semibold">📱 12306 App</td>
                  <td className="py-3 px-6 text-sm">Official, no fees, has English</td>
                  <td className="py-3 px-6 text-sm">Buggy, needs Chinese phone</td>
                  <td className="py-3 px-6 text-sm">Chinese speakers</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-6 font-semibold">🌐 Trip.com</td>
                  <td className="py-3 px-6 text-sm">English, 24/7 support</td>
                  <td className="py-3 px-6 text-sm">Service fee (¥20-50)</td>
                  <td className="py-3 px-6 text-sm">Foreigners ⭐</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-semibold">🏢 Train Station</td>
                  <td className="py-3 px-6 text-sm">No fees</td>
                  <td className="py-3 px-6 text-sm">Long queues</td>
                  <td className="py-3 px-6 text-sm">Last-minute</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <h4 className="font-semibold text-blue-800 mb-2">💡 Our Recommendation:</h4>
            <p className="text-blue-700">
              For foreigners, we recommend <strong>Trip.com</strong> for the first booking. 
              The small service fee is worth the English interface and customer support.
            </p>
          </div>
        </div>
      </section>

      {/* Trip.com Tutorial */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">🌐 Booking on Trip.com (Step by Step)</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Download Trip.com App</h3>
                  <p className="text-gray-600">Available on iOS and Android</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Search for Trains</h3>
                  <p className="text-gray-600">Enter departure city, arrival city, and travel date</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Select Train & Seat</h3>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-semibold">Second Class (二等座)</p>
                      <p className="text-gray-600">3+2 seating, comfortable, best value ⭐</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-semibold">First Class (一等座)</p>
                      <p className="text-gray-600">2+2 seating, more legroom, +30% price</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-semibold">Business Class (商务座)</p>
                      <p className="text-gray-600">1+2 seating, lie-flat, 3x price</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">4</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Add Passenger Information</h3>
                  <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p className="font-semibold text-gray-800 mb-2">⚠️ Important:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Name must match passport EXACTLY</li>
                      <li>• Use ALL CAPS as shown in passport</li>
                      <li>• Passport number must be correct</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">5</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Payment</h3>
                  <p className="text-gray-600">Pay with Visa, Mastercard, or American Express</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boarding */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">🎫 Ticket Collection & Boarding</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">📱 E-Ticket (Most Common)</h3>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-green-600">1.</span>
                  <span>Book online and receive confirmation</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-green-600">2.</span>
                  <span>Go directly to station on travel day</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-green-600">3.</span>
                  <span>Scan passport at ticket gate</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-green-600">4.</span>
                  <span>Find platform and board</span>
                </li>
              </ol>
              <div className="mt-4 bg-green-50 p-4 rounded-lg">
                <p className="text-xs text-green-700">
                  <strong>✅ No paper ticket needed!</strong> Just bring your passport.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">📄 Paper Ticket (Optional)</h3>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">1.</span>
                  <span>Arrive at station 1 hour early</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">2.</span>
                  <span>Find ticket collection machines</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">3.</span>
                  <span>Scan passport and booking number</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">4.</span>
                  <span>Collect paper ticket</span>
                </li>
              </ol>
              <div className="mt-4 bg-amber-50 p-4 rounded-lg">
                <p className="text-xs text-amber-700">
                  <strong>⚠️ Note:</strong> Paper tickets are for souvenir only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">💡 Tips & Tricks</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-3">🎯 Book in Advance</h3>
              <p className="text-gray-700 text-sm">
                Tickets open 15 days before departure. For popular routes, book as soon as they're released.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-3">🎯 Avoid Peak Times</h3>
              <p className="text-gray-700 text-sm">
                Friday evenings and Sunday afternoons are busiest. Travel mid-week for better availability.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-3">🎯 Arrive Early</h3>
              <p className="text-gray-700 text-sm">
                Arrive 45-60 minutes early for first time. You need to go through security and find your gate.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-3">🎯 Bring Food</h3>
              <p className="text-gray-700 text-sm">
                Dining car food is expensive (¥30-60). Buy snacks and drinks before boarding.
              </p>
            </div>
          </div>

          {/* Pro Tips from Experience */}
          <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border-2 border-purple-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">🌟 Pro Tips from Experience</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <p className="text-sm text-gray-700">
                    <strong>Register 5+ days early:</strong> Don't wait until last minute. Passport verification takes 3-5 days.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <p className="text-sm text-gray-700">
                    <strong>Name exactly as passport:</strong> Surname first, Given name second. Keep spaces and dots. No dashes!
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <p className="text-sm text-gray-700">
                    <strong>Multiple payment methods:</strong> Have Alipay + WeChat + foreign card as backup.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <p className="text-sm text-gray-700">
                    <strong>Screenshot everything:</strong> Booking confirmation, passport upload, payment receipt.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <p className="text-sm text-gray-700">
                    <strong>Download offline maps:</strong> Station WiFi can be spotty. Have navigation ready.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <p className="text-sm text-gray-700">
                    <strong>Keep passport handy:</strong> Need it for verification, boarding, hotel check-in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12306 Common Problems */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">⚠️ Common Problems with 12306 for Foreigners</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-gray-800 mb-2">1. Identity Verification Takes Forever</h3>
                <span className="text-red-600 font-bold text-sm">⭐⭐⭐⭐⭐ Most Frustrating</span>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Problem:</strong> Passport registration requires manual verification (3-5 working days).
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-red-700">
                  <strong>Reality:</strong> Chinese ID = instant approval. Foreign passport = 3-5 days waiting. If rejected (blurry photo, name format), start over!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-gray-800 mb-2">2. Name Format Traps</h3>
                <span className="text-orange-600 font-bold text-sm">⭐⭐⭐⭐ Very Frustrating</span>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Rules:</strong> Surname first, Given name second. Allowed: space, dot (.). NOT allowed: dash (-), slash (/), accents (é/ñ).
              </p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-orange-700">
                  <strong>Common mistakes:</strong> "John Smith" entered as "Smith John" ❌ | "José García" without accents ❌ | "Mary-Jane" with dash ❌
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-gray-800 mb-2">3. Payment Issues with International Cards</h3>
                <span className="text-yellow-600 font-bold text-sm">⭐⭐⭐⭐ Very Frustrating</span>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Reality:</strong> 12306 "supports" Visa/Mastercard, but many foreign cards get declined or blocked.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-yellow-700">
                  <strong>Tip:</strong> Link Alipay/WeChat (Chinese bank account) for best results. Foreign cards = try multiple times.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-gray-800 mb-2">4. Incomplete English Interface</h3>
                <span className="text-blue-600 font-bold text-sm">⭐⭐⭐ Moderately Frustrating</span>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>What they say:</strong> "English version available!"
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Reality:</strong> Many prompts, errors, buttons still in Chinese. Self-service machines: almost no English. Station signs: mostly Chinese.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-gray-800 mb-2">5. Complicated Refunds & Changes</h3>
                <span className="text-green-600 font-bold text-sm">⭐⭐⭐ Moderately Frustrating</span>
              </div>
              <p className="text-gray-700 mb-3">
                <strong>Peak season:</strong> Don't understand Chinese → can't use waitlist feature. Refund rules complex, English instructions minimal.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-700">
                  <strong>Tip:</strong> Customer service has limited English. Communication can be difficult.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Guide */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">🤔 Should You Use 12306? (Quick Decision Guide)</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-700 mb-4">✅ Use 12306 If:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Living in China long-term</li>
                <li>• Travel frequently by train</li>
                <li>• Have Chinese payment methods</li>
                <li>• Comfortable with technology</li>
                <li>• Want to avoid service fees</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4">🌟 Use Trip.com If:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Short-term tourist</li>
                <li>• First time in China</li>
                <li>• Want hassle-free experience</li>
                <li>• Don't mind small fee (¥20-50)</li>
                <li>• Value English support</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-2 border-purple-500 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-700 mb-4">🎫 Use Station Window If:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Not tech-savvy</li>
                <li>• Urgent travel</li>
                <li>• Have time to queue</li>
                <li>• Want human assistance</li>
                <li>• First time, prefer help</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 My Honest Recommendation</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>First time in China?</strong> → Use Trip.com. Worth every yuan for peace of mind!
              </p>
              <p>
                <strong>Living in China?</strong> → Learn 12306. Worth it long-term (no fees).
              </p>
              <p>
                <strong>Urgent travel?</strong> → Go to station window. Bring passport, be patient.
              </p>
              <p className="text-sm text-gray-600 italic">
                Simple as that!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">❓ Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">🛂 Can foreigners book train tickets?</h3>
              <p className="text-gray-700">
                <strong>Yes!</strong> Foreigners can book tickets with a valid passport. 
                Trip.com is the easiest platform for English speakers.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">🌐 Does 12306 have English version?</h3>
              <p className="text-gray-700">
                <strong>Yes!</strong> 12306 App and website have English interfaces. 
                However, the English version is buggy, requires Chinese phone number for registration, 
                and needs Chinese payment methods (Alipay/WeChat). For most foreigners, Trip.com is easier.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">💳 Can I use foreign credit cards?</h3>
              <p className="text-gray-700">
                <strong>On Trip.com:</strong> Yes, Visa/Mastercard accepted. <br/>
                <strong>On 12306:</strong> No, need Alipay/WeChat Pay.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">🔄 Can I refund tickets?</h3>
              <p className="text-gray-700">
                <strong>Yes!</strong> Refunds available up to 30 minutes before departure. 
                Fees: 5% (8+ days before), 10% (48h-8 days), 20% (&lt;48h).
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">📞 Emergency Contacts</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold">Railway Customer Service</p>
                    <p className="text-sm">Hotline: <strong className="text-green-600 text-lg">12306</strong></p>
                    <p className="text-xs text-gray-500">From overseas: +86-10-12306 (24/7, some English)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-semibold">Trip.com Support</p>
                    <p className="text-sm">24/7 English customer service available</p>
                    <p className="text-xs text-gray-500">In-app chat or phone support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-6 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">🔗 Official Resources</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">🌐</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Trip.com (English)</h3>
                <p className="text-gray-300 text-sm mb-2">Best for foreigners</p>
                <a href="https://www.trip.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">https://www.trip.com</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Railway Customer Service</h3>
                <p className="text-gray-300 text-sm mb-2">24/7 hotline</p>
                <p className="text-xl font-bold text-green-400">12306</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <a href="/" className="text-blue-400 hover:underline">← Back to Home</a>
          
          <div className="border-t border-gray-800 pt-8 mt-8">
            <h4 className="text-lg font-semibold mb-4">📬 Have Feedback?</h4>
            <p className="text-gray-400 text-sm mb-4">
              Found an error or have suggestions? We'd love to hear from you!
            </p>
            <a 
              href="mailto:feedback@thechinatravelguide.com" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              📧 feedback@thechinatravelguide.com
            </a>
          </div>
          
          <div className="mt-4 text-sm text-gray-400">
            <p>Last updated: April 2026</p>
            <p className="mt-2">Made with ❤️ for travelers</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
