/**
 * data.js
 * ---------------------------------------------------------------------------
 * Central content store for Speak with Brikela.
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
  name: "Speak with Brikela",
  shortName: "Brikela",
  tagline: "Real Albanian for real life in Albania.",
  email: "hello@speakwithbrikela.com",
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
  name: "Brikela",
  role: "Founder & Lead Instructor",
  photoAlt: "Portrait of Brikela, your friendly Albanian guide",
  shortBio:
    "A local from Tirana who loves two things: Albania, and watching nervous students become confident speakers. Brikela teaches the Albanian you'll actually use — at cafés, markets, and with friends.",
  bio: [
    "Brikela grew up in Tirana, in a house where guests were family and the coffee was always fresh. She watched her mother make strangers feel at home with nothing but warmth — and learned early that language isn't rules, it's connection.",
    "Years of teaching diplomats, students, and visitors taught her something surprising: the nervous students are always her favourites. The ones who say 'I'm terrible at languages' — and then order their first meal in Albanian three weeks later.",
    "Now her lessons happen online, wherever her students are, but the goal hasn't changed: helping you feel at home in Albania, one real conversation at a time.",
  ],
  philosophy: [
    {
      title: "Conversation before perfection",
      text: "You'll say real sentences from the very first minutes — imperfect, brave, and used that same day. Perfect can wait; talking can't.",
    },
    {
      title: "Confidence before grammar",
      text: "Grammar appears only when a sentence needs it. The point is that you feel safe having the conversations that matter to you.",
    },
    {
      title: "Culture before textbooks",
      text: "Cafés, markets, neighbourhoods, families — the Albania you'll actually live in. Textbooks stay on the shelf; real life is the classroom.",
    },
    {
      title: "Communication over memorization",
      text: "No vocab lists to drill. We focus on what you want to say — and the words you'll genuinely use to say it.",
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
    title: "Connect with locals",
    text: "Small talk that turns a quick question into a ten-minute chat — and sometimes a new friend. That's where Albania really opens up.",
  },
  {
    icon: "map",
    title: "Travel independently",
    text: "Order food, find your way, catch a taxi — without checking your phone every two minutes. Real directions, real confidence.",
  },
  {
    icon: "roots",
    title: "Understand the culture",
    text: "Know why Albanians say 'my home is your home' — and what it means when they do. Language is the shortcut into how people think.",
  },
  {
    icon: "heart",
    title: "Feel at home",
    text: "The country changes when you can say more than 'faleminderit'. You're not a visitor anymore — you're a regular.",
  },
  {
    icon: "certificate",
    title: "Avoid tourist stress",
    text: "Menus, prices, directions, misunderstandings — handled. The small everyday frictions disappear when you can simply ask.",
  },
  {
    icon: "calendar",
    title: "Unforgettable experiences",
    text: "Hidden cafés, mountain views, invitations from people you just met — they all start with one sentence in Albanian.",
  },
];

const LESSONS = [
  {
    id: "trial",
    title: "Free Trial Lesson",
    category: "Free",
    image: "trial",
    description:
      "A relaxed 30-minute chat to meet Brikela and feel what speaking Albanian really feels like. No card, no pressure, no plan required.",
    features: [
      "Meet your local guide",
      "Find out where to start",
      "Speak real sentences right away",
      "No payment, no commitment",
    ],
    duration: "30 min",
    price: 0,
  },
  {
    id: "private",
    title: "Private Online Lessons",
    category: "1-on-1",
    image: "private",
    description:
      "One-on-one lessons built around your exact life — your trip, your job, your neighbourhood. The fastest way to feel comfortable speaking.",
    features: [
      "Lessons shaped around your plans",
      "Flexible scheduling, any time zone",
      "Real situations, practised out loud",
      "Notes you'll actually use after class",
    ],
    duration: "60 min",
    price: 28,
  },
  {
    id: "travelers",
    title: "Traveler Pack",
    category: "Travel",
    image: "travelers",
    description:
      "For the trip you've been dreaming about. Arrive ready to order, ask, and chat — and leave with stories instead of screenshots.",
    features: [
      "Arrival, taxis & directions",
      "Ordering food and coffee",
      "Shopping & bargaining",
      "Small talk that gets you invited places",
    ],
    duration: "3 sessions",
    price: 49,
    pack: true,
  },
  {
    id: "restaurant",
    title: "Restaurant Survival",
    category: "Topic Pack",
    image: "restaurant",
    description:
      "For food lovers. Walk into any restaurant and order with confidence — plus a cheat sheet that lives in your pocket.",
    features: [
      "Read menus like a local",
      "Order, ask and pay with ease",
      "Handle special requests politely",
      "Take-home phrase sheet",
    ],
    duration: "1 session",
    price: 19,
    pack: true,
  },
  {
    id: "hotel",
    title: "Hotel Check-In",
    category: "Topic Pack",
    image: "hotel",
    description:
      "For your first night and everything after. Check in, ask for a better room, extend your stay — without a translation app.",
    features: [
      "Check-in and check-out phrases",
      "Requests and small problems",
      "Late check-outs & extensions",
      "Friendly questions for staff",
    ],
    duration: "1 session",
    price: 19,
    pack: true,
  },
  {
    id: "taxi",
    title: "Taxi & Transport",
    category: "Topic Pack",
    image: "taxi",
    description:
      "For getting around without the stress. Name your destination, agree on a price, and arrive feeling like a regular.",
    features: [
      "Destinations & directions",
      "Prices and negotiating",
      "Buses, ferries & airport runs",
      "Emergency phrases that work",
    ],
    duration: "2 sessions",
    price: 24,
    pack: true,
  },
  {
    id: "shopping",
    title: "Shopping Essentials",
    category: "Topic Pack",
    image: "shopping",
    description:
      "For markets, boutiques and everything in between. Ask prices, try things on, and charm the people behind the counter.",
    features: [
      "Prices, sizes & trying things on",
      "Markets and local shops",
      "Paying and asking for a receipt",
      "Friendly chit-chat with sellers",
    ],
    duration: "2 sessions",
    price: 19,
    pack: true,
  },
  {
    id: "friends",
    title: "Make Friends",
    category: "Topic Pack",
    image: "friends",
    description:
      "For the loneliest part of arriving anywhere: starting from zero friends. Leave with the phrases that turn strangers into regulars.",
    features: [
      "Introductions that go somewhere",
      "Café small talk that flows",
      "Compliments, invitations & jokes",
      "Confidence to show up solo",
    ],
    duration: "2 sessions",
    price: 29,
    pack: true,
  },
  {
    id: "nomad",
    title: "Digital Nomad Pack",
    category: "Topic Pack",
    image: "nomad",
    description:
      "For long stays and slow travel. Set up your life — SIM, coworking, utilities — and make friends beyond the expat bubble.",
    features: [
      "Cafés & coworking small talk",
      "Internet, SIM & utilities setup",
      "Weekend plans in Albanian",
      "Local tips alongside the language",
    ],
    duration: "4 sessions",
    price: 49,
    pack: true,
  },
  {
    id: "expat",
    title: "Expat Starter",
    category: "Topic Pack",
    image: "expat",
    description:
      "For the big move. Month one is hard enough — handle paperwork, your apartment, and the market without the language gap.",
    features: [
      "Paperwork & appointments",
      "Apartment-hunting phrases",
      "Errands, markets & deliveries",
      "Neighbours & neighbourhood life",
    ],
    duration: "6 sessions",
    price: 69,
    pack: true,
  },
  {
    id: "couples",
    title: "Albanian for Couples",
    category: "Topic Pack",
    image: "couples",
    description:
      "For partners learning together — meeting the family, sharing the adventure, and laughing through the same mistakes.",
    features: [
      "Shared lessons, shared goals",
      "Role-play for family meetings",
      "Mixed levels, one pace",
      "One booking, one price",
    ],
    duration: "3 sessions",
    price: 39,
    pack: true,
  },
  {
    id: "weekend",
    title: "Weekend Survival",
    category: "Topic Pack",
    image: "weekend",
    description:
      "For short escapes — a long weekend, a wedding, a surprise visit. Squeeze real, useful Albanian into 48 hours.",
    features: [
      "The essential first 50 phrases",
      "Greetings that start conversations",
      "Café, market & taxi basics",
      "A personal cheat sheet to take away",
    ],
    duration: "2 sessions",
    price: 29,
    pack: true,
  },
];

const COURSES = [
  {
    id: "a1",
    level: "A1",
    title: "Start Speaking",
    image: "a1",
    description:
      "The friendly first chapter: greet people, order coffee, and get from A to B. By the end, you'll be speaking — not studying.",
    duration: "8 weeks",
    lessonsCount: 16,
    color: "gold",
  },
  {
    id: "a2",
    level: "A2",
    title: "Build Confidence",
    image: "a2",
    description:
      "Everyday life, in Albanian: food, family, shopping, directions. The sentences you'll use daily start coming without thinking.",
    duration: "8 weeks",
    lessonsCount: 16,
    color: "blue",
  },
  {
    id: "b1",
    level: "B1",
    title: "Everyday Conversations",
    image: "b1",
    description:
      "The fun part: real conversations on real topics — plans, stories, opinions. And menus, signs and messages that make sense.",
    duration: "10 weeks",
    lessonsCount: 20,
    color: "red",
  },
  {
    id: "b2",
    level: "B2",
    title: "Speak Naturally",
    image: "b2",
    description:
      "Catch the jokes, follow fast talk, and say exactly what you mean — smoothly. Albanian starts feeling like your language too.",
    duration: "10 weeks",
    lessonsCount: 20,
    color: "blue",
  },
  {
    id: "travel",
    level: "A1–A2",
    title: "Trip-Ready Albanian",
    image: "travel",
    description:
      "A compact journey for the trip ahead: transport, food, shopping, and the small talk that makes locals light up.",
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
      "A gentle, playful path for children building a lasting connection to their family's language — and their heritage.",
    duration: "12 weeks",
    lessonsCount: 24,
    color: "red",
  },
];

const TESTIMONIALS = [
  {
    name: "Marta Lindqvist",
    role: "Traveler, Sweden — Restaurant Survival",
    quote:
      "Two days in Tirana and I'd already ordered lunch entirely in Albanian. The waiter didn't just understand me — he smiled like I was one of his regulars.",
    rating: 5,
  },
  {
    name: "Alice Whitfield",
    role: "Digital nomad, UK — in Tirana",
    quote:
      "I stopped feeling like a tourist. My barista knows my order, my neighbours know my name, and last weekend I hiked the mountains with people I met in Albanian.",
    rating: 5,
  },
  {
    name: "Kevin O'Malley",
    role: "Expat, Ireland — in Durrës",
    quote:
      "Month one would have been chaos without Brikela. Now I talk with my landlord, buy at the market, and joke with my neighbours in their language.",
    rating: 5,
  },
  {
    name: "Dritan Hoxha",
    role: "Diaspora student, Germany",
    quote:
      "I grew up hearing Albanian but never speaking it. Today I had my first real conversation with my grandparents — in Albanian.",
    rating: 5,
  },
  {
    name: "Sofia Marku",
    role: "Parent, Kids Lessons",
    quote:
      "My daughter counts down to her Albanian lesson every week. Last Sunday she played with neighbourhood kids who speak only Albanian — and it just worked.",
    rating: 5,
  },
  {
    name: "Jonas Reiter",
    role: "Erasmus student, Austria",
    quote:
      "Six weeks with Brikela and I was the one organising group hang-outs. Studying in Tirana got twice as fun the moment I could actually talk to people.",
    rating: 5,
  },
];

const FAQ = [
  {
    question: "Can I learn before my trip?",
    answer:
      "Yes — and you'll use it from the very first taxi ride. Even a few weeks is enough to order breakfast, greet people, and ask for directions like it's no big deal.",
  },
  {
    question: "Will I actually be able to speak with locals?",
    answer:
      "That's the whole point. From your first session you practise real sentences out loud, so speaking in real life feels natural — not scary.",
  },
  {
    question: "I'm nervous about speaking. Is that okay?",
    answer:
      "Everyone says that — seriously, everyone. We start with the exact sentences you need and practise them until they feel easy. No judgement, no pressure, ever.",
  },
  {
    question: "Is Albanian really difficult?",
    answer:
      "Less than the legends suggest. The alphabet is quick to learn and the pronunciation is refreshingly honest. And you'll learn it the practical way — not the textbook way.",
  },
  {
    question: "How quickly can I become conversational?",
    answer:
      "You'll order food and coffee within your first few weeks. 'Real conversations' usually follow quickly after that — most students are surprised how fast it happens when every lesson is about real life.",
  },
  {
    question: "Can you personalise lessons around my trip?",
    answer:
      "Yes — this is what we do best. Tell me your route, and we'll build your lessons around the cafés, hotels, and places you'll actually be.",
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