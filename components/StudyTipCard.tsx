'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Info } from 'lucide-react';
import { StudyTip } from '@/data/lv1';
import { useLanguage } from '@/contexts/LanguageContext';

interface StudyTipCardProps {
    data: StudyTip;
    index: number;
}

export default function StudyTipCard({ data, index }: StudyTipCardProps) {
    const { language } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="neumorph p-6 border-l-4 border-yellow-400"
        >
            <div className="flex items-start mb-3">
                <div className="bg-yellow-100 p-2 rounded-full text-yellow-600 mr-3 mt-1">
                    <Lightbulb size={20} />
                </div>
                <div>
                    <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-full mb-2 inline-block">
                        {data.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800">
                        {data.title[language]}
                    </h3>
                </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed pl-12">
                {data.content[language]}
            </p>
        </motion.div>
    );
}
