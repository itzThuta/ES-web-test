import { Link } from "react-router-dom";
import { FiLock, FiClock } from "react-icons/fi";

const sections = [
  ["scope", "Who we are and what this policy covers", [
    "ExpireSense helps people manage food and reduce waste. This policy covers the ExpireSense Android app, version 1.0.6, and www.expiresense.com. The app developer is Thu Ta Zaw (James). ExpireSense is responsible for information you provide directly to our team.",
    "Inventory, receipt recognition, recipe matching, and recipe text work on your device. Recipe photos require an internet connection. The website is an online service with separate data practices described below. Opening a website link from the app uses your browser and is subject to those website practices."
  ]],
  ["android", "Android app: local inventory and receipt processing", [
    "Food names, quantities, dates, recognized receipt text, and preferences are processed and saved locally in the app’s private storage. This release has no accounts, cloud sync, advertising, analytics, Bluetooth features, or purchases. It uses an internet connection to load recipe photos.",
    "ExpireSense does not receive, collect on its servers, sell, or share your app inventory or receipt content. Bundled Google ML Kit recognizes receipt text on-device; receipt photos and recognized text are not uploaded for recognition."
  ]],
  ["recipe-photos", "Recipe photos and partial offline operation", [
    "Recipe matching and recipe text work on-device. When you view recipe photos, version 1.0.6 loads them over HTTPS from www.expiresense.com. Our hosting and delivery providers receive your IP address, connection information, and the requested image URL. Your inventory, receipt images, and recognized text are not sent with these requests.",
    "The app does not save recipe photographs to disk. Decoded images may remain temporarily in memory, and browsers may manage their own network cache. Without an internet connection, recipe text remains readable, but photos may be unavailable. Earlier app versions through 1.0.5 loaded their available photos from Wikimedia image servers. Provider privacy links are included below. Most current serving images were generated with AI specifically for their recipes; this does not send user inventory to an AI service."
  ]],
  ["permissions", "Camera, photos, and optional reminders", [
    "When you choose to scan a receipt, the app uses the camera or Android system image picker. You control camera permission and which image you select. Temporary image copies may remain in the app cache. Original gallery images remain under your control.",
    "Notifications are optional and can be disabled in Android settings. The app schedules local expiry reminders without a push server. Reminders cover a rolling 30-day period and refresh when you use the app. Android battery settings may delay delivery."
  ]],
  ["deletion", "App retention and deletion", [
    "Local inventory and preferences remain until you delete them or remove the app’s storage. In Settings & privacy, choose Delete local data and confirm to remove inventory and preferences and cancel reminders. You can also clear app storage in Android settings or uninstall the app to remove local app storage, including its cache.",
    "These actions do not delete original photos in your gallery; delete those separately if desired. Android cloud backup is disabled for this release. There is no ExpireSense account or cloud copy for us to recover or delete."
  ]],
  ["website", "Website information and service providers", [
    "Visiting the website sends technical request information, such as your IP address, browser details, requested URL, and request time, to the services delivering it. We use Vercel for hosting and Cloudflare for delivery, security, and performance measurement. Infrastructure providers may process request and security logs to operate and protect the service.",
    "The deployed website includes Cloudflare Web Analytics for website traffic and performance measurement. The website also loads a Plugster script and configuration for site discovery and AI-related integrations. Those requests disclose connection and request information to Plugster. Website chat is currently disabled.",
    "The homepage loads a YouTube video through youtube-nocookie.com when its section approaches the viewport. Loading or interacting with the player connects to Google/YouTube. Blog images can load from Unsplash. These providers receive technical request information and apply their own privacy practices. Social links take you to external services when you follow them."
  ]],
  ["contact-data", "Contacting us", [
    "When you submit our contact form, your name, email address, phone number, topic, and message are sent through Web3Forms to our team. Emailing us also provides your email address, message, and any attachments. We use this information to respond, arrange requested demos, provide support, and handle privacy requests. Please do not send receipt images or sensitive information unless needed for your inquiry.",
    "Web3Forms and our email service process these communications to deliver them. We retain correspondence for as long as needed to address your inquiry and meet applicable recordkeeping or legal obligations, then delete it when no longer needed. Provider logs and backups follow their respective retention practices."
  ]],
  ["cookies", "Cookies, browser storage, and your choices", [
    "The Android app’s local storage is separate from website cookies. Website infrastructure and embedded third-party services may use cookies or browser storage for security or their own functionality. Privacy-enhanced YouTube embedding does not mean that no information is sent to Google. We do not claim that the website is cookie-free.",
    "You can clear or restrict cookies and site storage in your browser, block third-party requests, and choose not to play embedded videos or submit forms. Some website features may not work with these restrictions. The savings calculator performs its calculations in your browser; its input values are not submitted by the calculator to our team."
  ]],
  ["rights", "Security, sharing, and privacy requests", [
    "The app uses Android’s private app storage; protect access to your device. The website uses HTTPS. No device or online service can provide an absolute security guarantee.",
    "Website information is processed by the service providers described above to deliver the site and respond to you. Providers may process information outside your country. Information may also need to be disclosed where required by law. The Android app does not upload inventory, receipts, or recognized text. Wikimedia image requests disclose connection information to image hosts, which may process it outside your country.",
    "Depending on applicable law, you may request access, correction, deletion, restriction, or portability of information we hold, object to processing, or withdraw consent where processing relies on consent. Contact contact@expiresense.com; we may need to verify your request. You may also contact your local data protection authority. We cannot access your device’s inventory, so use the app’s deletion controls for that data."
  ]],
  ["children", "Children’s privacy", [
    "The app does not send inventory or receipt content to us. Recipe image requests disclose technical information to Wikimedia as described above. If you believe a child has submitted personal information through our website or support channels, contact us so we can review and address it."
  ]],
  ["food", "Food and recipe guidance", [
    "Expiry suggestions are estimates, not food-safety guarantees. Follow printed use-by dates and storage instructions. Do not use recipe suggestions as a reason to eat food past its use-by date. Recipe dietary labels describe listed ingredients; they do not certify products, guarantee allergy safety, or prevent cross-contact."
  ]],
  ["changes", "Changes to this policy", [
    "We will update this page and its effective date when our practices change. New features such as accounts or cloud sync would require updated disclosures; they are not part of Android version 1.0.6."
  ]],
];

export default function Privacy() {
  return (
    <section className="bg-white/80 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <header className="space-y-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-brand-50/40 p-6 text-center shadow-xl shadow-slate-200/60 sm:p-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"><FiLock className="text-[var(--brand-600)]" /> Your privacy</p>
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Privacy Policy</h1>
          <p className="text-base text-slate-700 sm:text-lg">Understand what stays on your device, what happens when you visit our website, and how to control your information.</p>
          <p className="inline-flex items-center gap-2 text-sm text-slate-500"><FiClock /> Effective date: 5 November 2026</p>
        </header>
        <nav aria-label="Privacy policy sections" className="my-8 flex flex-wrap gap-3 text-sm">
          {[["android", "Android app"], ["recipe-photos", "Recipe photos"], ["deletion", "Delete local data"], ["website", "Website practices"], ["rights", "Your rights"], ["privacy-contact", "Contact"]].map(([id, title]) => <a key={id} href={`#${id}`} className="rounded-full border border-brand-200 bg-white px-4 py-2 font-semibold text-[var(--brand-700)] hover:bg-brand-50">{title}</a>)}
        </nav>
        <div className="space-y-6">
          {sections.map(([id, title, paragraphs]) => <section key={id} id={id} className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
            {paragraphs.map(text => <p key={text} className="mt-4 text-base leading-relaxed text-slate-700">{text}</p>)}
          </section>)}
          <section id="privacy-contact" className="scroll-mt-28 rounded-3xl border border-brand-200 bg-brand-50/60 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">Contact ExpireSense</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">For privacy questions or requests, email <a className="break-words font-semibold text-[var(--brand-700)] underline" href="mailto:contact@expiresense.com">contact@expiresense.com</a> or use our <Link to="/contact" className="font-semibold text-[var(--brand-700)] underline">contact page</Link>. Company: ExpireSense. Developer: Thu Ta Zaw (James).</p>
            <p className="mt-4 text-sm text-slate-600">Provider notices: <a href="https://vercel.com/legal/privacy-policy" className="underline">Vercel</a> · <a href="https://www.cloudflare.com/privacypolicy/" className="underline">Cloudflare</a> · <a href="https://web3forms.com/privacy" className="underline">Web3Forms</a> · <a href="https://policies.google.com/privacy" className="underline">Google / YouTube</a> · <a href="https://unsplash.com/privacy" className="underline">Unsplash</a> · <a href="https://foundation.wikimedia.org/wiki/Policy:Privacy_policy" className="underline">Wikimedia</a>.</p>
          </section>
        </div>
      </div>
    </section>
  );
}
