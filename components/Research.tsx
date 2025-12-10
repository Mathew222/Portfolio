import React from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';
import { RESEARCH_DATA } from '../constants';
import { SectionId } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import CertificateViewer from './CertificateViewer';
import { useState } from 'react';

const Research: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);
    const [selectedPaper, setSelectedPaper] = useState<string | null>(null);

    const handleBack = () => {
        setSelectedPaper(null);
    };

    return (
        <section id={SectionId.RESEARCH} ref={ref as any} className="py-16 md:py-24 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
            {/* Background Decorative Elements */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-gray-100 dark:bg-zinc-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-20 animate-blob"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-gray-200 dark:bg-zinc-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-20 animate-blob animation-delay-2000"></div>

            <div className="absolute top-1/4 right-20 animate-float-slow hidden lg:block opacity-10 dark:opacity-5">
                <FileText className="w-24 h-24 text-black dark:text-white" />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="mb-12 md:mb-16 perspective-1000">
                    <span className={`text-accent font-bold tracking-widest uppercase text-sm mb-3 block transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Publications</span>

                    {/* Heading Animation: 3D Flip Reveal */}
                    <h2 className={`text-4xl md:text-5xl font-display font-bold text-black dark:text-white uppercase mb-4 origin-bottom transform transition-all ${isVisible ? 'animate-flip-up' : 'opacity-0'}`}>
                        Research
                    </h2>

                    <div className={`h-1 w-20 bg-accent transition-all duration-1000 ease-out delay-300 ${isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
                </div>

                {selectedPaper ? (
                    <CertificateViewer
                        certificateUrl={selectedPaper}
                        onBack={handleBack}
                        backLabel="Back to Research"
                    />
                ) : (
                    <div className="grid grid-cols-1 gap-6 md:gap-8">
                        {RESEARCH_DATA.map((paper, index) => (
                            <div
                                key={paper.id}
                                className={`group relative bg-white dark:bg-zinc-900 border border-black/10 dark:border-zinc-800 rounded-2xl p-6 md:p-12 hover:shadow-2xl transition-all duration-700 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                                style={{ transitionDelay: `${index * 200 + 200}ms` }}
                            >
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-500"></div>
                                <div className="absolute top-0 right-0 w-2 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between">
                                    <div className="flex-1">
                                        <div className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-widest mb-4 rounded-sm">
                                            Paper Presented
                                        </div>
                                        <h3 className="text-2xl md:text-5xl font-display font-bold text-black dark:text-white uppercase leading-tight mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                                            {paper.title}
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4 md:mb-6 text-gray-500 dark:text-gray-400 font-medium md:border-l-2 md:border-accent md:pl-4">
                                            <span className="uppercase tracking-wide text-sm">{paper.year}</span>
                                            <span className="hidden md:inline">•</span>
                                            <span className="text-sm italic">{paper.conference}</span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
                                            {paper.description}
                                        </p>
                                    </div>

                                    <div className="flex-shrink-0 mt-2 md:mt-0 w-full md:w-auto">
                                        <div className="flex flex-col gap-3 w-full md:w-auto">
                                            <a
                                                href={paper.link || '#'}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (paper.link) {
                                                        setSelectedPaper(paper.link);
                                                    }
                                                }}
                                                className="flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-black border-2 border-black dark:border-white text-black dark:text-white font-bold uppercase tracking-wider hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] w-full md:w-auto"
                                            >
                                                Read Paper <ArrowUpRight className="w-5 h-5" />
                                            </a>
                                            {paper.certificateLink && (
                                                <a
                                                    href={paper.certificateLink}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setSelectedPaper(paper.certificateLink!);
                                                    }}
                                                    className="flex items-center justify-center gap-3 px-6 py-3 bg-white dark:bg-black border-2 border-black dark:border-white text-black dark:text-white font-bold uppercase tracking-wider hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] w-full md:w-auto"
                                                >
                                                    Certificate <ArrowUpRight className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section >
    );
};

export default Research;