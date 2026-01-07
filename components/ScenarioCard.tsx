'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Scenario } from '@/data/lv1';
import { ClipboardList, CheckSquare, Square } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ScenarioCardProps {
    data: Scenario;
}

export default function ScenarioCard({ data }: ScenarioCardProps) {
    const [checked, setChecked] = useState<number[]>([]);
    const { language, t } = useLanguage();

    const toggleTask = (index: number) => {
        setChecked(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const progress = Math.round((checked.length / data.tasks.length) * 100);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="neumorph p-8 border-l-4 border-blue-500"
        >
            <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500/20 rounded-full text-blue-700 mr-4 shadow-sm backdrop-blur-sm border border-blue-200">
                    <ClipboardList size={28} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-800">{data.title[language]}</h2>
                    <p className="text-slate-600 text-sm mt-1">{data.description[language]}</p>
                </div>
            </div>

            <div className="mb-6">
                <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                    <span>{t('progress')}</span>
                    <span>{progress}%</span>
                </div>
                <div className="h-2 bg-slate-200/50 rounded-full overflow-hidden shadow-inner backdrop-blur-sm">
                    <motion.div
                        className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            <div className="space-y-4">
                {data.tasks.map((task, i) => {
                    const isDone = checked.includes(i);
                    return (
                        <motion.div
                            key={i}
                            className={`flex items-start p-3 rounded-lg cursor-pointer transition-all border ${isDone ? 'bg-blue-500/10 border-blue-200 shadow-none' : 'hover:bg-white/40 border-transparent hover:border-white/50'}`}
                            onClick={() => toggleTask(i)}
                        >
                            <div className={`mr-4 mt-1 transition-colors ${isDone ? 'text-blue-600' : 'text-slate-400'}`}>
                                {isDone ? <CheckSquare className="drop-shadow-sm" /> : <Square />}
                            </div>
                            <span className={`text-sm ${isDone ? 'line-through text-slate-400' : 'text-slate-700 font-medium'}`}>
                                {task[language]}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
