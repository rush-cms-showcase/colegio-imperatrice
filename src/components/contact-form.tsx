import React, { useState } from 'react';
import { rush } from '../lib/rush';

interface ContactFormProps {
    formId: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ formId }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            await rush.forms.submit(formId, data);
            setIsSuccess(true);
            e.currentTarget.reset();
        } catch (err) {
            setError('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-green-50 p-6 rounded-lg text-green-800 text-center">
                <h3 className="text-xl font-semibold mb-2">Mensagem enviada com sucesso!</h3>
                <p>Obrigado pelo seu contato. Retornaremos em breve.</p>
                <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-sm font-medium underline"
                >
                    Enviar outra mensagem
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <div className="bg-red-50 p-4 rounded text-red-700 text-sm">
                    {error}
                </div>
            )}
            
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">None</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009640] focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome completo"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009640] focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensagem</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009640] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Como podemos ajudar?"
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#009640] text-white font-medium py-3 rounded-lg hover:bg-[#007a33] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
        </form>
    );
};
