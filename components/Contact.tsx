import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { RESUME_DATA } from '../constants';
import { SectionId } from '../types';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);
    const [state, handleSubmit] = useForm("xzznjrlo");

    if (state.succeeded) {
        return (
            <section id={SectionId.CONTACT} ref={ref as any} className="py-16 md:py-24 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
                <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-[400px] text-center">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 animate-scale-in">
                        <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-black dark:text-white mb-4">Message Sent!</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mb-8">
                        Thanks for reaching out, {RESUME_DATA.name.split(' ')[0]}. I'll get back to you as soon as possible.
                    </p>

                    <div className="flex gap-6 mt-8">
                        <a href={`https://${RESUME_DATA.socials.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">Instagram</a>
                        <a href={`https://${RESUME_DATA.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id={SectionId.CONTACT} ref={ref as any} className="py-16 md:py-24 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">

            {/* Floating Elements for Contact */}
            <div className="absolute top-20 right-20 animate-float-slow hidden md:block opacity-20 dark:opacity-10 z-0">
                <div className="backdrop-blur-md bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 p-4 rounded-full rotate-12">
                    <Mail className="w-8 h-8 text-black dark:text-white" />
                </div>
            </div>

            <div className="absolute bottom-20 left-10 animate-float-reverse hidden md:block opacity-20 dark:opacity-10 z-0">
                <div className="backdrop-blur-md bg-accent/5 border border-accent/10 p-6 rounded-2xl -rotate-6">
                    <Send className="w-8 h-8 text-accent" />
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Column: Big Text */}
                    <div className="flex flex-col justify-between">
                        <div>
                            {/* Heading Animation: Ink Fill */}
                            <h2 className={`text-[18vw] lg:text-[120px] leading-[0.8] font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-black dark:from-white dark:to-white bg-no-repeat uppercase mb-6 md:mb-8 text-outline dark:text-outline ${isVisible ? 'animate-ink-fill' : 'opacity-0'}`}>
                                Let's<br />Talk
                            </h2>
                            <p className={`text-base md:text-xl text-gray-600 dark:text-gray-300 font-sans max-w-md transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                Have a project in mind? Looking for a new team member?
                                Let's build something extraordinary together.
                            </p>
                        </div>

                        <div className={`mt-8 md:mt-12 space-y-2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Contact</p>
                            <a href={`mailto:${RESUME_DATA.email}`} className="text-lg md:text-3xl font-display font-bold text-black dark:text-white hover:text-accent transition-colors block underline decoration-2 decoration-gray-200 dark:decoration-zinc-800 hover:decoration-accent underline-offset-4 break-all md:break-normal">
                                {RESUME_DATA.email}
                            </a>
                            <a href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`} className="text-lg md:text-2xl font-display font-bold text-gray-500 dark:text-gray-400 hover:text-accent transition-colors block mt-2">
                                {RESUME_DATA.phone}
                            </a>
                            <p className="text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 mt-4">{RESUME_DATA.location}</p>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className={`bg-zinc-50 dark:bg-zinc-900 p-6 md:p-12 border border-black dark:border-white/20 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                        {/* Decorative element on form */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent opacity-20 blur-xl"></div>

                        <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                            <div className="space-y-1">
                                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-black dark:text-white">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-transparent border-b-2 border-gray-300 dark:border-zinc-700 py-3 text-black dark:text-white text-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors rounded-none placeholder-gray-400 font-display"
                                    placeholder="YOUR NAME"
                                    required
                                />
                                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-black dark:text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-transparent border-b-2 border-gray-300 dark:border-zinc-700 py-3 text-black dark:text-white text-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors rounded-none placeholder-gray-400 font-display"
                                    placeholder="YOUR@EMAIL.COM"
                                    required
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-black dark:text-white">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full bg-transparent border-b-2 border-gray-300 dark:border-zinc-700 py-3 text-black dark:text-white text-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors rounded-none placeholder-gray-400 font-display resize-none"
                                    placeholder="TELL ME ABOUT YOUR PROJECT"
                                    required
                                ></textarea>
                                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                            </div>

                            <button type="submit" disabled={state.submitting} className="w-full bg-black dark:bg-white text-white dark:text-black py-4 md:py-5 px-6 md:px-8 font-display font-bold text-lg md:text-xl uppercase tracking-wider hover:bg-accent dark:hover:bg-accent hover:text-white transition-colors flex items-center justify-between group disabled:opacity-50 disabled:cursor-not-allowed">
                                {state.submitting ? 'Sending...' : 'Send Message'}
                                <span className="w-2 h-2 bg-white dark:bg-black rounded-full group-hover:scale-150 transition-transform"></span>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 md:mt-24 pt-8 border-t border-gray-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center md:text-left gap-4">
                    <p>&copy; {new Date().getFullYear()} Mathew P Binu.</p>
                    <div className="flex gap-6">
                        <a href={`https://${RESUME_DATA.socials.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">Instagram</a>
                        <a href={`https://${RESUME_DATA.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;