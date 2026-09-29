import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  FileText,
  Globe2,
  Languages,
  Mail,
  PlayCircle,
  Rocket,
  Sparkles,
  UsersRound,
} from 'lucide-react'

const categories = [
  {
    number: '01',
    icon: Languages,
    title: 'English & communication',
    description: 'Build confidence for interviews, teamwork, client calls, and professional writing.',
    resources: [
      ['British Council LearnEnglish', 'Free lessons, grammar, listening, and vocabulary.', 'https://learnenglish.britishcouncil.org/'],
      ['BBC Learning English', 'Short daily lessons for real-world communication.', 'https://www.bbc.co.uk/learningenglish'],
      ['Project Gutenberg', 'Free books to improve reading and vocabulary.', 'https://www.gutenberg.org/'],
      ['YouTube: Learn English with EnglishClass101', 'Free video lessons for everyday communication.', 'https://www.youtube.com/@EnglishClass101'],
    ],
  },
  {
    number: '02',
    icon: Code2,
    title: 'Website building',
    description: 'Learn the fundamentals, build a portfolio, and publish your first useful website.',
    resources: [
      ['freeCodeCamp', 'Free coding curriculum with projects and certificates.', 'https://www.freecodecamp.org/'],
      ['MDN Web Docs', 'The best reference for HTML, CSS, and JavaScript.', 'https://developer.mozilla.org/en-US/'],
      ['The Odin Project', 'A practical, project-based web development path.', 'https://www.theodinproject.com/'],
      ['YouTube: Traversy Media', 'Web development tutorials for all skill levels.', 'https://www.youtube.com/@TraversyMedia'],
    ],
  },
  {
    number: '03',
    icon: Bot,
    title: 'AI agents & automation',
    description: 'Understand AI tools, build helpful workflows, and automate repetitive work responsibly.',
    resources: [
      ['Google AI Essentials', 'Beginner-friendly AI lessons and practical guidance.', 'https://grow.google/ai-essentials/'],
      ['Microsoft Learn AI', 'Free modules for generative AI and responsible usage.', 'https://learn.microsoft.com/training/ai/'],
      ['Hugging Face Course', 'Free lessons on machine learning and open-source AI.', 'https://huggingface.co/learn'],
      ['YouTube: Fireship', 'Quick, visual explanations of AI concepts and tools.', 'https://www.youtube.com/@Fireship'],
    ],
  },
  {
    number: '04',
    icon: BriefcaseBusiness,
    title: 'Career & business',
    description: 'Prepare for work, understand clients, and learn how to turn a skill into a service.',
    resources: [
      ['Google Career Certificates', 'Structured career learning for in-demand skills.', 'https://grow.google/certificates/'],
      ['LinkedIn', 'Create a professional profile, find jobs, and connect with people in your field.', 'https://www.linkedin.com/'],
      ['HubSpot Academy', 'Free courses for CRM, sales, marketing, and email.', 'https://academy.hubspot.com/'],
      ['NPTEL', 'Free courses from Indian institutes and universities.', 'https://nptel.ac.in/'],
      ['YouTube: Ali Abdaal', 'Career advice and productivity for professionals.', 'https://www.youtube.com/@AliAbdaal'],
    ],
  },
  {
    number: '05',
    icon: FileText,
    title: 'AEO, GEO & content',
    description: 'Learn how content gets discovered and how to explain your work clearly online.',
    resources: [
      ['Google Search Central', 'Official SEO starter guidance and documentation.', 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide'],
      ['Ahrefs Academy', 'Free SEO and content marketing courses.', 'https://ahrefs.com/academy'],
      ['Canva Design School', 'Free lessons for visual content and brand basics.', 'https://www.canva.com/designschool/'],
      ['YouTube: SEO for Beginners', 'SEO fundamentals and practical tips for visibility.', 'https://www.youtube.com/results?search_query=seo+for+beginners'],
    ],
  },
  {
    number: '06',
    icon: Rocket,
    title: 'GitHub & deployment',
    description: 'Save your work, collaborate, and take projects from your laptop to the web.',
    resources: [
      ['GitHub Skills', 'Interactive, beginner-friendly GitHub exercises.', 'https://skills.github.com/'],
      ['Vercel Learn', 'Learn how to deploy modern web projects.', 'https://vercel.com/learn'],
      ['Git documentation', 'The official reference for version control basics.', 'https://git-scm.com/doc'],
      ['YouTube: The Net Ninja', 'Clear, step-by-step Git and GitHub tutorials.', 'https://www.youtube.com/@NetNinja'],
    ],
  },
]

const subscriptions = [
  {
    name: 'Coursera',
    description: 'University-led courses with free audit options and paid certificates.',
    url: 'https://www.coursera.org/',
    pricing: '$39–$79/month',
  },
  {
    name: 'Udemy',
    description: 'Affordable, focused courses when you need one specific skill.',
    url: 'https://www.udemy.com/',
    pricing: '$10–$15 per course',
  },
  {
    name: 'LinkedIn Learning',
    description: 'Professional courses for communication, business, and software.',
    url: 'https://www.linkedin.com/learning/',
    pricing: '$39/month',
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f2] text-[#11231d]">
      <div className="border-b border-[#dce8df] bg-[#e6f6e8] px-5 py-3 text-center text-xs font-semibold tracking-wide text-[#1b5e3e]">Free first. Learn honestly. Invest only when it helps you move forward.</div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8" aria-label="Resources navigation">
        <a href="/" className="flex items-center gap-2.5"><span className="grid size-10 place-items-center rounded-2xl bg-[#164b35] text-sm font-black text-white shadow-[0_5px_0_#b8d6b9]">SOJ</span><span className="text-sm font-bold tracking-tight">Struggling for One Job</span></a>
        <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#164b35]"><ArrowLeft className="size-4" /> Back to SOJ</a>
      </nav>

      <header className="mx-auto max-w-7xl px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="max-w-4xl"><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c8dfce] bg-white px-3 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#26734b]"><Sparkles className="size-3.5" /> The free learning directory</div><h1 className="text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-7xl">Don&apos;t wait for the perfect course.<br /><span className="text-[#ed6a3d]">Start with the right resource.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[#5b6d63]">A carefully selected starting point for English, AI, websites, business, content, and deployment. Every link opens the original platform, so you can learn directly from the source.</p></div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3"><div className="rounded-2xl bg-[#164b35] p-5 text-white"><Globe2 className="mb-8 size-6 text-[#f4c65d]" /><p className="text-2xl font-black">Free first</p><p className="mt-1 text-sm text-[#c0d5c5]">Start without a paywall.</p></div><div className="rounded-2xl border border-[#dce8df] bg-white p-5"><BookOpen className="mb-8 size-6 text-[#ed6a3d]" /><p className="text-2xl font-black">Learn by doing</p><p className="mt-1 text-sm text-[#6a7c72]">Build proof, not only notes.</p></div><div className="rounded-2xl border border-[#dce8df] bg-[#f4c65d] p-5"><UsersRound className="mb-8 size-6 text-[#164b35]" /><p className="text-2xl font-black text-[#164b35]">SOJ together</p><p className="mt-1 text-sm text-[#3f5f48]">Live classes coming soon.</p></div></div>
      </header>

      <section className="border-y border-[#dce8df] bg-white px-5 py-16 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-black uppercase tracking-[.18em] text-[#ed6a3d]">Choose your lane</p><h2 className="text-4xl font-black tracking-[-.04em] sm:text-5xl">Start learning for free.</h2></div><p className="max-w-sm text-sm leading-6 text-[#65766d]">Pick one category this week. Complete one lesson. Build one small project.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{categories.map((category) => { const Icon = category.icon; return <article key={category.title} className="flex flex-col rounded-3xl border border-[#dce8df] bg-[#f7f7f2] p-6"><div className="flex items-start justify-between"><div className="grid size-11 place-items-center rounded-2xl bg-[#dcefdc] text-[#164b35]"><Icon className="size-5" /></div><span className="text-xs font-black text-[#9aaca0]">{category.number}</span></div><h3 className="mt-8 text-xl font-black tracking-tight">{category.title}</h3><p className="mt-3 text-sm leading-6 text-[#6a7c72]">{category.description}</p><div className="mt-6 space-y-2 border-t border-[#dce8df] pt-4">{category.resources.map(([name, text, url]) => <a key={name} href={url} target="_blank" rel="noreferrer" className="group flex gap-3 rounded-xl bg-white p-3 transition-transform hover:-translate-y-0.5"><Check className="mt-0.5 size-4 shrink-0 text-[#5c9d73]" /><span className="min-w-0"><span className="block text-sm font-bold text-[#164b35]">{name} <ArrowUpRight className="ml-1 inline size-3.5 transition-transform group-hover:translate-x-0.5" /></span><span className="mt-1 block text-xs leading-5 text-[#74847a]">{text}</span></span></a>)}</div></article> })}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="mb-3 text-xs font-black uppercase tracking-[.18em] text-[#ed6a3d]">When you are ready</p><h2 className="text-4xl font-black tracking-[-.04em] sm:text-5xl">Best subscription platforms. Low price. High value.</h2><p className="mt-5 text-base leading-7 text-[#65766d]">Choose a subscription only when it gives you structure, feedback, or a credential you genuinely need. These are the most trusted platforms for learners worldwide.</p></div><div className="space-y-3">{subscriptions.map(({ name, description, url, pricing }) => <a key={name} href={url} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-[#dce8df] bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#164b35] text-[#f4c65d]"><PlayCircle className="size-5" /></span><span className="min-w-0"><div className="flex items-center gap-2"><span className="font-black text-[#164b35]">{name}</span><span className="rounded-full bg-[#e7f4e7] px-2 py-1 text-xs font-bold text-[#164b35]">{pricing}</span></div><span className="mt-1 block text-sm leading-6 text-[#6a7c72]">{description}</span></span><ChevronRight className="ml-auto size-5 shrink-0 text-[#ed6a3d]" /></a>)}</div></div></section>

      <section className="bg-[#164b35] px-5 py-16 text-white lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.75fr] lg:items-center"><div><p className="mb-3 text-xs font-black uppercase tracking-[.18em] text-[#f4c65d]">Coming soon</p><h2 className="max-w-2xl text-4xl font-black tracking-[-.04em] sm:text-6xl">Free live classes, built around real work.</h2><p className="mt-5 max-w-xl text-base leading-7 text-[#c0d5c5]">SOJ live sessions will cover communication practice, AI agents, websites, automation, deployment, and how to present your work to the world.</p><div className="mt-8 flex flex-wrap gap-3 text-sm font-bold"><span className="rounded-full bg-white/10 px-4 py-2">Live practice</span><span className="rounded-full bg-white/10 px-4 py-2">Project reviews</span><span className="rounded-full bg-white/10 px-4 py-2">Community support</span></div></div><div className="rounded-[2rem] bg-[#e7f4e7] p-7 text-[#164b35] shadow-[8px_8px_0_#f4c65d]"><Mail className="size-7 text-[#ed6a3d]" /><h3 className="mt-8 text-2xl font-black">Want the first class invite?</h3><p className="mt-3 text-sm leading-6 text-[#5f7565]">Join the interest list on the main SOJ page and tell us which class you need first.</p><a href="/#join" className="mt-6 inline-flex items-center rounded-full bg-[#ed6a3d] px-5 py-3 text-sm font-bold text-white shadow-[0_4px_0_#b94d28]">Join the first 50 <ArrowUpRight className="ml-2 size-4" /></a></div></div></section>

      <footer className="bg-[#11231d] px-5 py-8 text-[#c0d5c5] lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm sm:flex-row sm:items-center"><div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-xl bg-[#f4c65d] text-xs font-black text-[#164b35]">SOJ</span><span>Learn freely. Build honestly. Earn independently.</span></div><a href="/" className="font-bold text-[#f4c65d]">Back to home</a></div></footer>
    </main>
  )
}

const _unused = [Mail]
void _unused

export const metadata = {
  title: 'Free Learning Resources | SOJ',
  description: 'Free courses, PDFs, classes, and trusted websites for communication, AI, websites, business, and deployment.',
}
