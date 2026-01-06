'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
    'level1': { en: 'Level 1: Fundamentals', ko: '레벨 1: 기본 과정' },
    'level2': { en: 'Level 2: Advanced', ko: '레벨 2: 심화 과정' },
    'start_practice': { en: 'Start Practice', ko: '연습 시작하기' },
    'check_answer': { en: 'Check Answer', ko: '정답 확인' },
    'select_one': { en: '(Select one)', ko: '(하나만 선택)' },
    'select_multiple': { en: '(Select all that apply)', ko: '(모두 선택)' },
    'explanation': { en: 'Explanation', ko: '해설' },
    'progress': { en: 'Progress', ko: '진행률' },
    'part1': { en: 'Part 1: Multiple Choice', ko: '파트 1: 객관식 문제' },
    'part2': { en: 'Part 2: Lab Scenario', ko: '파트 2: 실습 시나리오' },
    'title_lv1': { en: 'Level 1 Exam Prep', ko: '레벨 1 시험 대비' },
    'desc_lv1': { en: 'Master the fundamentals of Google Workspace for Education.', ko: 'Google Workspace for Education의 기본을 마스터하세요.' },
    'title_lv2': { en: 'Level 2 Exam Prep', ko: '레벨 2 시험 대비' },
    'desc_lv2': { en: 'Advanced strategies for the digital classroom.', ko: '디지털 교실을 위한 고급 전략을 히세요.' },
    'landing_title_1': { en: 'Master Your', ko: '당신의' },
    'landing_title_2': { en: 'Google Certification', ko: '구글 공인 교육자 자격증' },
    'landing_desc': { en: 'Prepare for the Google Certified Educator Level 1 and 2 exams with our interactive practice questions and realistic scenarios.', ko: '인터랙티브 연습 문제와 실제 시나리오를 통해 구글 공인 교육자 Lv.1 및 Lv.2 시험을 완벽하게 대비하세요.' },
    'lv1_desc': { en: 'Master the basics of Google tools in the classroom. Recommended for new educators.', ko: '교실에서 사용하는 구글 도구의 기초를 마스터하세요. 신규 교사에게 권장됩니다.' },
    'lv2_desc': { en: 'Deep dive into advanced strategies and integrations. For experienced users.', ko: '고급 전략과 통합 기능을 깊이 있게 다룹니다. 숙련된 사용자를 위한 과정입니다.' },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('ko'); // Default to Korean as per user content context, or 'en' if preferred. Let's default to 'ko' for Korean users.

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ko' : 'en');
    };

    const t = (key: string) => {
        return translations[key]?.[language] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
