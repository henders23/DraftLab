import React from "react";
import { motion } from "framer-motion";

const imageAssets = {
  community: "data:image/webp;base64,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",
  learning: "data:image/webp;base64,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",
  language: "data:image/webp;base64,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",
  feedback: "data:image/webp;base64,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",
  success: "data:image/webp;base64,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",
};

const sections = [
  {
    key: "community",
    eyebrow: "Community",
    title: "Write alongside people who understand the journey.",
    body:
      "A calm, generous space for international PhD students to meet, write, ask questions, share strategies and feel less alone in the long work of research. The community brings together peer energy, structured writing time and a sense of belonging across disciplines.",
    cta: "Find your writing circle",
  },
  {
    key: "learning",
    eyebrow: "Learning",
    title: "Build the habits, tools and confidence of doctoral study.",
    body:
      "Through short workshops, guided resources and practical learning pathways, students develop the academic routines that make progress sustainable: reading with purpose, planning arguments, managing sources, presenting research and making writing visible.",
    cta: "Explore the learning pathway",
  },
  {
    key: "language",
    eyebrow: "Language development",
    title: "Shape complex ideas in clear, precise academic English.",
    body:
      "Language development is treated as part of thinking, not as a final correction stage. Students learn how to express stance, connect claims, guide readers and communicate disciplinary knowledge with clarity, nuance and authority.",
    cta: "Develop your academic voice",
  },
  {
    key: "feedback",
    eyebrow: "Feedback",
    title: "Turn response into momentum.",
    body:
      "The community helps students understand, request and use feedback more effectively. Through peer review, tutor guidance and reflective routines, feedback becomes less intimidating and more useful: a structured conversation about how writing can move forward.",
    cta: "Use feedback well",
  },
  {
    key: "success",
    eyebrow: "Success",
    title: "Progress, publish and participate with confidence.",
    body:
      "Success is not only submission. It is the ability to take part in scholarly life: joining conversations, making original claims, presenting research, publishing work and recognising each milestone on the way to becoming an independent researcher.",
    cta: "Start moving forward",
  },
];

function Shell({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f7f5] text-neutral-950 selection:bg-neutral-950 selection:text-white">
      <div className="pointer-events-none fixed inset-0 opacity-[0.55]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.08),transparent_24%),radial-gradient(circle_at_88%_34%,rgba(0,0,0,0.07),transparent_22%),linear-gradient(180deg,#fff,#f2f2ef_50%,#fff)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f7f7f5]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="group flex flex-col leading-none" aria-label="Home">
          <span className="font-serif text-2xl tracking-[-0.04em]">Scholarly Voice</span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.32em] text-neutral-600">International PhD Writing Community</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
          {sections.map((section) => (
            <a key={section.key} href={`#${section.key}`} className="transition hover:text-black">
              {section.eyebrow}
            </a>
          ))}
        </div>
        <a
          href="#join"
          className="rounded-full border border-black bg-black px-5 py-2.5 text-sm text-white shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-neutral-800"
        >
          Join the community
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pb-20 pt-32 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.86fr_1.14fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-neutral-600">Writing · language · belonging</p>
          <h1 className="max-w-4xl font-serif text-[clamp(4.2rem,10vw,9.2rem)] font-medium leading-[0.86] tracking-[-0.075em]">
            Find your<br />scholarly<br />voice.
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-neutral-700">
            A writing and learning community for international PhD students who want to develop voice, confidence, feedback practices and a stronger sense of scholarly belonging.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#community" className="rounded-full bg-black px-7 py-4 text-sm font-medium text-white shadow-2xl shadow-black/20 transition hover:-translate-y-1">
              Begin the journey
            </a>
            <a href="#join" className="rounded-full border border-black/20 px-7 py-4 text-sm font-medium transition hover:border-black hover:bg-white">
              See what’s included
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotateX: 7 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex aspect-square w-full max-w-[680px] items-center justify-center"
        >
          <div className="absolute inset-[10%] rounded-full bg-white shadow-[inset_0_0_80px_rgba(0,0,0,0.08),0_40px_100px_rgba(0,0,0,0.12)]" />
          <VisualAsset type="community" hero />
          <div className="absolute bottom-[6%] left-[18%] h-8 w-[64%] rounded-full bg-black/20 blur-2xl" />
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.34em] text-neutral-500">
        Scroll
        <div className="mx-auto mt-3 h-9 w-px bg-gradient-to-b from-black/50 to-transparent" />
      </div>
    </section>
  );
}

function StorySection({ section, index }) {
  const isTextLeft = index % 2 === 0;
  return (
    <section
      id={section.key}
      className="relative min-h-screen px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ amount: 0.55, once: false }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className={`${isTextLeft ? "lg:order-1" : "lg:order-2"}`}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-neutral-500">{section.eyebrow}</p>
          <h2 className="max-w-xl font-serif text-5xl font-medium leading-[0.96] tracking-[-0.055em] md:text-7xl">
            {section.title}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">{section.body}</p>
          <a href="#join" className="mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-950">
            {section.cta}
            <span className="h-px w-12 bg-black transition-all" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ amount: 0.55, once: false }}
          transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={`${isTextLeft ? "lg:order-2" : "lg:order-1"} relative mx-auto flex aspect-square w-full max-w-[560px] items-center justify-center`}
        >
          <div className="absolute inset-0 rounded-[4rem] bg-white/40 shadow-[inset_0_0_90px_rgba(0,0,0,0.035),0_50px_120px_rgba(0,0,0,0.08)]" />
          <VisualAsset type={section.key} />
          <div className="absolute bottom-[11%] h-8 w-[58%] rounded-full bg-black/20 blur-2xl" />
        </motion.div>
      </div>
      {index < sections.length - 1 && (
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-black/18 to-transparent" />
      )}
    </section>
  );
}

function JoinSection() {
  return (
    <section id="join" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-black/10 bg-black text-white shadow-[0_50px_140px_rgba(0,0,0,0.2)]">
        <div className="grid gap-10 p-10 md:grid-cols-[1.1fr_0.9fr] md:p-16">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-white/50">A place to keep going</p>
            <h2 className="font-serif text-5xl leading-[0.96] tracking-[-0.055em] md:text-7xl">
              You are not only writing a thesis. You are joining a scholarly conversation.
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg leading-8 text-white/68">
              Join structured writing sessions, practical academic language workshops, peer feedback circles and milestone events designed for international doctoral researchers.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                aria-label="Email address"
                placeholder="Email address"
                className="min-h-14 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-white outline-none placeholder:text-white/45 focus:border-white/50"
              />
              <button className="min-h-14 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-neutral-200">
                Register interest
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualAsset({ type, hero = false }) {
  const src = imageAssets[type] || imageAssets.community;

  return (
    <div className={`relative z-10 flex h-full w-full items-center justify-center ${hero ? "scale-110" : "scale-105"}`}>
      <img
        src={src}
        alt=""
        className="h-full w-full max-w-[620px] object-contain mix-blend-multiply drop-shadow-[0_38px_45px_rgba(0,0,0,0.15)]"
      />
    </div>
  );
}

export default function PhDWritingCommunityLanding() {
  return (
    <Shell>
      <Nav />
      <Hero />
      {sections.map((section, index) => (
        <StorySection key={section.key} section={section} index={index} />
      ))}
      <JoinSection />
      <footer className="border-t border-black/10 px-6 py-10 text-sm text-neutral-500 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>© Scholarly Voice. A writing, language and learning community for international PhD students.</p>
          <p>Community · Learning · Language · Feedback · Success</p>
        </div>
      </footer>
    </Shell>
  );
}
