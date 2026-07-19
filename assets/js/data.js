/**
 * data.js
 * ---------------------------------------------------------------------------
 * Central content store for Albanian with Erisa.
 *
 * Every object below is written the way a future REST/GraphQL response
 * would look (flat, JSON-serialisable, no DOM or HTML inside it). When the
 * project migrates to Next.js + FastAPI, this file's exports map almost
 * 1:1 onto API endpoints:
 *
 *   SITE            -> GET /api/site
 *   TEACHER          -> GET /api/teacher
 *   STATS            -> GET /api/stats
 *   LESSONS          -> GET /api/lessons
 *   COURSES          -> GET /api/courses
 *   TESTIMONIALS     -> GET /api/testimonials
 *   FAQ              -> GET /api/faq
 *   VALUES           -> GET /api/values           (teaching philosophy)
 *   WHY_LEARN        -> GET /api/why-learn
 *
 * main.js reads these constants and renders them into the DOM — no page
 * hardcodes copy directly into its HTML body.
 * ---------------------------------------------------------------------------
 */

const SITE = {
  name: "Albanian with Erisa",
  shortName: "Erisa",
  tagline: "Learn Albanian the way it's actually spoken.",
  email: "hello@albanianwitherisa.com",
  phone: "+355 69 123 4567",
  location: "Tirana, Albania · Online worldwide",
  social: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    tiktok: "https://tiktok.com",
    facebook: "https://facebook.com",
  },
};

const TEACHER = {
  name: "Erisa Krasniqi",
  role: "Founder & Lead Instructor",
  photoAlt: "Portrait of Erisa, Albanian language instructor",
  shortBio:
    "A native of Tirana with a decade in the classroom, Erisa built this school around one idea: Albanian is easiest to learn the way you'd learn it from a friend, not a textbook.",
  bio: [
    "Erisa grew up between Tirana and Prishtina, raised on two dialects and a household where language was treated like a shared inheritance. That early exposure to both Gheg and Tosk Albanian became the foundation of how she teaches today — not as a single 'correct' version, but as a living language with regional color.",
    "After completing her degree in Linguistics at the University of Tirana, Erisa spent four years teaching Albanian to diplomats, aid workers, and returning members of the diaspora before moving her classroom online in 2016. Since then she has taught learners across more than 30 countries, from complete beginners to heritage speakers reconnecting with their grandparents' language.",
    "Her approach favors real conversation over rote memorization: every grammar point is anchored to something you'll actually say that week, whether that's ordering byrek in Tirana or writing a birthday message to family.",
  ],
  philosophy: [
    {
      title: "Speak from lesson one",
      text: "You will produce real Albanian sentences in your very first session, not just repeat after me. Confidence comes from use, not from waiting until you feel ready.",
    },
    {
      title: "Grammar in service of conversation",
      text: "Rules are introduced only when you need them to say something specific. No memorizing conjugation tables in isolation.",
    },
    {
      title: "Two dialects, one language",
      text: "Standard Albanian is the backbone, but you'll learn to recognize Gheg and Tosk variations so you're never lost outside a classroom.",
    },
  ],
  credentials: [
    { value: "10+", label: "Years teaching" },
    { value: "1,200+", label: "Students taught" },
    { value: "30+", label: "Countries reached" },
    { value: "4.9/5", label: "Average rating" },
  ],
};

const STATS = [
  { value: "1,200+", label: "Students taught worldwide" },
  { value: "10", label: "Years of experience" },
  { value: "30+", label: "Countries represented" },
  { value: "4.9/5", label: "Average student rating" },
];

const WHY_LEARN = [
  {
    icon: "chat",
    title: "Real conversation, fast",
    text: "Lessons are built around speaking from day one, so you're forming real sentences within your first session, not months in.",
  },
  {
    icon: "roots",
    title: "Reconnect with heritage",
    text: "Many students are diaspora Albanians reconnecting with family. Erisa teaches with that emotional context in mind, not just grammar.",
  },
  {
    icon: "map",
    title: "Both dialects covered",
    text: "Standard Albanian plus the Gheg and Tosk variations you'll actually hear in Tirana, Prishtina, and beyond.",
  },
  {
    icon: "calendar",
    title: "Flexible scheduling",
    text: "Private lessons book around your time zone and your life — no fixed terms, no rigid classroom calendar.",
  },
  {
    icon: "heart",
    title: "Warm, judgment-free space",
    text: "Mistakes are part of learning. Erisa's classroom is built for adults who feel self-conscious picking up a new language.",
  },
  {
    icon: "certificate",
    title: "Structured course paths",
    text: "Prefer a curriculum? Follow the A1 through B2 course path with clear milestones and levels you can point to.",
  },
];

const LESSONS = [
  {
    id: "private",
    title: "Private Lessons",
    category: "1-on-1",
    image: "private",
    description:
      "One-on-one sessions tailored entirely to your pace, goals, and schedule — the fastest way to build real fluency.",
    features: [
      "Fully personalized curriculum",
      "Flexible scheduling across time zones",
      "Direct feedback on pronunciation",
      "Homework tailored to your goals",
    ],
    duration: "60 min",
    price: 28,
  },
  {
    id: "kids",
    title: "Kids Lessons",
    category: "Ages 5–12",
    image: "kids",
    description:
      "Playful, story-driven sessions designed to keep young learners engaged while building a genuine connection to the language.",
    features: [
      "Games, songs, and storytelling",
      "Short, high-energy sessions",
      "Progress updates for parents",
      "Great for heritage-language families",
    ],
    duration: "30–45 min",
    price: 22,
  },
  {
    id: "conversation",
    title: "Conversation Practice",
    category: "Speaking-only",
    image: "conversation",
    description:
      "No grammar drills — just guided conversation to build fluency, confidence, and natural rhythm in spoken Albanian.",
    features: [
      "Topic-based free conversation",
      "Gentle real-time correction",
      "Ideal alongside a grammar course",
      "Great for upcoming trips or visits",
    ],
    duration: "45 min",
    price: 24,
  },
  {
    id: "grammar",
    title: "Grammar Deep Dive",
    category: "Structured",
    image: "grammar",
    description:
      "A focused, methodical pass through Albanian grammar for learners who want to understand the 'why' behind every sentence.",
    features: [
      "Cases, verb aspect, and syntax",
      "Written exercises between sessions",
      "Clear progression by CEFR level",
      "Pairs well with conversation practice",
    ],
    duration: "60 min",
    price: 26,
  },
  {
    id: "couples",
    title: "Couples Lessons",
    category: "2 people",
    image: "couples",
    description:
      "Learning together — perfect for partners preparing to meet Albanian family, or simply sharing the experience.",
    features: [
      "Shared curriculum for two learners",
      "Role-play for real family scenarios",
      "Flexible pacing for mixed levels",
      "One shared booking, one shared price",
    ],
    duration: "60 min",
    price: 38,
  },
  {
    id: "groups",
    title: "Small Group Lessons",
    category: "3–5 people",
    image: "groups",
    description:
      "A small, friendly cohort of fellow learners working through the same course path — structured, social, and affordable.",
    features: [
      "Cohorts capped at 5 students",
      "Weekly fixed schedule",
      "Peer conversation practice",
      "Most affordable per-session rate",
    ],
    duration: "75 min",
    price: 16,
  },
];

const COURSES = [
  {
    id: "a1",
    level: "A1",
    title: "Absolute Beginner",
    image: "a1",
    description:
      "Start from zero: the Albanian alphabet, essential greetings, and your first real conversations.",
    duration: "8 weeks",
    lessonsCount: 16,
    color: "gold",
  },
  {
    id: "a2",
    level: "A2",
    title: "Elementary",
    image: "a2",
    description:
      "Build on the basics with everyday topics — family, food, directions, and simple past tense.",
    duration: "8 weeks",
    lessonsCount: 16,
    color: "blue",
  },
  {
    id: "b1",
    level: "B1",
    title: "Intermediate",
    image: "b1",
    description:
      "Hold real conversations on familiar topics, and start reading short Albanian texts independently.",
    duration: "10 weeks",
    lessonsCount: 20,
    color: "red",
  },
  {
    id: "b2",
    level: "B2",
    title: "Upper Intermediate",
    image: "b2",
    description:
      "Discuss abstract topics, understand native speakers at natural speed, and refine your grammar.",
    duration: "10 weeks",
    lessonsCount: 20,
    color: "blue",
  },
  {
    id: "travel",
    level: "A1–A2",
    title: "Travel Albanian",
    image: "travel",
    description:
      "A compact, practical course for an upcoming trip: transport, food, shopping, and small talk.",
    duration: "3 weeks",
    lessonsCount: 6,
    color: "gold",
  },
  {
    id: "kids-course",
    level: "All ages",
    title: "Kids Albanian",
    image: "kidscourse",
    description:
      "A gentle, structured path for children building a lasting connection to their family's language.",
    duration: "12 weeks",
    lessonsCount: 24,
    color: "red",
  },
];

const TESTIMONIALS = [
  {
    name: "Marta Sundqvist",
    role: "Student, Sweden — 8 months",
    quote:
      "I started with zero Albanian and three months later I surprised my partner's grandmother with a full conversation. Erisa makes it feel possible.",
    rating: 5,
  },
  {
    name: "Dritan Hoxha",
    role: "Diaspora student, Germany",
    quote:
      "I grew up hearing Albanian but never learned to speak it properly. This is the first course that finally connected the pieces for me.",
    rating: 5,
  },
  {
    name: "Alice Whitfield",
    role: "Student, United Kingdom",
    quote:
      "The private lessons are shockingly efficient. Every session has a clear focus and I always leave able to say something new.",
    rating: 5,
  },
  {
    name: "Kevin O'Malley",
    role: "Student, Ireland — Travel course",
    quote:
      "Took the Travel Albanian course before a trip to Tirana and it was more than enough to get around confidently and make locals smile.",
    rating: 5,
  },
  {
    name: "Sofia Marku",
    role: "Parent, Kids Lessons",
    quote:
      "My daughter looks forward to her Albanian lesson every week. Erisa has a gift for keeping kids engaged without losing substance.",
    rating: 5,
  },
  {
    name: "Jonas Reiter",
    role: "Student, Austria — B1 Course",
    quote:
      "Structured, clear, and paced exactly right. I finally understand Albanian cases instead of just memorizing phrases.",
    rating: 5,
  },
];

const FAQ = [
  {
    question: "Do I need any prior knowledge of Albanian to start?",
    answer:
      "Not at all. Most students begin at A1 with zero prior exposure. Lessons and courses are structured to build from the alphabet and basic sounds upward.",
  },
  {
    question: "Which dialect will I learn — Gheg or Tosk?",
    answer:
      "You'll learn Standard Albanian as your foundation, with clear notes on Gheg and Tosk variations so you can recognize both in the wild, whether that's Tirana, Prishtina, or family conversations.",
  },
  {
    question: "How are private lessons scheduled?",
    answer:
      "You book directly around your time zone with no fixed term commitment. Most students meet weekly, but scheduling is entirely flexible.",
  },
  {
    question: "What platform do lessons take place on?",
    answer:
      "Lessons run over video call with shared digital materials. All you need is a stable internet connection — no special software required.",
  },
  {
    question: "Can I switch between private lessons and a structured course?",
    answer:
      "Yes. Many students combine a structured course for grammar progression with private or conversation lessons for extra speaking practice.",
  },
  {
    question: "Do you offer lessons for children?",
    answer:
      "Yes — Kids Lessons and the Kids Albanian course are designed specifically for younger learners, with shorter sessions and playful materials.",
  },
];

const NAV_LINKS = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Lessons", href: "lessons.html" },
  { label: "Courses", href: "courses.html" },
  { label: "Contact", href: "contact.html" },
];

// Expose to the browser (no module bundler yet — this becomes named
// imports once the project migrates to Next.js).
window.SITE = SITE;
window.TEACHER = TEACHER;
window.STATS = STATS;
window.WHY_LEARN = WHY_LEARN;
window.LESSONS = LESSONS;
window.COURSES = COURSES;
window.TESTIMONIALS = TESTIMONIALS;
window.FAQ = FAQ;
window.NAV_LINKS = NAV_LINKS;
