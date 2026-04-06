export default function AlipayPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <a href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Back to Home</a>
          <h1 className="text-4xl font-bold mb-4">💳 How to Setup Alipay as a Foreigner</h1>
          <p className="text-xl opacity-90">Complete step-by-step guide to bind your international credit card</p>
        </div>
      </header>

      {/* Quick Info */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>✅ Updated:</strong> March 2026 (Verified with Alipay+ Official) | <strong>⏱️ Time needed:</strong> 15-20 minutes | <strong>💳 Cards accepted:</strong> Visa, Mastercard, JCB, Diners Club, Discover
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
                    <p className="text-sm text-gray-600">Visa, Mastercard, JCB, Diners Club, or Discover</p>
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
                    <p className="font-medium">Alipay app</p>
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
                    <p className="font-medium">Setup BEFORE arriving in China</p>
                    <p className="text-sm text-gray-600">Much harder to complete verification after arrival</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">⚠️</span>
                  <div>
                    <p className="font-medium">Transaction fees apply</p>
                    <p className="text-sm text-gray-600">3% fee for transactions over 200 CNY (~$28)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">⚠️</span>
                  <div>
                    <p className="font-medium">Some features limited</p>
                    <p className="text-sm text-gray-600">Red packets, wealth management not available for foreign users</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">📖 Step-by-Step Setup Guide</h2>

          {/* Official Quick Start */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 mb-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🚀</span>
              <h3 className="text-2xl font-bold">Official Quick Start (Alipay+)</h3>
            </div>
            <p className="text-blue-100 mb-6 text-lg">
              According to Alipay+ official guide, getting started takes just 2 steps:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl font-bold">1</span>
                  <h4 className="text-xl font-bold">Download & Register</h4>
                </div>
                <p className="text-blue-50 text-sm">
                  Download Alipay App, enter your mobile phone number, tap "Next" to register.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl font-bold">2</span>
                  <h4 className="text-xl font-bold">Add Bank Card</h4>
                </div>
                <p className="text-blue-50 text-sm">
                  Tap "Add Now" and follow on-page prompts to complete the process.
                </p>
              </div>
            </div>
            <p className="text-blue-200 text-xs mt-6 text-center">
              Source: <a href="https://www.alipayplus.com/pay-in-the-chinese-mainland/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Alipay+ Official Website</a>
            </p>
          </div>

          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Download Alipay App</h3>
                <p className="text-gray-600">Get the official Alipay app from your app store</p>
              </div>
            </div>

            <div className="ml-16 space-y-4">
              {/* Screenshot 1 - App Store */}
              <div className="rounded-lg overflow-hidden shadow-lg mb-4 w-64 mx-auto">
                <img src="/images/alipay/step1-app-store.png" alt="Alipay app listing in App Store showing Alipay - Simplify Your Life" className="w-full h-auto" />
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">For iOS (iPhone):</p>
                <p className="text-sm text-gray-600 mb-2">Search "Alipay" in the App Store</p>
                <p className="text-xs text-gray-500">Look for: Alipay - Simplify Your Life by Alipay (China) Co., Ltd.</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">For Android:</p>
                <p className="text-sm text-gray-600 mb-2">Search "Alipay" in Google Play Store</p>
                <p className="text-xs text-gray-500">Or download from official website: intl.alipay.com</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>💡 Tip:</strong> The app icon is blue with "支" character. Make sure to download the official app, not third-party clones.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Sign Up with Phone Number</h3>
                <p className="text-gray-600">Create your Alipay account using your foreign phone number</p>
              </div>
            </div>

            <div className="ml-16 space-y-4">
              {/* Screenshot 2 - SMS Verification */}
              <div className="rounded-lg overflow-hidden shadow-lg mb-4 w-64 mx-auto">
                <img src="/images/alipay/step2-sms-verification.jpg" alt="Alipay SMS verification code input screen" className="w-full h-auto" />
              </div>

              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <p className="font-semibold text-gray-800">Open Alipay app</p>
                    <p className="text-sm text-gray-600">Tap "Sign Up" or "Register"</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-800">Select your country</p>
                    <p className="text-sm text-gray-600">Choose your country code from the dropdown (e.g., +1 for US, +44 for UK)</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-800">Enter your phone number</p>
                    <p className="text-sm text-gray-600">Don't include the country code again, just your local number</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <p className="font-semibold text-gray-800">Get SMS verification code</p>
                    <p className="text-sm text-gray-600">Wait for the 6-digit code (may take 1-2 minutes)</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  <div>
                    <p className="font-semibold text-gray-800">Enter the code</p>
                    <p className="text-sm text-gray-600">Code expires in 5 minutes, enter it quickly</p>
                  </div>
                </li>
              </ol>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>⚠️ Troubleshooting:</strong> If you don't receive the SMS code, try again after 5 minutes. Some carriers block international SMS. You can also try using a different phone number.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</span>
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
                    <p className="text-sm text-gray-600">Bottom right corner of the app</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-800">Tap your name/profile</p>
                    <p className="text-sm text-gray-600">Or look for "Identity Verification" or "Real-Name Auth"</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-800">Select "Passport" as ID type</p>
                    <p className="text-sm text-gray-600">Options: Passport, Mainland Travel Permit, etc.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <p className="font-semibold text-gray-800">Enter passport information</p>
                    <div className="text-sm text-gray-600 mt-2 space-y-1">
                      <p>• Full name (as shown in passport)</p>
                      <p>• Passport number</p>
                      <p>• Date of birth</p>
                      <p>• Expiry date</p>
                      <p>• Nationality</p>
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  <div>
                    <p className="font-semibold text-gray-800">Upload passport photo</p>
                    <p className="text-sm text-gray-600">Take a clear photo of your passport info page (good lighting, no glare)</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  <div>
                    <p className="font-semibold text-gray-800">Take a selfie (if required)</p>
                    <p className="text-sm text-gray-600">Follow the on-screen instructions for facial recognition</p>
                  </div>
                </li>
              </ol>

              {/* Screenshot Placeholder 3 */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 text-center mb-4">
                <div className="text-4xl mb-2">🛂</div>
                <p className="font-semibold text-gray-700 mb-2">Screenshot: Passport Information Form</p>
                <p className="text-sm text-gray-500 mb-4">Show the passport details entry form</p>
                <div className="text-xs text-gray-400 bg-white p-3 rounded inline-block">
                  <strong>What to capture:</strong><br/>
                  • Full name field<br/>
                  • Passport number field<br/>
                  • Date of birth picker<br/>
                  • Expiry date picker<br/>
                  • Nationality dropdown<br/>
                  • "Submit" or "Next" button
                </div>
              </div>

              {/* Screenshot Placeholder 4 */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 text-center mb-4">
                <div className="text-4xl mb-2">📷</div>
                <p className="font-semibold text-gray-700 mb-2">Screenshot: Passport Photo Upload</p>
                <p className="text-sm text-gray-500 mb-4">Show the camera interface for passport photo</p>
                <div className="text-xs text-gray-400 bg-white p-3 rounded inline-block">
                  <strong>What to capture:</strong><br/>
                  • Camera viewfinder<br/>
                  • Sample image showing correct positioning<br/>
                  • "Take Photo" button<br/>
                  • Tips for good photo (good lighting, no glare)
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>✅ Verification time:</strong> Usually instant, but can take up to 24 hours. You'll receive a notification when approved.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">📸 Photo tips:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Use good lighting (natural light is best)</li>
                  <li>• Place passport on a flat, dark surface</li>
                  <li>• Make sure all 4 corners are visible</li>
                  <li>• Avoid glare and shadows</li>
                  <li>• Text must be clear and readable</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">4</span>
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
                    <p className="font-semibold text-gray-800">Go to "Me" tab</p>
                    <p className="text-sm text-gray-600">Bottom right corner</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <p className="font-semibold text-gray-800">Tap "Bank Cards" or "Cards"</p>
                    <p className="text-sm text-gray-600">Look for the credit card icon</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <p className="font-semibold text-gray-800">Tap "Add Card"</p>
                    <p className="text-sm text-gray-600">The big "+" button</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
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
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  <div>
                    <p className="font-semibold text-gray-800">Enter billing address</p>
                    <p className="text-sm text-gray-600">Use your home country address (can be same as passport address)</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  <div>
                    <p className="font-semibold text-gray-800">Verify with your bank</p>
                    <p className="text-sm text-gray-600">Some banks require additional verification via SMS or banking app</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
                  <div>
                    <p className="font-semibold text-gray-800">Set payment password (6 digits)</p>
                    <p className="text-sm text-gray-600">Choose a 6-digit PIN for payments (different from login password)</p>
                  </div>
                </li>
              </ol>

              {/* Screenshot 5 - Add Bank Card */}
              <div className="rounded-lg overflow-hidden shadow-lg mb-4 w-64 mx-auto">
                <img src="/images/alipay/step4-add-bank-card.jpg" alt="Alipay add bank card screen showing supported card types" className="w-full h-auto" />
              </div>

              {/* Screenshot Placeholder 6 */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 text-center mb-4">
                <div className="text-4xl mb-2">🔐</div>
                <p className="font-semibold text-gray-700 mb-2">Screenshot: Payment Password Setup</p>
                <p className="text-sm text-gray-500 mb-4">Show the 6-digit PIN setup screen</p>
                <div className="text-xs text-gray-400 bg-white p-3 rounded inline-block">
                  <strong>What to capture:</strong><br/>
                  • "Set Payment Password" title<br/>
                  • 6-digit PIN input (dots for security)<br/>
                  • "Confirm Password" screen<br/>
                  • Numeric keypad
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>💡 Pro Tip:</strong> Search "Alipay+" in the app for the official international card setup guide. Alipay+ is specifically designed for foreign users.
                </p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>⚠️ Card Issues?</strong> Some banks block international transactions by default. Call your bank to authorize transactions with Chinese merchants if the card is declined.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">5</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Start Using Alipay!</h3>
                <p className="text-gray-600">You're ready to pay in China</p>
              </div>
            </div>

            <div className="ml-16 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">📱 How to Pay:</h4>
                
                {/* Screenshot Placeholder 7 */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 text-center mb-4">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="font-semibold text-gray-700 mb-2">Screenshot: Scan QR Code Interface</p>
                  <p className="text-sm text-gray-500 mb-4">Show the camera scanning a merchant's QR code</p>
                  <div className="text-xs text-gray-400 bg-white p-3 rounded inline-block">
                    <strong>What to capture:</strong><br/>
                    • Camera viewfinder with QR code frame<br/>
                    • "Flash" button<br/>
                    • "Album" button<br/>
                    • Scan line animation
                  </div>
                </div>

                {/* Screenshot Placeholder 8 */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 text-center mb-4">
                  <div className="text-4xl mb-2">💵</div>
                  <p className="font-semibold text-gray-700 mb-2">Screenshot: Payment Confirmation</p>
                  <p className="text-sm text-gray-500 mb-4">Show the payment amount and confirm button</p>
                  <div className="text-xs text-gray-400 bg-white p-3 rounded inline-block">
                    <strong>What to capture:</strong><br/>
                    • Amount display (e.g., ¥50.00)<br/>
                    • Merchant name<br/>
                    • Payment method (card ending in XXXX)<br/>
                    • "Pay Now" button
                  </div>
                </div>

                {/* Screenshot Placeholder 9 */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 text-center mb-4">
                  <div className="text-4xl mb-2">✅</div>
                  <p className="font-semibold text-gray-700 mb-2">Screenshot: Payment Success</p>
                  <p className="text-sm text-gray-500 mb-4">Show the transaction complete screen</p>
                  <div className="text-xs text-gray-400 bg-white p-3 rounded inline-block">
                    <strong>What to capture:</strong><br/>
                    • Green checkmark<br/>
                    • "Payment Successful" message<br/>
                    • Payment amount<br/>
                    • Transaction ID<br/>
                    • "Done" button
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">Option 1: Scan Merchant's QR Code</p>
                    <ol className="text-sm text-gray-600 space-y-1">
                      <li>1. Tap "Scan" at the top of the app</li>
                      <li>2. Point camera at merchant's QR code</li>
                      <li>3. Enter amount (if not pre-filled)</li>
                      <li>4. Enter your 6-digit payment password</li>
                      <li>5. Show confirmation to merchant</li>
                    </ol>
                  </div>
                  <div className="border rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">Option 2: Merchant Scans Your Code</p>
                    <ol className="text-sm text-gray-600 space-y-1">
                      <li>1. Tap "Pay/Collect" at the bottom</li>
                      <li>2. Show your QR code to merchant</li>
                      <li>3. Merchant scans and deducts amount</li>
                      <li>4. You'll see confirmation instantly</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>✅ Success!</strong> You can now use Alipay at millions of merchants across China - from luxury malls to street vendors!
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
                    <td className="py-3 px-4 text-gray-600">200 CNY purchase = 6 CNY fee (~$0.85)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>💡 Money-saving tip:</strong> For large purchases (&gt;200 CNY), consider splitting into multiple transactions if the merchant allows it. For example, two payments of 150 CNY instead of one payment of 300 CNY saves you 9 CNY in fees.
              </p>
            </div>

            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <p className="text-xs text-gray-600">
                <strong>Note:</strong> Exchange rates are set by your card issuer, not Alipay. Check with your bank for foreign transaction fees (typically 1-3% on top of Alipay's fee).
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Card Declined / Payment Failed</h3>
                  <p className="text-gray-600 mb-4">Your international card is rejected when trying to add or pay.</p>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">✅ Solutions:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Call your bank:</strong> Inform them you're traveling to China and authorize international transactions</li>
                      <li>• <strong>Check card type:</strong> Ensure it's Visa, Mastercard, JCB, or Diners Club (UnionPay works best)</li>
                      <li>• <strong>Verify billing address:</strong> Make sure it matches what your bank has on file</li>
                      <li>• <strong>Try a different card:</strong> Some banks are more China-friendly than others</li>
                      <li>• <strong>Check card expiry:</strong> Ensure your card won't expire during your trip</li>
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">SMS Verification Code Not Received</h3>
                  <p className="text-gray-600 mb-4">You're not getting the 6-digit verification code.</p>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">✅ Solutions:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Wait 5 minutes:</strong> Sometimes there's a delay with international SMS</li>
                      <li>• <strong>Check spam/junk:</strong> Some carriers filter these messages</li>
                      <li>• <strong>Try again:</strong> Request a new code (max 3 attempts per hour)</li>
                      <li>• <strong>Use different number:</strong> Try another phone number if possible</li>
                      <li>• <strong>Enable international roaming:</strong> Contact your carrier before traveling</li>
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Identity Verification Failed</h3>
                  <p className="text-gray-600 mb-4">Your passport verification was rejected.</p>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">✅ Solutions:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Better photo quality:</strong> Ensure all text is clear and readable</li>
                      <li>• <strong>No glare:</strong> Avoid flash reflection on the passport photo page</li>
                      <li>• <strong>All corners visible:</strong> Don't crop the passport edges</li>
                      <li>• <strong>Match information:</strong> Enter name exactly as shown in passport</li>
                      <li>• <strong>Wait 24 hours:</strong> Sometimes verification takes time, check back later</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Issue 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">❌</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Payment Password Forgotten</h3>
                  <p className="text-gray-600 mb-4">You forgot your 6-digit payment PIN.</p>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-800 mb-2">✅ Solution:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Reset via app:</strong> Go to Me → Settings → Payment Settings → Reset Payment Password</li>
                      <li>• <strong>Verify identity:</strong> You'll need to re-verify with passport</li>
                      <li>• <strong>Create new PIN:</strong> Choose a memorable but secure 6-digit code</li>
                      <li>• <strong>Write it down:</strong> Store it securely until you memorize it</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Payment Methods */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">💳 Alternative Payment Methods</h2>
          
          <p className="text-gray-700 mb-8 text-lg">
            If Alipay doesn't work for you, here are backup options:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* WeChat Pay */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💚</span>
                <h3 className="text-xl font-bold text-gray-800">WeChat Pay</h3>
              </div>
              <p className="text-gray-600 mb-4">
                More widely accepted than Alipay in some areas, but setup can be trickier for foreigners.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• <strong>Setup:</strong> WeChat app → Me → Services → Wallet → Cards</li>
                <li>• <strong>Verification:</strong> Same passport process as Alipay</li>
                <li>• <strong>Limitation:</strong> May require Chinese friend to verify initially</li>
              </ul>
              <a href="/payment/wechat-pay-foreigners" className="text-blue-600 hover:underline text-sm font-semibold">
                Read WeChat Pay Guide →
              </a>
            </div>

            {/* Cash */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💵</span>
                <h3 className="text-xl font-bold text-gray-800">Cash (CNY)</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Still accepted everywhere, but vendors may not have change for large bills.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• <strong>ATMs:</strong> Bank of China, ICBC, China Construction Bank</li>
                <li>• <strong>Bring:</strong> Always carry some 10s and 20s</li>
                <li>• <strong>Tip:</strong> Say "keep the change" for small purchases</li>
              </ul>
            </div>

            {/* UnionPay */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💳</span>
                <h3 className="text-xl font-bold text-gray-800">UnionPay Card</h3>
              </div>
              <p className="text-gray-600 mb-4">
                China's domestic card network. Works at most ATMs and many POS terminals.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• <strong>Get before trip:</strong> Some international banks offer UnionPay cards</li>
                <li>• <strong>ATM withdrawal:</strong> Works at most Chinese ATMs</li>
                <li>• <strong>Fees:</strong> Check with your bank for foreign withdrawal fees</li>
              </ul>
            </div>

            {/* Hotel Help */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🏨</span>
                <h3 className="text-xl font-bold text-gray-800">Ask Your Hotel</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Hotels can often help with payments or exchange cash for digital payment.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• <strong>Concierge:</strong> Can help make payments on your behalf</li>
                <li>• <strong>Exchange:</strong> Some hotels exchange cash for WeChat/Alipay transfer</li>
                <li>• <strong>Tip:</strong> Build good relationship with hotel staff</li>
              </ul>
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
                  <h3 className="font-semibold text-lg mb-1">Alipay Customer Service</h3>
                  <p className="text-gray-300 text-sm mb-2">Service time: 08:00 - 24:00 (GMT+8), Monday - Sunday</p>
                  <p className="text-sm text-gray-300">🇨🇳 From China (local): 0571-2688 6000</p>
                  <p className="text-sm text-gray-300">🌍 From overseas: +86 571 2688 6000</p>
                  <p className="text-sm text-gray-300">In-app: Me → Help & Support (Help Center)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">🌐</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Alipay+ Official Consumer Guide</h3>
                  <p className="text-gray-300 text-sm mb-2">Pay with your home e-wallet in China</p>
                  <a href="https://www.alipayplus.com/consumer/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm block mb-1">https://www.alipayplus.com/consumer/</a>
                  <a href="https://www.alipayplus.com/pay-in-the-chinese-mainland/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">https://www.alipayplus.com/pay-in-the-chinese-mainland/</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">💳</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Supported International Cards</h3>
                  <p className="text-gray-300 text-sm mb-2">Major card networks accepted:</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Visa (Credit & Debit)</li>
                    <li>• Mastercard (Credit & Debit)</li>
                    <li>• JCB</li>
                    <li>• Diners Club</li>
                    <li>• Discover</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">📧</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Support</h3>
                  <p className="text-gray-300 text-sm">intl.support@alipay.com</p>
                  <p className="text-xs text-gray-400 mt-1">Response time: 24-48 hours</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="p-4 bg-blue-600/20 rounded-lg border border-blue-600">
                <p className="text-sm text-blue-200">
                  <strong>💡 Pro Tip:</strong> Save the customer service number in your phone BEFORE arriving in China. It's much harder to call international numbers once you're there without WiFi.
                </p>
              </div>
              
              <div className="p-4 bg-green-600/20 rounded-lg border border-green-600">
                <p className="text-sm text-green-200">
                  <strong>✅ Source:</strong> Information verified from Alipay+ official website (March 2026)
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
