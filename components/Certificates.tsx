import React, { useState } from 'react';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { CERTIFICATES_DATA } from '../constants';
import { SectionId } from '../types';
import CertificateViewer from './CertificateViewer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Certificates: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);
    const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

    const handleBack = () => {
        setSelectedCertificate(null);
    };

    return (
        <section id={SectionId.CERTIFICATES} ref={ref as any} className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">

            {/* Background Patterns */}
            <div className="absolute inset-0 z-0 opacity-30 dark:opacity-10" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="absolute top-20 right-1/4 animate-float-slow hidden md:block opacity-20 dark:opacity-10">
                <Award className="w-16 h-16 text-black dark:text-white" />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
                    <div>
                        <span className={`text-accent font-bold tracking-widest uppercase text-sm mb-3 block transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Achievements</span>

                        {/* Heading Animation: Diagonal Wipe */}
                        <h2 className={`text-3xl md:text-5xl font-display font-bold text-black dark:text-white uppercase ${isVisible ? 'animate-wipe-reveal' : 'opacity-0'}`}>
                            Certifications
                        </h2>
                    </div>
                    {!selectedCertificate && (
                        <div className={`hidden md:block transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Verified Credentials</span>
                            </div>
                        </div>
                    )}
                </div>

                {selectedCertificate ? (
                    <CertificateViewer
                        certificateUrl={selectedCertificate}
                        onBack={handleBack}
                    />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {CERTIFICATES_DATA.map((cert, index) => (
                            <a
                                key={cert.id}
                                href={cert.link || '#'}
                                target={cert.link ? "_blank" : undefined}
                                rel={cert.link ? "noreferrer" : undefined}
                                className={`group relative bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 rounded-xl hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between h-full cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${!cert.link ? 'cursor-default' : ''}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (cert.link) {
                                        setSelectedCertificate(cert.link);
                                    }
                                }}
                            >

                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-bold bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded border border-gray-200 dark:border-zinc-700">
                                            {cert.year}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-display font-bold text-black dark:text-white leading-tight mb-2 group-hover:text-accent transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                        {cert.issuer}
                                    </p>
                                </div>

                                <div className="mt-8 pt-4 border-t border-gray-100 dark:border-zinc-800 flex justify-between items-center">
                                    <div className="flex items-center gap-1.5 text-green-600 dark:text-green-500 text-xs font-bold uppercase tracking-wider">
                                        <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                                    </div>
                                    {cert.link && (
                                        <div className="text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </div>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certificates;