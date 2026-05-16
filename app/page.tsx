export default function Page() {
  const faqs = [
    {
      q: "Which allergens does AllerScan detect?",
      a: "AllerScan covers all 14 major EU allergens including peanuts, tree nuts, gluten, dairy, eggs, shellfish, soy, and more."
    },
    {
      q: "How accurate is the menu scanning?",
      a: "Our OCR + AI pipeline achieves over 95% accuracy on printed menus. Handwritten menus may vary, and we always recommend confirming with staff."
    },
    {
      q: "Can I save my allergy profile for future scans?",
      a: "Yes. Once subscribed, your allergy profile is saved so every scan is automatically filtered to your specific needs."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12">
      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-16">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          AI-Powered Allergen Detection
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Scan restaurant menus for{" "}
          <span className="text-[#58a6ff]">hidden allergens</span>{" "}
          instantly
        </h1>
        <p className="text-lg text-[#8b949e] mb-8">
          Upload a photo of any menu. AllerScan uses OCR and AI to highlight every dish that is safe — or dangerous — for your specific food allergies. Eat out with confidence.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors"
        >
          Start Scanning — $8/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. Works on any smartphone or desktop.</p>
      </section>

      {/* How it works */}
      <section className="max-w-2xl w-full mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { step: "1", title: "Set your allergies", desc: "Create your personal allergy profile in seconds." },
            { step: "2", title: "Upload a menu photo", desc: "Snap a photo or upload from your camera roll." },
            { step: "3", title: "See safe dishes instantly", desc: "Green = safe. Red = avoid. Simple as that." }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-2xl font-bold mb-2">{step}</div>
              <div className="text-white font-semibold mb-1">{title}</div>
              <div className="text-[#8b949e] text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-16">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$8<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to eat safely</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited menu scans",
              "14 major allergen profiles",
              "Instant AI analysis",
              "Save & share results",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl w-full mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-[#8b949e] text-xs text-center">
        &copy; {new Date().getFullYear()} AllerScan. Not a substitute for medical advice.
      </footer>
    </main>
  );
}
