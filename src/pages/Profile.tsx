import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, DollarSign, MapPin, GraduationCap, Award, CheckCircle2, ArrowLeft } from 'lucide-react';
import { psychologists } from '../data/mockData';
import { BookingCalendar } from '../components/BookingCalendar';
import { motion, AnimatePresence } from 'motion/react';
import { format } from 'date-fns';

export const Profile = () => {
  const { id } = useParams();
  const psychologist = psychologists.find(p => p.id === id);
  const [bookingStep, setBookingStep] = useState<'calendar' | 'confirm' | 'success'>('calendar');
  const [selectedSlot, setSelectedSlot] = useState<{ date: Date; time: string } | null>(null);

  if (!psychologist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Psychologist not found</h2>
          <Link to="/directory" className="text-emerald-600 font-semibold hover:underline">Return to directory</Link>
        </div>
      </div>
    );
  }

  const handleSelectSlot = (date: Date, time: string) => {
    setSelectedSlot({ date, time });
    setBookingStep('confirm');
  };

  const handleConfirmBooking = () => {
    // In a real app, this would call an API
    setBookingStep('success');
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header/Banner */}
      <div className="bg-emerald-600 h-48 md:h-64"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100">
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <img
                  src={psychologist.image_url}
                  alt={psychologist.name}
                  className="w-32 h-32 md:w-48 md:h-48 rounded-3xl object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{psychologist.name}</h1>
                    <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded-lg text-sm font-bold">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {psychologist.rating}
                    </div>
                  </div>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">{psychologist.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {psychologist.specializations.map(spec => (
                      <span key={spec} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
                <div className="space-y-1">
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">Experience</div>
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    {psychologist.experience_years} Years
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">Rate</div>
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    ${psychologist.hourly_rate}/hr
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">Location</div>
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    Online
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">Languages</div>
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    English, Spanish
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Education & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Education</h3>
                  </div>
                  <ul className="space-y-4">
                    {psychologist.education.map((edu, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Certifications</h3>
                  </div>
                  <ul className="space-y-4">
                    {psychologist.certifications.map((cert, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-600">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                {bookingStep === 'calendar' && (
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Book a Session</h3>
                    <BookingCalendar onSelectSlot={handleSelectSlot} />
                  </motion.div>
                )}

                {bookingStep === 'confirm' && selectedSlot && (
                  <motion.div
                    key="confirm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100"
                  >
                    <button
                      onClick={() => setBookingStep('calendar')}
                      className="flex items-center gap-2 text-slate-400 hover:text-slate-600 mb-6 text-sm font-medium"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to calendar
                    </button>
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Confirm Booking</h3>
                    <div className="bg-slate-50 rounded-2xl p-6 mb-8 space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Date</span>
                        <span className="text-slate-900 font-bold">{format(selectedSlot.date, 'MMMM d, yyyy')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Time</span>
                        <span className="text-slate-900 font-bold">{selectedSlot.time}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Duration</span>
                        <span className="text-slate-900 font-bold">50 Minutes</span>
                      </div>
                      <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                        <span className="text-slate-900 font-bold">Total</span>
                        <span className="text-2xl font-bold text-emerald-600">${psychologist.hourly_rate}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                      </div>
                      <button
                        onClick={handleConfirmBooking}
                        className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 mt-4"
                      >
                        Confirm & Pay
                      </button>
                    </div>
                  </motion.div>
                )}

                {bookingStep === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Booking Confirmed!</h3>
                    <p className="text-slate-600 mb-8">
                      Your session with {psychologist.name} has been scheduled. Check your email for the meeting link and details.
                    </p>
                    <Link
                      to="/directory"
                      className="inline-block w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all"
                    >
                      Book Another Session
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
