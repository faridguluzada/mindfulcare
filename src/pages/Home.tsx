import React from 'react';
import { Search, Shield, Users, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { psychologists } from '../data/mockData';
import { PsychologistCard } from '../components/PsychologistCard';
import { cn } from '../utils/cn';

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-emerald-50/50 pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
                Your Mental Wellness Matters
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
                Find the right <span className="text-emerald-600">psychologist</span> for your journey.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Connect with licensed specialists who understand you. Professional, empathetic, and accessible care from the comfort of your home.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/directory"
                  className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2"
                >
                  Find a Specialist
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  How it Works
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full hidden lg:block opacity-20">
          <div className="w-full h-full bg-emerald-600 rounded-full blur-[120px] -mr-32"></div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Licensed Specialists', value: '500+' },
              { label: 'Happy Patients', value: '10k+' },
              { label: 'Sessions Completed', value: '50k+' },
              { label: 'Average Rating', value: '4.9/5' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How MindfulCare Works</h2>
            <p className="text-slate-600">Three simple steps to start your journey towards better mental health.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Search,
                title: 'Find Your Match',
                desc: 'Browse through our directory of licensed psychologists and filter by specialization, price, or availability.',
                color: 'bg-blue-50 text-blue-600'
              },
              {
                icon: Calendar,
                title: 'Book a Session',
                desc: 'Choose a time that works for you using our integrated calendar system. Instant confirmation guaranteed.',
                color: 'bg-emerald-50 text-emerald-600'
              },
              {
                icon: Shield,
                title: 'Start Healing',
                desc: 'Connect with your specialist via our secure video platform and begin your personalized therapy journey.',
                color: 'bg-purple-50 text-purple-600'
              }
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6", step.color)}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Psychologists */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Specialists</h2>
              <p className="text-slate-600">Top-rated professionals ready to help you today.</p>
            </div>
            <Link to="/directory" className="hidden md:flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700">
              View All Specialists
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {psychologists.map((psych) => (
              <PsychologistCard key={psych.id} psychologist={psych} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/directory" className="inline-flex items-center gap-2 text-emerald-600 font-semibold">
              View All Specialists
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to take the first step?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of others who have found their path to wellness through MindfulCare.
            </p>
            <Link
              to="/directory"
              className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-600/20"
            >
              Get Started Now
            </Link>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};
