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
                <div className="p-3 bg-blue-100 rounded-full text-blue-600 mr-4 shadow-inner">
                    <ClipboardList size={28} />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-800">{data.title[language]}</h2>
                    <p className="text-slate-500 text-sm mt-1">{data.description[language]}</p>
                </div>
            </div>

            <div className="mb-6">
                <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>{t('progress')}</span>
                    <span>{progress}%</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                        className="h-full bg-blue-500"
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
                            className={`flex items-start p-3 rounded-lg cursor-pointer transition-all ${isDone ? 'bg-blue-50 opacity-75' : 'hover:bg-white/50'}`}
                            onClick={() => toggleTask(i)}
                        >
                            <div className={`mr-4 mt-1 transition-colors ${isDone ? 'text-blue-500' : 'text-slate-300'}`}>
                                {isDone ? <CheckSquare /> : <Square />}
                            </div>
                            <span className={`text-sm ${isDone ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                                {task[language]}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
