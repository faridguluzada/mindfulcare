import React from 'react';
import { Heart, Shield, Sparkles, Target, Users } from 'lucide-react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-24 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Our mission is to make mental wellness accessible to everyone.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              MindfulCare was founded on the belief that everyone deserves high-quality, professional, and empathetic mental health support, regardless of their location or schedule.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide everything we do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: 'Empathy First',
                desc: 'We approach every interaction with kindness, understanding, and a genuine desire to help.',
                color: 'bg-rose-50 text-rose-600'
              },
              {
                icon: Shield,
                title: 'Uncompromising Privacy',
                desc: 'Your data and sessions are protected by state-of-the-art security and strict confidentiality protocols.',
                color: 'bg-blue-50 text-blue-600'
              },
              {
                icon: Sparkles,
                title: 'Quality Care',
                desc: 'We only partner with licensed, experienced professionals who meet our rigorous standards.',
                color: 'bg-emerald-50 text-emerald-600'
              }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[32px] border border-slate-100 bg-slate-50/50"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6", value.color)}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
                alt="Our Story"
                className="rounded-[40px] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-emerald-600 rounded-[40px] -z-0 hidden md:block"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">A journey born from experience.</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  MindfulCare started in 2020 when our founders realized how difficult it was to find and book a qualified psychologist during a time of global need.
                </p>
                <p>
                  What began as a simple directory has evolved into a comprehensive platform that handles everything from discovery to secure video sessions and resource sharing.
                </p>
                <p>
                  Today, we are proud to support over 10,000 individuals on their path to better mental health, working with a diverse network of specialists across multiple disciplines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import { cn } from '../utils/cn';
