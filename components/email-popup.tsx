import { useState } from 'react';
import Logo from './ui/logo';

interface EmailPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (email: string) => void;
}

export default function EmailPopup({ isOpen, onClose, onSubmit }: EmailPopupProps) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.includes('@')) {
            setError('Please enter a valid email address');
            return;
        }
        onSubmit(email);
        setEmail('');
        setError('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-md bg-black/60 flex items-center justify-center z-50 animate-fadeIn p-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all animate-slideUp relative">
                <div className="text-center mb-8">
                    <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4 shadow-inner">
                        <Logo trace={true} className="w-12 h-12 text-blue-500" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Download PrompX</h2>
                    <p className="text-gray-600">Enter your email to start the download:</p>
                </div>

                <p className="mb-8 text-sm text-gray-500 italic text-center px-4">
                    We value authentic communication - all emails are personally written by our team, never automated or AI-generated.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all outline-none bg-white shadow-sm"
                            placeholder="your@email.com"
                            required
                        />
                        {error && (
                            <p className="absolute -bottom-6 left-0 text-red-500 text-sm transition-all">
                                {error}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-end gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 transition-all font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 font-medium"
                        >
                            Download
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
