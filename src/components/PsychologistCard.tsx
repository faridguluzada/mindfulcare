import React from 'react';
import { Star, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Psychologist } from '../types';
import { cn } from '../utils/cn';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface PsychologistCardProps {
  psychologist: Psychologist;
  className?: string;
}

export const PsychologistCard: React.FC<PsychologistCardProps> = ({ psychologist, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={psychologist.image_url}
          alt={psychologist.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-medium text-slate-700">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          {psychologist.rating}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-1">{psychologist.name}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {psychologist.specializations.map((spec) => (
            <span
              key={spec}
              className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-md"
            >
              {spec}
            </span>
          ))}
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Clock className="w-4 h-4" />
            <span>{psychologist.experience_years} years experience</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <DollarSign className="w-4 h-4" />
            <span>${psychologist.hourly_rate} / hour</span>
          </div>
        </div>

        <Link
          to={`/psychologist/${psychologist.id}`}
          className="w-full py-3 px-4 bg-slate-900 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors group"
        >
          View Profile
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};
