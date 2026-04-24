import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Setup WeChat Pay as a Foreigner',
  description: 'Complete guide to setup WeChat Pay with international credit card. Step-by-step tutorial for foreigners in China. 2026 updated.',
  keywords: ['WeChat Pay for foreigners', 'WeChat Pay international card', 'WeChat Pay setup', 'China mobile payment', 'WeChat Pay visa'],
  openGraph: {
    title: 'How to Setup WeChat Pay as a Foreigner',
    description: 'Complete guide to setup WeChat Pay with international credit card.',
    url: 'https://thechinatravelguide.com/payment/wechat-pay-foreigners',
    type: 'website',
  },
}

export default function WeChatPayPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-green-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <a href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Back to Home</a>
          <h1 className="text-4xl font-bold mb-4">💚 How to Setup WeChat Pay as a Foreigner</h1>
          <p className="text-xl opacity-90">Complete guide to bind your international credit card to WeChat Pay</p>
        </div>
      </header>

      {/* Quick Info */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>✅ Updated:</strong> April 2026 | <strong>⏱️ Time needed:</strong> 20-30 minutes | <strong>💳 Cards accepted:</strong> Visa, Mastercard, JCB, Diners Club
            </p>
          </div>
        </div>
      </section>

      {/* Before You Start */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 Before You Start</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> What You Need
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium">Valid passport</p>
                    <p className="text-sm text-gray-600">For identity verification</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium">International credit/debit card</p>
                    <p className="text-sm text-gray-600">Visa, Mastercard, JCB, or Diners Club</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium">Foreign phone number</p>
                    <p className="text-sm text-gray-600">Can receive SMS verification codes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium">WeChat app</p>
                    <p className="text-sm text-gray-600">Download from App Store or Google Play</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚠️</span> Important Notes
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">⚠️</span>
                  <div>
                    <p className="font-medium">More complex than Alipay</p>
                    <p className="text-sm text-gray-600">WeChat Pay verification can be trickier for foreigners</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">⚠️</span>
                  <div>
                    <p className="font-medium">May need Chinese friend</p>
                    <p className="text-sm text-gray-600">Some users report needing verification from a Chinese user</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">⚠️</span>
                  <div>
                    <p className="font-medium">Setup BEFORE arriving</p>
                    <p className="text-sm text-gray-600">Complete verification before your trip</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Alipay vs WeChat Pay Comparison */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">🆚 Alipay vs WeChat Pay</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left py-4 px-6">Feature</th>
                  <th className="text-left py-4 px-6">💙 Alipay</th>
                  <th className="text-left py-4 px-6">💚 WeChat Pay</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-6 font-semibold">Foreigner-friendly</td>
                  <td className="py-3 px-6 text-green-600">✅ Very easy</td>
                  <td className="py-3 px-6 text-amber-600">⚠️ Moderate</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-6 font-semibold">Setup time</td>
                  <td className="py-3 px-6">15-20 minutes</td>
                  <td className="py-3 px-6">20-30 minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-semibold">Merchant coverage</td>
                  <td className="py-3 px-6">99% of China</td>
                  <td className="py-3 px-6">99% of China</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-6 font-semibold">English interface</td>
                  <td className="py-3 px-6 text-green-600">✅ Excellent</td>
                  <td className="py-3 px-6 text-green-600">✅ Good</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-semibold">International cards</td>
                  <td className="py-3 px-6 text-green-600">✅ Fully supported</td>
                  <td className="py-3 px-6 text-green-600">✅ Supported</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-6 font-semibold">Verification</td>
                  <td className="py-3 px-6 text-green-600">✅ Passport only</td>
                  <td className="py-3 px-6 text-amber-600">⚠️ May need Chinese friend</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-semibold">Our recommendation</td>
                  <td className="py-3 px-6 text-green-600 font-bold">✅ Recommended</td>
                  <td className="py-3 px-6 text-blue-600">👍 Good backup</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="text-gray-700">
              <strong>💡 Our Recommendation:</strong> Start with <strong>Alipay</strong> (easier for foreigners), then set up WeChat Pay as a backup. 
              Having both ensures you can pay anywhere in China!
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">📖 Step-by-Step Setup Guide</h2>

          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Download WeChat App</h3>
                <p className="text-gray-600">Get the official WeChat app from your app store</p>
              </div>
            </div>

            <div className="ml-16 space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">For iOS (iPhone):</p>
                <p className="text-sm text-gray-600 mb-2">Search "WeChat" in the App Store</p>
                <p className="text-xs text-gray-500">Developer: WeChat</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">For Android:</p>
                <p className="text-sm text-gray-600 mb-2">Search "WeChat" in Google Play Store</p>
                <p className="text-xs text-gray-500">Or download from official website: wechat.com</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>💡 Tip:</strong> The app icon is green with two white chat bubbles. Make sure to download the official app.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Sign Up with Phone Number</h3>
                <p className="text-gray-600">Create your WeChat account using your foreign phone number</p>
              </div>
            </div>

            <div className="ml-16 space-y-4">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <p className="font-semibold text-gray-800">Open WeChat app</p>
                    <p className="text-sm text-gray-600">Tap "Sign Up" or "Register"</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-800">Select your country</p>
                    <p className="text-sm text-gray-600">Choose your country code from the dropdown</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-800">Enter your phone number</p>
                    <p className="text-sm text-gray-600">Don't include the country code again</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <p className="font-semibold text-gray-800">Get SMS verification code</p>
                    <p className="text-sm text-gray-600">Wait for the 6-digit code</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  <div>
                    <p className="font-semibold text-gray-800">Complete profile</p>
                    <p className="text-sm text-gray-600">Set your name and password</p>
                  </div>
                </li>
              </ol>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>⚠️ Note:</strong> WeChat may require verification from an existing WeChat user. If so, ask a Chinese friend or hotel staff to help.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Complete Real-Name Verification</h3>
                <p className="text-gray-600">Verify your identity with passport (required by Chinese law)</p>
              </div>
            </div>

            <div className="ml-16 space-y-4">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <p className="font-semibold text-gray-800">Go to "Me" tab</p>
                    <p className="text-sm text-gray-600">Bottom right corner</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-800">Tap "Services" or "Wallet"</p>
                    <p className="text-sm text-gray-600">Look for the wallet icon</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-800">Select "Identity Verification"</p>
                    <p className="text-sm text-gray-600">Or "Real-Name Auth"</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <p className="font-semibold text-gray-800">Select "Passport" as ID type</p>
                    <p className="text-sm text-gray-600">Enter your passport information</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  <div>
                    <p className="font-semibold text-gray-800">Upload passport photo</p>
                    <p className="text-sm text-gray-600">Take a clear photo of your passport info page</p>
                  </div>
                </li>
              </ol>

              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>✅ Verification time:</strong> Usually within 24 hours. You'll receive a notification when approved.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">4</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Add Your International Credit Card</h3>
                <p className="text-gray-600">Bind your Visa/Mastercard to start paying</p>
              </div>
            </div>

            <div className="ml-16 space-y-4">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <p className="font-semibold text-gray-800">Go to "Me" → "Services" → "Wallet"</p>
                    <p className="text-sm text-gray-600">Tap "Cards" or "Bank Cards"</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-800">Tap "Add Card"</p>
                    <p className="text-sm text-gray-600">The big "+" button</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-800">Enter card details</p>
                    <div className="text-sm text-gray-600 mt-2 space-y-1">
                      <p>• Card number (16 digits)</p>
                      <p>• Expiry date (MM/YY)</p>
                      <p>• CVV (3 digits on back)</p>
                      <p>• Cardholder name (as on card)</p>
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <p className="font-semibold text-gray-800">Set payment password</p>
                    <p className="text-sm text-gray-600">Choose a 6-digit PIN for payments</p>
                  </div>
                </li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>💡 Pro Tip:</strong> WeChat Pay and Alipay use the same transaction fees. Transactions over 200 CNY have a 3% fee.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>⚠️ Card Issues?</strong> Some users report needing to contact their bank to authorize transactions with Chinese merchants.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">5</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Start Using WeChat Pay!</h3>
                <p className="text-gray-600">You're ready to pay in China</p>
              </div>
            </div>

            <div className="ml-16 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">📱 How to Pay:</h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">Option 1: Scan Merchant's QR Code</p>
                    <ol className="text-sm text-gray-600 space-y-1">
                      <li>1. Tap "+" → "Scan" at the top</li>
                      <li>2. Point camera at merchant's QR code</li>
                      <li>3. Enter amount (if not pre-filled)</li>
                      <li>4. Enter your 6-digit payment password</li>
                      <li>5. Show confirmation to merchant</li>
                    </ol>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">Option 2: Merchant Scans Your Code</p>
                    <ol className="text-sm text-gray-600 space-y-1">
                      <li>1. Tap "+" → "Money" or "Pay/Receive"</li>
                      <li>2. Show your QR code to merchant</li>
                      <li>3. Merchant scans and deducts amount</li>
                      <li>4. You'll see confirmation instantly</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>✅ Success!</strong> You can now use WeChat Pay at millions of merchants across China!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Fees */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">💰 Transaction Fees Explained</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Transaction Amount</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Fee</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-800">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">≤ 200 CNY</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">FREE</td>
                    <td className="py-3 px-4 text-gray-600">Meal, taxi, coffee - no fee!</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">&gt; 200 CNY</td>
                    <td className="py-3 px-4 text-amber-600 font-semibold">3% fee</td>
                    <td className="py-3 px-4 text-gray-600">300 CNY purchase = 9 CNY fee (~$1.30)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>💡 Money-saving tip:</strong> For large purchases (&gt;200 CNY), consider splitting into multiple transactions if the merchant allows it.
              </p>
            </div>

            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-600">
                <strong>Note:</strong> Exchange rates are set by your card issuer, not WeChat. Check with your bank for foreign transaction fees (typically 1-3% on top of WeChat's fee).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">🔧 Common Issues & Solutions</h2>
          
          <div className="space-y-6">
            {/* Issue 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">❌</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Verification Requires Chinese Friend</h3>
                  <p className="text-gray-600 mb-4">WeChat asks for verification from an existing Chinese user.</p>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">✅ Solutions:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Ask hotel staff:</strong> Most hotels are happy to help guests verify</li>
                      <li>• <strong>Ask Chinese friends:</strong> Anyone with WeChat for 6+ months can verify</li>
                      <li>• <strong>Try Alipay instead:</strong> Alipay doesn't require friend verification</li>
                      <li>• <strong>Wait and try again:</strong> Sometimes the requirement goes away after a few days</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Issue 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">❌</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Card Declined / Payment Failed</h3>
                  <p className="text-gray-600 mb-4">Your international card is rejected when trying to add or pay.</p>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">✅ Solutions:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Call your bank:</strong> Inform them you're traveling to China</li>
                      <li>• <strong>Check card type:</strong> Ensure it's Visa, Mastercard, JCB, or Diners Club</li>
                      <li>• <strong>Verify billing address:</strong> Make sure it matches what your bank has</li>
                      <li>• <strong>Try Alipay:</strong> Alipay has better international card support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Issue 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">❌</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">SMS Verification Code Not Received</h3>
                  <p className="text-gray-600 mb-4">You're not getting the 6-digit verification code.</p>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">✅ Solutions:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Wait 5 minutes:</strong> Sometimes there's a delay with international SMS</li>
                      <li>• <strong>Check spam/junk:</strong> Some carriers filter these messages</li>
                      <li>• <strong>Try again:</strong> Request a new code (max 3 attempts per hour)</li>
                      <li>• <strong>Enable international roaming:</strong> Contact your carrier before traveling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Resources */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">🔗 Official Resources & Support</h2>
          
          <div className="bg-gray-800 text-white rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">WeChat Pay Customer Service</h3>
                  <p className="text-gray-300 text-sm mb-2">In-app support available</p>
                  <p className="text-sm text-gray-300">In-app: Me → Settings → Help & Feedback</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">🌐</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">WeChat Pay Official Website</h3>
                  <p className="text-gray-300 text-sm mb-2">Information for international users</p>
                  <a href="https://pay.weixin.qq.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">https://pay.weixin.qq.com/</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">💳</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Supported Cards</h3>
                  <p className="text-gray-300 text-sm mb-2">International card networks accepted:</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Visa (Credit & Debit)</li>
                    <li>• Mastercard (Credit & Debit)</li>
                    <li>• JCB</li>
                    <li>• Diners Club</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="p-4 bg-blue-600/20 rounded-lg border border-blue-600">
                <p className="text-sm text-blue-200">
                  <strong>💡 Pro Tip:</strong> WeChat Pay is more popular in smaller cities and rural areas. Having both Alipay and WeChat Pay ensures maximum coverage!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <a href="/" className="text-blue-400 hover:underline">← Back to Home</a>
          
          {/* Contact Section */}
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
