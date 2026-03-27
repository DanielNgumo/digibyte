"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

// ─── Chart data ───────────────────────────────────────────────────────────────
const chartData = [
  { month: "Jan", projects: 4  },
  { month: "Feb", projects: 12 },
  { month: "Mar", projects: 22 },
  { month: "Apr", projects: 35 },
  { month: "May", projects: 50 },
  { month: "Jun", projects: 68 },
  { month: "Jul", projects: 80 },
  { month: "Aug", projects: 92 },
  { month: "Sep", projects: 100 },
  { month: "Oct", projects: 110 },
  { month: "Nov", projects: 116 },
  { month: "Dec", projects: 120 },
];

// ─── Custom tooltip ───────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#0a1628] border border-white/[0.1] rounded-xl px-4 py-3 text-xs shadow-xl">
      <p className="text-white/40 mb-1">{label}</p>
      <p className="font-semibold text-[#f26d26]">
        {payload[0].value} projects
      </p>
    </div>
  );
};

// ─── About section ────────────────────────────────────────────────────────────
export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#030303] py-20 md:py-28"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-[#f26d26]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0c4a6e]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8">

        {/* ── Badge ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] mb-10"
        >
          <Circle className="h-2 w-2 fill-[#f26d26] text-[#f26d26]" />
          <span className="text-xs text-white/50 tracking-widest uppercase font-medium">
            About Us
          </span>
        </motion.div>

        {/*
          ── Headline + inline gray description
          Exactly like featured-section-stats:
          bold large title, then a gray span continuation at the same font-size
        */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-14 md:mb-16 leading-snug max-w-5xl"
        >
          Transforming ideas into digital reality.{" "}
          <span className="text-white/40 font-normal text-xl sm:text-2xl lg:text-3xl">
            We are a passionate team of technology experts committed to delivering
            innovative solutions that help Kenyan businesses thrive — from graphic
            design and web development to mobile apps and IT security.
          </span>
        </motion.h2>

        {/*
          ── Stats row — exactly like featured-section-stats grid
          grid-cols-2 sm:grid-cols-4
        */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10"
        >
          {[
            { number: "15+",  label: "Projects Delivered" },
            { number: "15+",   label: "Happy Clients"      },
            { number: "5+",    label: "Years Experience"   },
            { number: "24/7",  label: "Support Available"  },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-white mb-1">
                {stat.number}
              </p>
              <p className="text-white/40 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/*
          ── Full-width area chart — exactly like featured-section-stats
        */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-full h-48"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 4, right: 0, left: -28, bottom: 0 }}>
              <defs>
                <linearGradient id="gradOrange" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#f26d26" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#f26d26" stopOpacity={0}   />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ stroke: "rgba(255,255,255,0.06)", strokeWidth: 1 }}
              />
              <Area
                type="monotone"
                dataKey="projects"
                stroke="#f26d26"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#gradOrange)"
                dot={false}
                activeDot={{ r: 4, fill: "#f26d26", strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

      </div>
    </section>
  );
}