export default function BestESimPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-purple-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <a href="/" className="text-white/80 hover:text-white mb-4 inline-block">← Back to Home</a>
          <h1 className="text-4xl font-bold mb-4">📱 Best eSIM for China Travel (2026)</h1>
          <p className="text-xl opacity-90">Complete comparison & buying guide for eSIMs that work in China</p>
        </div>
      </header>

      {/* Quick Summary */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>✅ Updated:</strong> April 2026 | <strong>⏱️ Read time:</strong> 10 minutes | <strong>💰 Price range:</strong> $5-30
            </p>
          </div>
        </div>
      </section>

      {/* Why eSIM Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">🤔 Why You Need an eSIM for China</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">✅</span> Advantages
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium">No physical SIM needed</p>
                    <p className="text-sm text-gray-600">Activate before you arrive in China</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium">Bypass the Great Firewall</p>
                    <p className="text-sm text-gray-600">Access Google, WhatsApp, Instagram without VPN</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium">Keep your home number</p>
                    <p className="text-sm text-gray-600">Receive SMS/calls on your regular number</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium">Instant activation</p>
                    <p className="text-sm text-gray-600">Scan QR code and you're connected</p>
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
                    <p className="font-medium">Phone must support eSIM</p>
                    <p className="text-sm text-gray-600">iPhone XS+, Samsung S20+, Google Pixel 3+</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">⚠️</span>
                  <div>
                    <p className="font-medium">Data only (no calls)</p>
                    <p className="text-sm text-gray-600">Use WhatsApp/WeChat for calls</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">⚠️</span>
                  <div>
                    <p className="font-medium">Setup BEFORE arriving</p>
                    <p className="text-sm text-gray-600">Install eSIM while still at home</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h4 className="font-semibold text-blue-800 mb-2">💡 How eSIM Bypasses the Firewall:</h4>
            <p className="text-blue-700 text-sm">
              China eSIMs route your data through servers outside mainland China (typically Hong Kong, Singapore, or Japan). 
              Since your data connection originates from outside China, you can access blocked websites and apps normally.
            </p>
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">🏆 Top 3 eSIM Picks for China</h2>
          
          {/* #1 Pick */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border-2 border-purple-500 relative">
            <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-2 rounded-bl-lg font-bold">
              #1 RECOMMENDED
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">🌟</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Airalo - China2Go</h3>
                <p className="text-gray-600">Best overall for most travelers</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">💰 Pricing</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 1 GB / 7 days - $4.50</li>
                  <li>• 3 GB / 30 days - $11.00</li>
                  <li>• 5 GB / 30 days - $16.00</li>
                  <li>• 10 GB / 30 days - $26.00</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">✅ Pros</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Easy app interface</li>
                  <li>• Reliable China Unicom network</li>
                  <li>• Good customer support</li>
                  <li>• Works nationwide</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">⚠️ Cons</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Data only (no calls)</li>
                  <li>• Slightly pricier than others</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
              <p className="text-sm text-purple-700">
                <strong>Best for:</strong> Most travelers who want reliability and ease of use. 
                Perfect for 1-2 week trips with moderate data usage.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm text-blue-700">
                <strong>🎁 Exclusive Discount:</strong> Use code <strong className="text-purple-600">JIAN8394</strong> for <strong className="text-green-600">$3 OFF</strong> your first purchase!
              </p>
            </div>

            <div className="flex gap-4 mb-4">
              <a href="https://www.airalo.com/?ref=JIAN8394" target="_blank" rel="noopener noreferrer" 
                 className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                🛒 Buy on Airalo
              </a>
              <a href="https://www.airalo.com/?ref=JIAN8394" target="_blank" rel="noopener noreferrer" 
                 className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-semibold transition">
                💰 Use Code: JIAN8394
              </a>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <p className="text-sm text-green-700">
                <strong>✅ Verified:</strong> This code gives you $3 off on plans $5 or more. Valid for new customers only.
              </p>
            </div>
          </div>

          {/* #2 Pick */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">🥈</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Nomad - China eSIM</h3>
                <p className="text-gray-600">Best budget option</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">💰 Pricing</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 1 GB / 7 days - $3.50</li>
                  <li>• 3 GB / 30 days - $9.00</li>
                  <li>• 5 GB / 30 days - $14.00</li>
                  <li>• 10 GB / 30 days - $22.00</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">✅ Pros</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cheapest option</li>
                  <li>• Good coverage in cities</li>
                  <li>• Easy setup process</li>
                  <li>• No app required</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">⚠️ Cons</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Slower speeds in rural areas</li>
                  <li>• Limited customer support</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm text-blue-700">
                <strong>Best for:</strong> Budget travelers and short trips (under 1 week). 
                Great value for money if you're staying in major cities.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="https://www.getnomad.app/" target="_blank" rel="noopener noreferrer" 
                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                🛒 Buy on Nomad
              </a>
              <a href="https://www.getnomad.app/" target="_blank" rel="noopener noreferrer" 
                 className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition">
                📖 Learn More
              </a>
            </div>
          </div>

          {/* #3 Pick */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">🥉</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">China Unicom eSIM</h3>
                <p className="text-gray-600">Best for long stays & unlimited data</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">💰 Pricing</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 3 GB / 30 days - $18.90</li>
                  <li>• 6 GB / 30 days - $29.90</li>
                  <li>• Unlimited / 30 days - $39.90</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">✅ Pros</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Official Chinese carrier</li>
                  <li>• Best coverage nationwide</li>
                  <li>• Unlimited data option</li>
                  <li>• Fast 4G/5G speeds</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">⚠️ Cons</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• More expensive</li>
                  <li>• Complex setup process</li>
                  <li>• Requires passport verification</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-sm text-green-700">
                <strong>Best for:</strong> Long-term stays (1+ month) or heavy data users. 
                Best coverage if you're traveling to rural areas.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="https://esim.cuniq.com/en" target="_blank" rel="noopener noreferrer" 
                 className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                🛒 Buy China Unicom
              </a>
              <a href="https://esim.cuniq.com/en" target="_blank" rel="noopener noreferrer" 
                 className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition">
                📖 Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">📊 Detailed Comparison Table</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left py-4 px-6">Feature</th>
                  <th className="text-left py-4 px-6">Airalo</th>
                  <th className="text-left py-4 px-6">Nomad</th>
                  <th className="text-left py-4 px-6">China Unicom</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-6 font-semibold">Price (3GB/30d)</td>
                  <td className="py-3 px-6">$11.00</td>
                  <td className="py-3 px-6 text-green-600 font-bold">$9.00 ⭐</td>
                  <td className="py-3 px-6">$18.90</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-6 font-semibold">Network</td>
                  <td className="py-3 px-6">China Unicom</td>
                  <td className="py-3 px-6">China Unicom</td>
                  <td className="py-3 px-6 text-green-600">China Unicom ⭐</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-semibold">Setup Difficulty</td>
                  <td className="py-3 px-6 text-green-600">Easy ⭐</td>
                  <td className="py-3 px-6 text-green-600">Easy ⭐</td>
                  <td className="py-3 px-6 text-amber-600">Moderate</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-6 font-semibold">Coverage</td>
                  <td className="py-3 px-6 text-green-600">Excellent</td>
                  <td className="py-3 px-6">Good (cities)</td>
                  <td className="py-3 px-6 text-green-600">Best nationwide ⭐</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-semibold">Speed</td>
                  <td className="py-3 px-6">4G/LTE</td>
                  <td className="py-3 px-6">4G/LTE</td>
                  <td className="py-3 px-6 text-green-600">4G/5G ⭐</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-6 font-semibold">Customer Support</td>
                  <td className="py-3 px-6 text-green-600">24/7 Chat ⭐</td>
                  <td className="py-3 px-6">Email</td>
                  <td className="py-3 px-6">Phone/Email</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-semibold">App Required</td>
                  <td className="py-3 px-6">Yes</td>
                  <td className="py-3 px-6 text-green-600">No ⭐</td>
                  <td className="py-3 px-6">Yes</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="py-3 px-6 font-semibold">Unlimited Data</td>
                  <td className="py-3 px-6 text-red-600">No ❌</td>
                  <td className="py-3 px-6 text-red-600">No ❌</td>
                  <td className="py-3 px-6 text-green-600">Yes ⭐</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-semibold">Best For</td>
                  <td className="py-3 px-6">Most travelers</td>
                  <td className="py-3 px-6">Budget trips</td>
                  <td className="py-3 px-6">Long stays</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Install */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">📲 How to Install eSIM (Step by Step)</h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Check Phone Compatibility</h3>
                  <p className="text-gray-600 mb-4">Make sure your phone supports eSIM</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">✅ Compatible Phones:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>iPhone:</strong> iPhone XS, XR, and newer (all models)</li>
                      <li>• <strong>Samsung:</strong> Galaxy S20 and newer, Z Flip/Fold series</li>
                      <li>• <strong>Google Pixel:</strong> Pixel 3 and newer (except Pixel 3a)</li>
                      <li>• <strong>Other:</strong> Check manufacturer's website</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Purchase eSIM Online</h3>
                  <p className="text-gray-600 mb-4">Choose your provider and buy the eSIM</p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="text-sm text-gray-700">
                      <strong>💡 Tip:</strong> Buy at least 24 hours before your trip. 
                      This gives you time to troubleshoot any setup issues while still at home.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Receive QR Code via Email</h3>
                  <p className="text-gray-600 mb-4">You'll get an email with QR code and instructions</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>What you'll receive:</strong>
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 mt-2">
                      <li>• QR code for eSIM installation</li>
                      <li>• Activation code (sometimes)</li>
                      <li>• APN settings (if needed)</li>
                      <li>• Installation instructions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">4</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Install eSIM on Your Phone</h3>
                  <p className="text-gray-600 mb-4">Scan the QR code and follow the prompts</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">For iPhone:</h4>
                      <ol className="text-sm text-gray-700 space-y-1">
                        <li>1. Settings → Cellular</li>
                        <li>2. "Add Cellular Plan"</li>
                        <li>3. Scan QR code</li>
                        <li>4. Follow on-screen prompts</li>
                        <li>5. Label the plan (e.g., "China")</li>
                      </ol>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">For Android:</h4>
                      <ol className="text-sm text-gray-700 space-y-1">
                        <li>1. Settings → Network & Internet</li>
                        <li>2. "Mobile Network" → "Add carrier"</li>
                        <li>3. Scan QR code</li>
                        <li>4. Follow on-screen prompts</li>
                        <li>5. Enable the new plan</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">5</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Configure Data Settings</h3>
                  <p className="text-gray-600 mb-4">Set up data roaming and choose default line</p>
                  
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="font-semibold text-gray-800 mb-2">✅ Important Settings:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Enable Data Roaming:</strong> Required for eSIM to work in China</li>
                      <li>• <strong>Set Default Voice Line:</strong> Keep your home number for calls</li>
                      <li>• <strong>Set Default Data Line:</strong> Choose your China eSIM</li>
                      <li>• <strong>Turn Off iMessage/FaceTime:</strong> Use the new number temporarily</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">6</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Test Before You Travel</h3>
                  <p className="text-gray-600 mb-4">Make sure everything works before leaving home</p>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                    <p className="text-sm text-gray-700">
                      <strong>⚠️ Testing Tips:</strong>
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 mt-2">
                      <li>• Turn off WiFi and test mobile data</li>
                      <li>• Try loading Google, WhatsApp, Instagram</li>
                      <li>• Check signal strength indicator</li>
                      <li>• Save provider's support contact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">❓ Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">📱 Can I use WhatsApp/Line/Telegram with China eSIM?</h3>
              <p className="text-gray-700">
                <strong>Yes!</strong> Since China eSIMs route your data through servers outside mainland China 
                (typically Hong Kong or Singapore), you can use WhatsApp, Line, Telegram, Facebook Messenger, 
                and other apps normally without a VPN.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">🔄 Can I keep using my home SIM card?</h3>
              <p className="text-gray-700">
                <strong>Yes!</strong> That's the beauty of eSIM - you can have multiple plans active simultaneously. 
                Keep your home SIM for receiving calls/SMS, and use the China eSIM for data. 
                Most phones let you switch between plans easily.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">🌐 Do I need to enable data roaming?</h3>
              <p className="text-gray-700">
                <strong>Yes, absolutely!</strong> China eSIMs work by routing your data through international servers. 
                This appears as "roaming" to your phone. Don't worry - you won't be charged roaming fees by your 
                home carrier since the eSIM is a separate plan.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">⏰ How long does eSIM activation take?</h3>
              <p className="text-gray-700">
                <strong>Usually instant to 24 hours.</strong> Most providers (Airalo, Nomad) activate within minutes 
                of scanning the QR code. China Unicom may take up to 24 hours due to passport verification. 
                Always set up your eSIM at least 24 hours before departure.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">💸 What happens if I run out of data?</h3>
              <p className="text-gray-700">
                <strong>You can top up or buy a new plan.</strong> Most providers let you purchase additional data 
                through their app or website. Some offer automatic top-up. If you're near the end of your trip, 
                it's often cheaper to buy a new plan than to top up.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">📞 Can I make phone calls with China eSIM?</h3>
              <p className="text-gray-700">
                <strong>Most China eSIMs are data-only.</strong> For calls, use WhatsApp, WeChat, FaceTime Audio, 
                or Skype over data. If you need a Chinese phone number for reservations, consider getting a 
                physical SIM card or using a virtual number service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">💡 Pro Tips & Money-Saving Hacks</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-3">🎯 Tip 1: Buy Before You Travel</h3>
              <p className="text-gray-700 text-sm">
                Prices are often 20-30% cheaper when purchased from your home country. 
                Once you're in China, you're limited to more expensive options.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-3">🎯 Tip 2: Share Hotspot</h3>
              <p className="text-gray-700 text-sm">
                Use your phone's hotspot to share data with travel companions. 
                One 10GB plan is cheaper than two 5GB plans!
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-3">🎯 Tip 3: Download Offline Maps</h3>
              <p className="text-gray-700 text-sm">
                Download Google Maps or Maps.me offline maps before your trip. 
                This saves significant data usage while navigating.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-3">🎯 Tip 4: Use WiFi When Available</h3>
              <p className="text-gray-700 text-sm">
                Hotels, cafes, and restaurants in China have excellent WiFi. 
                Use it for video calls and large downloads to conserve mobile data.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-3">🎯 Tip 5: Monitor Data Usage</h3>
              <p className="text-gray-700 text-sm">
                Check your data usage regularly in phone settings. 
                Set up alerts to avoid unexpected overage charges.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-purple-600 mb-3">🎯 Tip 6: Keep QR Code Safe</h3>
              <p className="text-gray-700 text-sm">
                Screenshot your eSIM QR code and save it in multiple places. 
                If you need to reinstall, you won't have to contact support.
              </p>
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
                  <h3 className="font-semibold text-lg mb-1">Airalo Support</h3>
                  <p className="text-gray-300 text-sm mb-2">24/7 chat support for all eSIM issues</p>
                  <a href="https://www.airalo.com/help" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">https://www.airalo.com/help</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">🌐</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Nomad Support</h3>
                  <p className="text-gray-300 text-sm mb-2">Email support (response within 24h)</p>
                  <a href="https://www.getnomad.app/support" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">https://www.getnomad.app/support</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">China Unicom</h3>
                  <p className="text-gray-300 text-sm mb-2">Official carrier support</p>
                  <p className="text-sm text-gray-300">Hotline: +86-10-5199-6900 (English)</p>
                  <a href="https://esim.cuniq.com/en" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">https://esim.cuniq.com/en</a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="p-4 bg-blue-600/20 rounded-lg border border-blue-600">
                <p className="text-sm text-blue-200">
                  <strong>💡 Pro Tip:</strong> Save the support contacts before you travel. 
                  If you have setup issues, customer support can help via WhatsApp or email.
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
