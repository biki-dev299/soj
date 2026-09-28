'use client'

import {
  ArrowUpRight,
  Bot,
  Check,
  ChevronRight,
  CircleUserRound,
  Code2,
  Globe2,
  Mail,
  Menu,
  Mic2,
  Rocket,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react'
import { useState } from 'react'

const tracks = [
  { icon: Mic2, title: 'Speak with confidence', text: 'Practice English communication, interviews, and presenting your ideas clearly.' },
  { icon: Bot, title: 'Build with AI agents', text: 'Learn how agents can handle research, content, CRM, email, and daily workflows.' },
  { icon: Code2, title: 'Ship real projects', text: 'Turn your skills into websites, automations, and useful products people pay for.' },
  { icon: Rocket, title: 'Become independent', text: 'Learn how to deploy, sell, document, and grow — without paying us a subscription.' },
]

const agentSkills = ['Website building', 'AEO & GEO', 'CRM setup', 'Email automation', 'AI content', 'Deployment']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f2] text-[#11231d]">
      <div className="border-b border-[#dce8df] bg-[#e6f6e8] px-5 py-3 text-center text-xs font-semibold tracking-wide text-[#1b5e3e]">
        Free guidance. Real skills. Your own income. <span className="hidden sm:inline">No pay-to-join promise.</span>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-2.5" aria-label="SOJ home">
          <span className="grid size-10 place-items-center rounded-2xl bg-[#164b35] text-sm font-black text-white shadow-[0_5px_0_#b8d6b9]">SOJ</span>
          <span className="text-sm font-bold tracking-tight">Struggling for One Job</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-[#50645a] md:flex">
          <a href="#why" className="transition-colors hover:text-[#164b35]">Why SOJ</a>
          <a href="#learn" className="transition-colors hover:text-[#164b35]">What you&apos;ll learn</a>
          <a href="#path" className="transition-colors hover:text-[#164b35]">The path</a><a href="/resources" className="transition-colors hover:text-[#164b35]">Free resources</a>
        </div>
        <a href="#join" className="hidden rounded-full bg-[#ed6a3d] px-5 py-3 text-sm font-bold text-white shadow-[0_4px_0_#b94d28] transition-transform hover:-translate-y-0.5 sm:inline-flex">Join the first 50 <ArrowUpRight className="ml-1 size-4" /></a>
        <button type="button" className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {menuOpen && <div className="mx-5 mb-4 flex flex-col gap-4 rounded-2xl border border-[#d8e5dc] bg-white p-5 text-sm font-semibold md:hidden"><a href="#why" onClick={() => setMenuOpen(false)}>Why SOJ</a><a href="#learn" onClick={() => setMenuOpen(false)}>What you&apos;ll learn</a><a href="#join" onClick={() => setMenuOpen(false)}>Join the first 50</a><a href="/resources" onClick={() => setMenuOpen(false)}>Free resources</a></div>}

      <section id="top" className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-20">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#c8dfce] bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#26734b]"><Sparkles className="size-3.5" /> A community for the next CEO</div>
          <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.35rem]">Don&apos;t wait for a job.<br /><span className="text-[#ed6a3d]">Build your way forward.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#5b6d63]">SOJ helps job and internship seekers learn communication, AI agents, automation, and real-world digital skills — so you can create opportunities instead of only waiting for them.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"><a href="#join" className="inline-flex items-center justify-center rounded-full bg-[#164b35] px-6 py-4 font-bold text-white shadow-[0_5px_0_#a8c8ad] transition-transform hover:-translate-y-0.5">I want to build <ArrowUpRight className="ml-2 size-5" /></a><a href="#why" className="inline-flex items-center justify-center gap-2 px-2 py-3 text-sm font-bold text-[#164b35]">See how it works <ChevronRight className="size-4" /></a></div>
          <div className="mt-12 flex items-center gap-4 border-t border-[#d8e5dc] pt-5 text-sm text-[#668074]"><div className="flex -space-x-2"><span className="grid size-8 place-items-center rounded-full border-2 border-[#f7f7f2] bg-[#f4bb75] text-xs font-black">A</span><span className="grid size-8 place-items-center rounded-full border-2 border-[#f7f7f2] bg-[#8ec6a4] text-xs font-black">R</span><span className="grid size-8 place-items-center rounded-full border-2 border-[#f7f7f2] bg-[#b7a3db] text-xs font-black">S</span></div><span><strong className="text-[#164b35]">50+ builders</strong> needed for the first learning team</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[510px] lg:justify-self-end"><div className="absolute -right-4 -top-7 size-28 rounded-full bg-[#f4c65d] blur-[1px]" /><div className="relative rounded-[2.5rem] bg-[#164b35] p-5 shadow-[12px_14px_0_#cfe3d1] sm:p-7"><div className="rounded-[1.75rem] bg-[#e7f4e7] p-6 sm:p-8"><div className="mb-14 flex items-center justify-between"><span className="text-sm font-black tracking-[.18em] text-[#164b35]">SOJ / 01</span><span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#ed6a3d]">START HERE</span></div><div className="relative mx-auto flex aspect-square max-w-[265px] items-center justify-center rounded-full border-[1.5rem] border-[#f4bb75] bg-[#164b35] shadow-[inset_0_0_0_1px_#286646]"><div className="text-center text-white"><CircleUserRound className="mx-auto mb-2 size-14 stroke-[1.3]" /><p className="text-2xl font-black leading-none">Learn.</p><p className="text-2xl font-black leading-none text-[#f4bb75]">Build.</p><p className="text-2xl font-black leading-none">Lead.</p></div><span className="absolute -right-5 top-8 grid size-12 place-items-center rounded-2xl bg-white text-[#ed6a3d] shadow-lg"><Bot className="size-6" /></span><span className="absolute -bottom-3 -left-4 grid size-12 place-items-center rounded-2xl bg-[#ed6a3d] text-white shadow-lg"><Globe2 className="size-6" /></span></div><p className="mt-7 text-center text-sm font-bold text-[#164b35]">Your background is not a barrier.<br />Your next step is.</p></div></div></div>
      </section>

      <section id="why" className="border-y border-[#dce8df] bg-white px-5 py-16 lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="mb-12 max-w-2xl"><p className="mb-4 text-xs font-black uppercase tracking-[.18em] text-[#ed6a3d]">A different kind of platform</p><h2 className="text-4xl font-black tracking-[-.04em] sm:text-5xl">You don&apos;t need another course. You need a direction.</h2><p className="mt-5 text-lg leading-8 text-[#65766d]">We won&apos;t sell you a monthly subscription or promise overnight success. We&apos;ll show you the tools, the process, and the honest next step.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{tracks.map((track) => { const Icon = track.icon; return <article key={track.title} className="rounded-3xl border border-[#dce8df] bg-[#f7f7f2] p-6 transition-transform hover:-translate-y-1"><div className="mb-10 grid size-11 place-items-center rounded-2xl bg-[#dcefdc] text-[#164b35]"><Icon className="size-5" /></div><h3 className="text-xl font-black tracking-tight">{track.title}</h3><p className="mt-3 text-sm leading-6 text-[#6a7c72]">{track.text}</p></article> })}</div></div></section>

      <section id="learn" className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8 lg:py-28"><div><p className="mb-4 text-xs font-black uppercase tracking-[.18em] text-[#ed6a3d]">One agent. Many possibilities.</p><h2 className="text-4xl font-black tracking-[-.04em] sm:text-5xl">Learn the skills that make a small team powerful.</h2><p className="mt-5 text-lg leading-8 text-[#65766d]">Start with one AI agent and learn how to apply it across your work. The goal is not to chase every tool — it&apos;s to understand the system behind the work.</p><a href="#join" className="mt-8 inline-flex items-center font-bold text-[#164b35]">Explore the learning path <ArrowUpRight className="ml-2 size-4" /></a></div><div className="grid gap-3 sm:grid-cols-2">{agentSkills.map((skill, index) => <div key={skill} className="flex items-center gap-4 rounded-2xl border border-[#dce8df] bg-white p-4 shadow-sm"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#164b35] text-xs font-black text-[#f4c65d]">0{index + 1}</span><span className="font-bold">{skill}</span><Check className="ml-auto size-4 text-[#5c9d73]" /></div>)}</div></section>

      <section id="path" className="bg-[#164b35] px-5 py-20 text-white lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 border-b border-white/20 pb-12 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-black uppercase tracking-[.18em] text-[#f4c65d]">The SOJ promise</p><h2 className="max-w-2xl text-4xl font-black tracking-[-.04em] sm:text-5xl">Pay for your tools.<br />Pay yourself with your skills.</h2></div><p className="max-w-sm text-base leading-7 text-[#c0d5c5]">We guide you toward free and affordable platforms, practical documentation, and small, sensible investments. Your growth stays yours.</p></div><div className="mt-10 grid gap-8 md:grid-cols-3">{['Learn the foundation', 'Build in public', 'Earn independently'].map((step, index) => <div key={step} className="relative border-l border-[#5f8b6d] pl-5"><span className="text-sm font-bold text-[#f4c65d]">0{index + 1}</span><h3 className="mt-3 text-xl font-black">{step}</h3><p className="mt-2 text-sm leading-6 text-[#c0d5c5]">{index === 0 ? 'Communication, AI basics, Indian documentation, and a clear weekly routine.' : index === 1 ? 'Create websites, automations, case studies, and content that prove what you can do.' : 'Approach clients with confidence, deliver value, and build a sustainable independent path.'}</p></div>)}</div></div></section>

      <section id="join" className="bg-[#f4c65d] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.7fr] lg:items-center"><div><p className="mb-4 text-xs font-black uppercase tracking-[.18em] text-[#164b35]">The first 50</p><h2 className="max-w-2xl text-4xl font-black tracking-[-.05em] text-[#164b35] sm:text-6xl">Let&apos;s learn, build, and become CEOs together.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-[#3f5f48]">If this idea speaks to you, join the early group. Tell us what you want to learn, what you&apos;re struggling with, and what you want to build.</p><div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-[#164b35]"><span className="rounded-full border border-[#164b35]/20 bg-white/50 px-4 py-2">No subscription</span><span className="rounded-full border border-[#164b35]/20 bg-white/50 px-4 py-2">Learn by doing</span><span className="rounded-full border border-[#164b35]/20 bg-white/50 px-4 py-2">India-first guidance</span></div></div><div className="rounded-[2rem] bg-white p-6 shadow-[8px_8px_0_#dcae31] sm:p-8"><div className="mb-6 flex items-center gap-3"><div className="grid size-11 place-items-center rounded-2xl bg-[#dcefdc] text-[#164b35]"><UsersRound className="size-5" /></div><div><p className="font-black text-[#164b35]">Join the interest list</p><p className="text-xs text-[#708174]">We&apos;ll reply with the next step.</p></div></div><form action="mailto:hello@soj.community" method="post" encType="text/plain" className="space-y-3"><label className="sr-only" htmlFor="name">Your name</label><input id="name" name="name" required placeholder="Your name" className="w-full rounded-xl border border-[#dce8df] bg-[#f7f7f2] px-4 py-3 text-sm outline-none ring-[#164b35] placeholder:text-[#91a096] focus:ring-2" /><label className="sr-only" htmlFor="email">Your email</label><input id="email" name="email" type="email" required placeholder="Email address" className="w-full rounded-xl border border-[#dce8df] bg-[#f7f7f2] px-4 py-3 text-sm outline-none ring-[#164b35] placeholder:text-[#91a096] focus:ring-2" /><label className="sr-only" htmlFor="goal">What do you want to build?</label><textarea id="goal" name="goal" rows={3} placeholder="What do you want to learn or build?" className="w-full resize-none rounded-xl border border-[#dce8df] bg-[#f7f7f2] px-4 py-3 text-sm outline-none ring-[#164b35] placeholder:text-[#91a096] focus:ring-2" /><button type="submit" className="flex w-full items-center justify-center rounded-xl bg-[#ed6a3d] px-4 py-3.5 font-bold text-white transition-transform hover:-translate-y-0.5">I&apos;m interested <ArrowUpRight className="ml-2 size-4" /></button></form></div></div></section>

      <section className="border-t border-[#dce8df] bg-[#f7f7f2] px-5 py-16 lg:px-8 lg:py-20"><div className="mx-auto max-w-4xl rounded-[2rem] border border-[#d8e5dc] bg-white p-7 text-center shadow-[8px_8px_0_#dcefdc] sm:p-10"><p className="mb-4 text-xs font-black uppercase tracking-[.18em] text-[#ed6a3d]">A note of gratitude</p><h2 className="text-3xl font-black tracking-[-.04em] text-[#164b35] sm:text-4xl">Thank you for giving me the chance to learn, build, and deploy.</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#65766d]">Special thanks to Handshake for the opportunity and inspiration to turn this idea into a real website. I&apos;m grateful for the tools and community that helped me learn, build this project, upload it to GitHub, and deploy it through Vercel.</p><div className="mt-7 flex flex-wrap justify-center gap-3 text-sm font-bold text-[#164b35]"><span className="rounded-full bg-[#e7f4e7] px-4 py-2">Learn with purpose</span><span className="rounded-full bg-[#e7f4e7] px-4 py-2">Build in public</span><span className="rounded-full bg-[#e7f4e7] px-4 py-2">Deploy and grow</span></div></div></section>

      <footer className="bg-[#11231d] px-5 py-8 text-[#c0d5c5] lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm sm:flex-row sm:items-center"><div className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-xl bg-[#f4c65d] text-xs font-black text-[#164b35]">SOJ</span><span>Struggling for One Job → becoming your own CEO.</span></div><div className="flex items-center gap-5"><a href="mailto:hello@soj.community" aria-label="Email SOJ" className="transition-colors hover:text-white"><Mail className="size-4" /></a><a href="#join" aria-label="Join SOJ" className="transition-colors hover:text-white"><UsersRound className="size-4" /></a><span className="text-xs text-[#789486]">Built with purpose in India.</span></div></div></footer>
    </main>
  )
}
