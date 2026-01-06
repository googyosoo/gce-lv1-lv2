'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-block p-4 rounded-full neumorph mb-6">
          <Award size={48} className="text-blue-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
          {t('landing_title_1')} <br className="hidden md:block" />
          <span className="text-blue-600">{t('landing_title_2')}</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          {t('landing_desc')}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">
        <LevelCard
          href="/lv1"
          title={t('level1')}
          description={t('lv1_desc')}
          delay={0.2}
          color="blue"
          startText={t('start_practice')}
        />
        <LevelCard
          href="/lv2"
          title={t('level2')}
          description={t('lv2_desc')}
          delay={0.3}
          color="indigo"
          startText={t('start_practice')}
        />
      </div>
    </div>
  );
}

function LevelCard({ href, title, description, delay, color, startText }: { href: string, title: string, description: string, delay: number, color: string, startText: string }) {
  return (
    <Link href={href} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="neumorph p-8 h-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
      >
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 neumorph-inset ${color === 'blue' ? 'text-blue-500' : 'text-indigo-500'}`}>
          <BookOpen size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h2>
        <p className="text-slate-500 mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-blue-500 transition-colors">
          {startText} <ArrowRight size={16} className="ml-2" />
        </div>
      </motion.div>
    </Link>
  );
}
