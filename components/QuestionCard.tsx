'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { Question } from '@/data/lv1';
import { useLanguage } from '@/contexts/LanguageContext';

interface QuestionCardProps {
    data: Question;
    index: number;
}

export default function QuestionCard({ data, index }: QuestionCardProps) {
    const [selected, setSelected] = useState<number[]>([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { language, t } = useLanguage();

    const toggleSelect = (idx: number) => {
        if (isSubmitted) return;

        if (data.type === 'single') {
            setSelected([idx]);
        } else {
            setSelected(prev =>
                prev.includes(idx)
                    ? prev.filter(i => i !== idx)
                    : [...prev, idx]
            );
        }
    };

    const checkAnswer = () => {
        setIsSubmitted(true);
    };

    const isCorrect = (idx: number) => {
        if (Array.isArray(data.answer)) {
            return data.answer.includes(idx);
        }
        return data.answer === idx;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="neumorph p-6 md:p-8 mb-8"
        >
            <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-700 flex-1">
                    <span className="text-blue-500 mr-2">Q{index + 1}.</span>
                    {data.question[language]}
                </h3>
            </div>

            <div className="space-y-3">
                {data.options.map((opt, i) => {
                    const isSelected = selected.includes(i);
                    const isAnswer = isCorrect(i);

                    let stateClass = "neumorph-btn";
                    if (isSelected) stateClass = "neumorph-inset text-blue-600 font-semibold";

                    if (isSubmitted) {
                        if (isAnswer) stateClass = "bg-green-100 border-green-300 border shadow-none text-green-700";
                        else if (isSelected && !isAnswer) stateClass = "bg-red-100 border-red-300 border shadow-none text-red-700";
                        else stateClass = "opacity-50";
                    }

                    return (
                        <motion.button
                            key={i}
                            whileTap={!isSubmitted ? { scale: 0.98 } : {}}
                            onClick={() => toggleSelect(i)}
                            className={`w-full text-left p-4 flex items-center justify-between rounded-xl ${stateClass}`}
                            disabled={isSubmitted}
                        >
                            <span>{opt[language]}</span>
                            {isSubmitted && isAnswer && <CheckCircle className="w-5 h-5 text-green-600" />}
                            {isSubmitted && isSelected && !isAnswer && <XCircle className="w-5 h-5 text-red-600" />}
                        </motion.button>
                    );
                })}
            </div>

            <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-slate-500">
                    {data.type === 'multiple' ? t('select_multiple') : t('select_one')}
                </div>

                {!isSubmitted ? (
                    <button
                        onClick={checkAnswer}
                        disabled={selected.length === 0}
                        className={`px-6 py-2 rounded-full font-semibold transition-colors ${selected.length > 0 ? 'bg-blue-500 text-white shadow-lg shadow-blue-200 hover:bg-blue-600' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                    >
                        {t('check_answer')}
                    </button>
                ) : (
                    <AnimatePresence>
                        {data.explanation && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="flex-1 ml-4 bg-blue-50 p-3 rounded-lg text-sm text-blue-800 border border-blue-100"
                            >
                                <div className="flex items-center font-bold mb-1">
                                    <HelpCircle className="w-4 h-4 mr-1" /> {t('explanation')}
                                </div>
                                {data.explanation[language]}
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}
            </div>
        </motion.div>
    );
}
