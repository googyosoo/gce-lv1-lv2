'use client';

import { motion } from 'framer-motion';
import { lv2Questions, lv2Scenario } from '@/data/lv2';
import QuestionCard from '@/components/QuestionCard';
import ScenarioCard from '@/components/ScenarioCard';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Lv2Page() {
    const { t } = useLanguage();

    return (
        <div className="py-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10 text-center"
            >
                <h1 className="text-3xl font-bold text-slate-800 mb-2">{t('title_lv2')}</h1>
                <p className="text-slate-500">{t('desc_lv2')}</p>
            </motion.div>

            <div className="space-y-12">
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-indigo-500 rounded-full mr-4"></div>
                        <h2 className="text-2xl font-bold text-slate-700">{t('part1')}</h2>
                    </div>

                    {lv2Questions.map((q, idx) => (
                        <QuestionCard key={q.id} data={q} index={idx} />
                    ))}
                </section>

                <section className="pt-8 border-t border-slate-200">
                    <div className="flex items-center mb-8">
                        <div className="h-8 w-1 bg-blue-500 rounded-full mr-4"></div>
                        <h2 className="text-2xl font-bold text-slate-700">{t('part2')}</h2>
                    </div>

                    <ScenarioCard data={lv2Scenario} />
                </section>
            </div>
        </div>
    );
}
