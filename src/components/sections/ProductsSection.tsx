import React, { useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  QrCode,
  Repeat,
  CreditCard,
  Zap,
  Layers,
  Send,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string; // tailwind gradient
  accent: string; // tailwind bg/text
  mock: {
    label: string;
    value: string;
    sub: string;
    stats: { k: string; v: string }[];
  };
};

const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "UPI Collection",
    description: "Collect payments via UPI with real-time settlement.",
    color: "from-rose-500 via-red-500 to-orange-400",
    accent: "text-rose-300",
    mock: {
      label: "Today’s Collections",
      value: "₹ 3.42 Cr",
      sub: "Auto-reconciled in real time",
      stats: [
        { k: "Success Rate", v: "99.2%" },
        { k: "Avg. Settlement", v: "T+0" },
        { k: "Txn Count", v: "18,450" },
      ],
    },
  },
  {
    icon: CreditCard,
    title: "Simpli Collect",
    description: "Unique Virtual IDs for hassle-free payments.",
    color: "from-blue-500 via-indigo-500 to-violet-500",
    accent: "text-indigo-300",
    mock: {
      label: "Virtual IDs Active",
      value: "12,980",
      sub: "Track & reconcile instantly",
      stats: [
        { k: "Matched", v: "11,771" },
        { k: "Pending", v: "1,209" },
        { k: "New Today", v: "420" },
      ],
    },
  },
  {
    icon: Repeat,
    title: "Recurring Collections",
    description: "Effortless automated recurring payments via UPI.",
    color: "from-fuchsia-500 via-purple-500 to-indigo-500",
    accent: "text-fuchsia-300",
    mock: {
      label: "Recurring Schedules",
      value: "2,304",
      sub: "Retries + smart reminders enabled",
      stats: [
        { k: "Due Today", v: "214" },
        { k: "Recovered", v: "78%" },
        { k: "Auto-Retry", v: "On" },
      ],
    },
  },
  {
    icon: QrCode,
    title: "QR Collection for Merchants",
    description: "Effortless, secure, real-time QR payment collections.",
    color: "from-emerald-500 via-green-500 to-teal-500",
    accent: "text-emerald-300",
    mock: {
      label: "Merchant QR Scans",
      value: "6,740",
      sub: "Instant confirmation + alerts",
      stats: [
        { k: "Peak/min", v: "210" },
        { k: "Refunds", v: "0.3%" },
        { k: "Active QRs", v: "1,120" },
      ],
    },
  },
  {
    icon: Layers,
    title: "Bulk Payments",
    description: "Transfer funds to many instantly.",
    color: "from-amber-400 via-orange-500 to-rose-500",
    accent: "text-amber-300",
    mock: {
      label: "Bulk Batches",
      value: "55",
      sub: "Approvals + role controls",
      stats: [
        { k: "Processed", v: "48" },
        { k: "Queued", v: "7" },
        { k: "Avg. Time", v: "38s" },
      ],
    },
  },
  {
    icon: Send,
    title: "UPI Payout",
    description: "Instant, cost-effective UPI payments.",
    color: "from-cyan-500 via-sky-500 to-blue-600",
    accent: "text-cyan-300",
    mock: {
      label: "Payouts Today",
      value: "₹ 1.18 Cr",
      sub: "Fast, secure payouts in clicks",
      stats: [
        { k: "Completed", v: "3,102" },
        { k: "Pending", v: "64" },
        { k: "Failures", v: "0.6%" },
      ],
    },
  },
];

function clampIndex(v: number, len: number) {
  return Math.min(len - 1, Math.max(0, v));
}

export const ProductsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  // Scroll-driven “active feature” selection (no Next.js needed)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Map progress to feature index
  const activeIndexMv = useTransform(
    scrollYProgress,
    [0.12, 0.88],
    [0, FEATURES.length - 1]
  );

  useMotionValueEvent(activeIndexMv, "change", (v) => {
    const idx = clampIndex(Math.round(v), FEATURES.length);
    setActive(idx);
  });

  const activeFeature = useMemo(() => FEATURES[active], [active]);

  return (
    <section
      ref={sectionRef as any}
      className="relative py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Ambient background (fintech vibe) */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[520px] h-[520px] bg-rose-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[620px] h-[620px] bg-sky-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] bg-violet-500/10 rounded-full blur-3xl" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.12]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur">
            <Sparkles className="w-4 h-4 text-white/80" />
            <span className="text-white/80 text-xs tracking-widest uppercase font-semibold">
              Modern Payment Stack
            </span>
          </div>

          <h2
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Fintech-grade Collections & Payouts
            <br />
            <span className="text-white/70">built for speed, control and scale</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/70 text-base md:text-lg leading-relaxed">
            Six core modules designed for UPI-first businesses: reconcile instantly,
            automate recurring collections, and execute secure payouts with governance.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          {/* Left list */}
          <div className="lg:col-span-3 space-y-4">
            {FEATURES.slice(0, 3).map((f, i) => {
              const idx = i;
              const isActive = active === idx;
              const Icon = f.icon;

              return (
                <motion.button
                  key={f.title}
                  type="button"
                  onMouseEnter={() => setActive(idx)}
                  onFocus={() => setActive(idx)}
                  className={`w-full text-left group rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-white/20 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                      : "border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/15"
                  }`}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                >
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-white font-semibold">{f.title}</h3>
                          <motion.span
                            className="text-white/60"
                            animate={{ x: isActive ? 2 : 0, opacity: isActive ? 1 : 0.6 }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.span>
                        </div>

                        <p className="mt-1 text-sm text-white/70 leading-relaxed">
                          {f.description}
                        </p>
                      </div>
                    </div>

                    {/* tiny sub strip */}
                    <div className="mt-4 flex items-center justify-between text-[11px] text-white/60">
                      <span className="inline-flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        Governance-ready
                      </span>
                      <span className={isActive ? "text-white/80" : "text-white/50"}>
                        Live module
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Center phone */}
          <div className="lg:col-span-6 flex justify-center">
            <PhoneMock
              feature={activeFeature}
              activeIndex={active}
              total={FEATURES.length}
            />
          </div>

          {/* Right list */}
          <div className="lg:col-span-3 space-y-4">
            {FEATURES.slice(3, 6).map((f, i) => {
              const idx = i + 3;
              const isActive = active === idx;
              const Icon = f.icon;

              return (
                <motion.button
                  key={f.title}
                  type="button"
                  onMouseEnter={() => setActive(idx)}
                  onFocus={() => setActive(idx)}
                  className={`w-full text-left group rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-white/20 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                      : "border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/15"
                  }`}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                >
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-white font-semibold">{f.title}</h3>
                          <motion.span
                            className="text-white/60"
                            animate={{ x: isActive ? -2 : 0, opacity: isActive ? 1 : 0.6 }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.span>
                        </div>

                        <p className="mt-1 text-sm text-white/70 leading-relaxed">
                          {f.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[11px] text-white/60">
                      <span className="inline-flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        Secure rails
                      </span>
                      <span className={isActive ? "text-white/80" : "text-white/50"}>
                        Live module
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const PhoneMock: React.FC<{
  feature: Feature;
  activeIndex: number;
  total: number;
}> = ({ feature, activeIndex, total }) => {
  // scroll “parallax” inside center
  const phoneWrapRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: phoneWrapRef,
    offset: ["start end", "end start"],
  });

  const floatY = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.6, 0.35]);

  const Icon = feature.icon;

  return (
    <div ref={phoneWrapRef} className="relative">
      {/* floating glows */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute -inset-10 pointer-events-none"
      >
        <div className={`absolute -top-10 left-10 w-48 h-48 rounded-full blur-3xl bg-gradient-to-br ${feature.color} opacity-30`} />
        <div className="absolute -bottom-10 right-10 w-56 h-56 rounded-full blur-3xl bg-white/10 opacity-50" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7 }}
        style={{ y: floatY }}
        className="relative"
      >
        {/* Fintech phone chassis (glass + metal) */}
        <div className="relative w-[340px] sm:w-[360px] h-[700px]">
          {/* outer shadow */}
          <div className="absolute inset-0 rounded-[3.2rem] bg-black/60 blur-2xl opacity-60 scale-[1.02]" />

          {/* metal body */}
          <div className="relative w-full h-full rounded-[3.2rem] p-[10px] bg-gradient-to-b from-white/20 via-white/10 to-white/5 border border-white/15 shadow-2xl">
            {/* inner bezel */}
            <div className="w-full h-full rounded-[2.8rem] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden border border-white/10 relative">
              {/* dynamic top bar */}
              <div className="absolute top-0 left-0 right-0 h-20">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-90`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.45),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.25),transparent_50%)]" />
                <div className="relative h-full px-6 pt-5 flex items-start justify-between text-white">
                  <div className="space-y-1">
                    <div className="text-[11px] font-semibold opacity-90">CashQuin</div>
                    <div className="text-base font-bold leading-none">
                      {feature.title}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-[11px] font-semibold opacity-90">9:41</div>
                    <div className="w-9 h-5 rounded-full bg-white/20 border border-white/25" />
                  </div>
                </div>
              </div>

              {/* notch / island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-40 h-10 rounded-3xl bg-black/55 border border-white/10 backdrop-blur-md z-20">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-2 rounded-full bg-white/15" />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400/80 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
              </div>

              {/* content */}
              <div className="absolute top-20 left-0 right-0 bottom-16 px-6 py-5">
                {/* hero card */}
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] text-white/70 font-semibold">
                        {feature.mock.label}
                      </div>
                      <div className="mt-1 text-2xl font-bold text-white">
                        {feature.mock.value}
                      </div>
                      <div className="mt-1 text-xs text-white/70">
                        {feature.mock.sub}
                      </div>
                    </div>

                    <div
                      className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {feature.mock.stats.map((s) => (
                      <div
                        key={s.k}
                        className="rounded-xl border border-white/10 bg-black/20 px-3 py-2"
                      >
                        <div className="text-[10px] text-white/60">{s.k}</div>
                        <div className="text-[12px] font-semibold text-white">
                          {s.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* activity feed */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] font-semibold text-white/80">
                      Live Activity
                    </div>
                    <div className="text-[10px] text-white/60">
                      Module {activeIndex + 1} / {total}
                    </div>
                  </div>

                  <div className="mt-3 space-y-2">
                    {[
                      { t: "Settlement posted", d: "Just now", s: "SUCCESS" },
                      { t: "Auto-match completed", d: "2m ago", s: "DONE" },
                      { t: "Risk check passed", d: "6m ago", s: "OK" },
                    ].map((row, i) => (
                      <motion.div
                        key={row.t}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.06 * i }}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2"
                      >
                        <div>
                          <div className="text-[11px] text-white/80 font-semibold">
                            {row.t}
                          </div>
                          <div className="text-[10px] text-white/55">
                            {row.d}
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold text-white/80 px-2 py-1 rounded-full border border-white/10 bg-white/5">
                          {row.s}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-4 w-full rounded-xl bg-gradient-to-r ${feature.color} text-white text-sm font-semibold py-3 shadow-[0_18px_40px_rgba(0,0,0,0.35)]`}
                >
                  Explore {feature.title}
                </motion.button>
              </div>

              {/* bottom nav */}
              <div className="absolute bottom-0 left-0 right-0 h-16 border-t border-white/10 bg-black/30 backdrop-blur-xl px-6">
                <div className="h-full flex items-center justify-between text-white/60">
                  {[
                    { label: "Dashboard", active: false },
                    { label: "Collect", active: activeIndex <= 2 },
                    { label: "Home", active: true },
                    { label: "Payout", active: activeIndex >= 4 },
                    { label: "Settings", active: false },
                  ].map((it) => (
                    <button
                      key={it.label}
                      className={`text-[10px] font-semibold ${
                        it.active ? "text-white" : "text-white/55"
                      }`}
                      type="button"
                    >
                      {it.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* screen highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-[2.8rem] bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_70%_0%,rgba(255,255,255,0.10),transparent_40%)]" />
            </div>
          </div>
        </div>

        {/* floating chips */}
        <FloatingChip
          className="absolute -top-10 -left-10"
          gradient={feature.color}
          text="Real-time"
        />
        <FloatingChip
          className="absolute -bottom-10 -right-10"
          gradient="from-white/20 to-white/5"
          text="Secure"
          delay={0.5}
        />
      </motion.div>
    </div>
  );
};

const FloatingChip: React.FC<{
  className?: string;
  gradient: string;
  text: string;
  delay?: number;
}> = ({ className, gradient, text, delay = 0 }) => {
  return (
    <motion.div
      className={`${className} w-24 h-24 rounded-2xl border border-white/15 bg-gradient-to-br ${gradient} shadow-2xl backdrop-blur`}
      animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, delay }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-white/90 text-xs font-semibold">{text}</span>
      </div>
    </motion.div>
  );
};
