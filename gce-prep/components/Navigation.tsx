'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, GraduationCap, Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
    const pathname = usePathname();
    const { language, toggleLanguage } = useLanguage();

    return (
        <nav className="sticky top-0 z-50 py-4 px-6 mb-8 bg-[#f0f4f8]/80 backdrop-blur-md">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors">
                    <div className="p-2 neumorph-btn rounded-full bg-blue-500 text-white border-0">
                        <GraduationCap size={20} />
                    </div>
                    <span className="font-bold text-lg hidden sm:block">GCE Prep</span>
                </Link>

                <div className="flex gap-4 items-center">
                    <button
                        onClick={toggleLanguage}
                        className="px-3 py-2 rounded-xl flex items-center gap-2 text-slate-500 hover:text-blue-600 neumorph-btn transition-all"
                    >
                        <Languages size={18} />
                        <span className="font-bold text-sm">{language === 'en' ? 'KO' : 'EN'}</span>
                    </button>
                    <NavLink href="/lv1" current={pathname} label="Level 1" icon={<BookOpen size={16} />} />
                    <NavLink href="/lv2" current={pathname} label="Level 2" icon={<BookOpen size={16} />} />
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, current, label, icon }: { href: string, current: string, label: string, icon: React.ReactNode }) {
    const isActive = current === href;

    return (
        <Link href={href}>
            <div className={`relative px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${isActive ? 'text-blue-600 font-bold neumorph-inset' : 'text-slate-500 hover:text-slate-700 neumorph-btn'}`}>
                {icon}
                <span className="hidden sm:inline">{label}</span>
            </div>
        </Link>
    );
}
