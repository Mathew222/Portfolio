import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface CertificateViewerProps {
    onBack: () => void;
    certificateUrl: string;
    backLabel?: string;
}

const CertificateViewer: React.FC<CertificateViewerProps> = ({ onBack, certificateUrl, backLabel = "Back to Certificates" }) => {
    const isPdf = certificateUrl.toLowerCase().endsWith('.pdf');
    const displayUrl = isPdf ? `${certificateUrl}#view=FitH` : certificateUrl;

    return (
        <div className="w-full flex flex-col gap-6 animate-fade-in-up">
            <div className="flex justify-between items-center">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                    {backLabel}
                </button>

                <a
                    href={certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-accent transition-colors"
                >
                    Open in New Tab <ExternalLink className="w-3 h-3" />
                </a>
            </div>

            <div className={`w-full ${isPdf ? 'h-[80vh] min-h-[500px]' : 'h-auto min-h-[200px]'} bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-800 shadow-sm relative flex justify-center items-center p-4`}>
                {isPdf ? (
                    <iframe
                        src={displayUrl}
                        className="w-full h-full border-0"
                        title="Certificate Preview"
                    />
                ) : (
                    <img
                        src={displayUrl}
                        alt="Certificate"
                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-sm"
                    />
                )}
            </div>
        </div>
    );
};

export default CertificateViewer;
