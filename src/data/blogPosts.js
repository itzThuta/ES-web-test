import heroImage from "../assets/team.png";

export const blogPosts = [
  {
    slug: "food-waste-rituals",
    title: "5 rituals to halve your weekly food waste",
    excerpt:
      "From batch prep to smarter leftovers, these five micro-habits help households reduce waste without adding extra work.",
    tag: "Households",
    readingTime: "6 min read",
    date: "May 9, 2024",
    author: "Kai Turner",
    hero: heroImage,
    sections: [
      {
        heading: "1. Inventory reset every Sunday",
        body: "Spend ten minutes checking pantry, fridge, and freezer shelves. Note items that need attention and assign them to upcoming meals. ExpireSense makes this a tap-and-drag action, so the list stays dynamic through the week.",
      },
      {
        heading: "2. First-in-first-out lunchbox",
        body: "Keep a dedicated basket for 'eat next' items—think berries that are ripening or leftovers from two days ago. Add them to your lunch bag first, and let ExpireSense remind you if something gets forgotten.",
      },
      {
        heading: "3. Mid-week rescue cook",
        body: "Choose one evening to remix ingredients that are nearing expiry. Use the app’s recipe suggestions to save planning time. Households report this ritual alone cuts waste by nearly 15%.",
      },
      {
        heading: "4. Shared grocery intent",
        body: "Before any grocery run, sync with your household using the shared inventory list. Duplicate purchases plummet, and everyone understands what already exists at home.",
      },
      {
        heading: "5. Freeze smart, not hard",
        body: "If plans shift, freeze items with date tags so they re-enter the rotation with new reminders. One tap in ExpireSense updates the status for everyone, keeping the freezer tidy and useful.",
      },
    ],
    conclusion:
      "Habit loops don’t need to be complicated. Start with one ritual this month and let your progress inspire the next change. The result is calmer kitchens, happier budgets, and ingredients that always get used in time.",
  },
  {
    slug: "ocr-inventory-pipeline",
    title: "How ExpireSense OCR keeps kitchen inventory up-to-date",
    excerpt:
      "A look behind the scenes at our receipt scanning pipeline, and how we nudge accurate expiry suggestions with minimal input.",
    tag: "Product",
    readingTime: "8 min read",
    date: "Apr 26, 2024",
    author: "Juji Phrom",
    hero: heroImage,
    sections: [
      {
        heading: "Receipt capture",
        body: "We map each receipt line item to recognised products within milliseconds and suggest defaults based on region and purchase history.",
      },
      {
        heading: "Confidence scoring",
        body: "The system flags uncertain matches for a quick review. Most corrections take under five seconds thanks to smart defaults.",
      },
      {
        heading: "Learning over time",
        body: "Every confirmation improves future predictions, so ExpireSense becomes more personalised with each grocery trip.",
      },
    ],
    conclusion:
      "By combining computer vision, smart defaults, and human-friendly confirmations, our OCR pipeline stays accurate without adding to your workload.",
  },
  {
    slug: "sustainability-metrics-2024",
    title: "Sustainability metrics your restaurant should track in 2024",
    excerpt:
      "Waste per cover, inventory turnover, and guest impact: the KPIs modern kitchens monitor to stay profitable and planet-friendly.",
    tag: "Hospitality",
    readingTime: "7 min read",
    date: "Apr 2, 2024",
    author: "Sophie Lin",
    hero: heroImage,
    sections: [
      {
        heading: "Waste per cover",
        body: "Track total kitchen waste divided by covers served. A transparent baseline helps your team celebrate improvements.",
      },
      {
        heading: "Inventory turnover",
        body: "Balance is everything—too high and you risk stockouts, too low and spoilage climbs. Automated alerts keep you on target.",
      },
      {
        heading: "Guest impact stories",
        body: "Bring customers along the journey. Showcase rescued meals, seasonal menus, or donation stats to build loyalty.",
      },
    ],
    conclusion:
      "Measure what matters, automate the tracking, and focus on the actions that keep your kitchen sustainable and profitable.",
  },
  {
    slug: "expiresense-beta-community",
    title: "Inside the ExpireSense beta community",
    excerpt:
      "Meet the hotels, campuses, and families shaping our roadmap with hands-on feedback and creative use cases.",
    tag: "Community",
    readingTime: "5 min read",
    date: "Mar 17, 2024",
    author: "James Okafor",
    hero: heroImage,
    sections: [
      {
        heading: "Why a community beta?",
        body: "We wanted diverse perspectives—from single parents to hotel chains—to stress-test real-world scenarios.",
      },
      {
        heading: "Feedback loops built-in",
        body: "Weekly office hours and in-app prompts mean ideas go from concept to feature quickly, with measurable impact.",
      },
      {
        heading: "What’s next",
        body: "Expect enhanced analytics, deeper integrations, and more localisation based on what our community asks for next.",
      },
    ],
    conclusion:
      "We’re grateful to build alongside the people who rely on ExpireSense daily. Their insights shape the product you see today.",
  },
];
