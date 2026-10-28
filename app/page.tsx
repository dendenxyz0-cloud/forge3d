const navItems = ['Product', 'Workflow', 'Models', 'Pricing'];

const stats = [
  { label: 'models generated', value: '1.2M+' },
  { label: 'avg. time to prototype', value: '4 min' },
  { label: 'team collaboration', value: '24/7' },
];

const featureCards = [
  {
    title: 'Prompt to 3D in seconds',
    icon: '✦',
    text: 'Turn words, sketches, and reference images into high-quality 3D assets with style controls and production-ready constraints.',
  },
  {
    title: 'Edit with precision',
    icon: '⌁',
    text: 'Refine topology, silhouette, material finish, and texture direction without leaving the creative flow.',
  },
  {
    title: 'Animate everything',
    icon: '◌',
    text: 'Generate motion for product shots, character loops, environments, and cinematic presentation scenes.',
  },
  {
    title: 'Ship across formats',
    icon: '⇢',
    text: 'Export GLB, USD, OBJ, FBX, and textured variants ready for games, web, e-commerce, and prototyping tools.',
  },
];

const steps = [
  'Describe your asset, style, and use case.',
  'Generate multiple variants and compare details.',
  'Edit materials, motion, and structure in one view.',
  'Export and ship to your real-world pipeline.',
];

const assetTypes = [
  'Game props',
  'Product mockups',
  'Character concepts',
  'Architecture forms',
  'Packaging visuals',
  'Social motion ads',
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$19',
    description: 'For solo creators shipping prototypes and personal projects.',
    features: ['200 model credits / mo', 'Fast text-to-3D', 'Basic motion tools', 'Standard exports'],
    accent: 'cyan',
  },
  {
    name: 'Studio',
    price: '$79',
    description: 'For teams creating polished assets and iterating quickly.',
    features: ['Unlimited projects', 'Style presets', 'Advanced animation', 'Priority processing'],
    accent: 'violet',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large teams with custom pipelines, collaboration, and governance.',
    features: ['Private deployment', 'Team workspaces', 'API access', 'Dedicated support'],
    accent: 'amber',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.20),_transparent_38%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.18),_transparent_30%),linear-gradient(180deg,#020817_0%,#0b1120_35%,#020817_100%)]" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 font-black text-slate-950 shadow-glow">
            F
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight">Forge3D</div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 md:inline-flex">
            Log in
          </button>
          <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-200">
            Start creating
          </button>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pt-16">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
            The next generation of 3D creation
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
            Design, generate, and animate 3D with AI.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Forge3D turns prompts, concepts, and references into production-ready 3D models and motion. Better than generic generators — built for real creative work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]">
              Start free
            </button>
            <button className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">
              Book a demo
            </button>
          </div>

          <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-400/15 via-sky-500/10 to-violet-500/20 blur-2xl" />
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-4 shadow-glow backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-xs text-slate-300">
              <span>Live workspace</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                ready
              </span>
            </div>

            <div className="rounded-[1.5rem] border border-slate-800 bg-[radial-gradient(circle_at_30%_30%,_rgba(56,189,248,0.18),_transparent_18%),linear-gradient(135deg,#0f172a_0%,#111827_45%,#1e293b_100%)] p-5">
              <div className="mb-5 flex gap-2">
                {[0, 1, 2].map((dot) => (
                  <span key={dot} className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                ))}
              </div>

              <div className="relative h-[380px] overflow-hidden rounded-[1.25rem] border border-slate-700 bg-slate-950/80">
                <div className="absolute inset-0 bg-grid bg-[size:18px_18px] opacity-20" />

                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-[30%] border border-cyan-400/30 bg-gradient-to-br from-cyan-400/40 via-sky-500/10 to-violet-500/35 shadow-[0_0_60px_rgba(56,189,248,0.35)] blur-[1px]" />
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[26%] border border-violet-300/40 bg-gradient-to-br from-violet-400/40 to-cyan-400/20" />
                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white/80 to-cyan-300/60 shadow-[0_0_40px_rgba(255,255,255,0.55)]" />

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-slate-700 bg-slate-900/70 p-3 backdrop-blur-md">
                  <div className="mb-3 flex items-center justify-between text-xs text-slate-300">
                    <span>Prompt</span>
                    <span className="text-cyan-300">AI variant 03</span>
                  </div>
                  <div className="text-sm text-slate-100">
                    “Futuristic drone concept, cinematic lighting, matte alloy, clean topology.”
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Built for design teams</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">From concept to production-ready asset</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-xl text-cyan-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-slate-800 bg-slate-900/60 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Workflow</p>
            <h3 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white">A pipeline that actually fits creative work.</h3>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step} className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 font-bold text-slate-950">
                  {index + 1}
                </div>
                <p className="pt-1 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Use cases</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">Built for every kind of visual creator.</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {assetTypes.map((asset, idx) => (
            <div
              key={asset}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6"
            >
              <div
                className={`absolute inset-0 opacity-70 transition duration-500 group-hover:scale-110 ${
                  idx % 3 === 0
                    ? 'bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent'
                    : idx % 3 === 1
                      ? 'bg-gradient-to-br from-violet-500/20 via-transparent to-transparent'
                      : 'bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent'
                }`}
              />
              <div className="relative flex h-52 items-end">
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[28%] border border-white/20 bg-gradient-to-br from-white/15 to-slate-600/30 blur-sm" />
                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[20%] border border-cyan-300/30 bg-gradient-to-br from-cyan-300/30 to-violet-400/20" />
                <span className="relative text-lg font-semibold text-white">{asset}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Pricing</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">Simple pricing that scales with your teams.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-6 ${
                plan.featured
                  ? 'border-cyan-400/50 bg-gradient-to-b from-cyan-500/10 to-slate-900/80 shadow-glow'
                  : 'border-slate-800 bg-slate-900/60'
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-cyan-500/15 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200">
                    popular
                  </span>
                )}
              </div>

              <div className="mb-4 flex items-end gap-2">
                <span className="text-4xl font-black tracking-[-0.06em] text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="pb-2 text-slate-400">/ month</span>}
              </div>

              <p className="mb-5 text-sm text-slate-300">{plan.description}</p>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-7 w-full rounded-full border border-slate-700 px-4 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">
                {plan.price === 'Custom' ? 'Talk to sales' : 'Get started'}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-slate-900 p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Ready to ship faster?</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">Launch your next 3D concept in minutes.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
              Start free trial
            </button>
            <button className="rounded-full border border-slate-600 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-400">
              Talk to sales
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 font-black text-slate-950">
              F
            </div>
            <span>Forge3D</span>
          </div>

          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
