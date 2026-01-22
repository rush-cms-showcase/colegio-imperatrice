import React, { useState } from 'react';
import { rush } from '../lib/rush';

interface FormField {
    type: string;
    data: {
        config: {
            name: string;
            label: string;
            type?: string;
            placeholder?: string;
            default_value?: string;
            hint?: string;
        };
        validation?: {
            is_required?: boolean;
            minlength?: number;
            maxlength?: number;
        };
    };
}

interface FormSchema {
    id: number;
    name: string;
    key: string;
    description?: string;
    fields: FormField[];
}

interface DynamicFormProps {
    form: FormSchema;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ form }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data: Record<string, any> = {};
        
        form.fields.forEach(field => {
            const name = field.data.config.name;
            data[name] = formData.get(name);
        });

        try {
            // Using the key from the form schema to submit
            await rush.forms.submit(form.key, data);
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
            <div className="bg-green-50 p-6 rounded-lg text-green-800 text-center animate-fade-in">
                <h3 className="text-xl font-semibold mb-2">Mensagem enviada com sucesso!</h3>
                <p>Obrigado pelo contato. Retornaremos em breve.</p>
                <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-sm font-medium underline text-green-700 hover:text-green-900"
                >
                    Enviar outra mensagem
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <div className="bg-red-50 p-4 rounded-lg text-red-700 text-sm border border-red-100">
                    {error}
                </div>
            )}
            
            {form.fields.map((field, index) => {
                const { config, validation } = field.data;
                const isRequired = validation?.is_required;
                const fieldType = field.type === 'textarea' ? 'textarea' : (config.type || 'text');

                return (
                    <div key={index} className="space-y-2">
                        <label htmlFor={config.name} className="block text-sm font-medium text-gray-700">
                            {config.label}
                            {isRequired && <span className="text-red-500 ml-1">*</span>}
                        </label>
                        
                        {fieldType === 'textarea' ? (
                            <textarea
                                id={config.name}
                                name={config.name}
                                required={isRequired}
                                placeholder={config.placeholder}
                                rows={5}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009640] focus:border-transparent outline-none transition-all resize-none text-gray-800 placeholder-gray-400 bg-white"
                            />
                        ) : (
                            <input
                                type={fieldType === 'telephone' ? 'tel' : fieldType}
                                id={config.name}
                                name={config.name}
                                required={isRequired}
                                placeholder={config.placeholder}
                                defaultValue={config.default_value || ''}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#009640] focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400 bg-white"
                            />
                        )}
                        {config.hint && <p className="text-xs text-gray-500 mt-1">{config.hint}</p>}
                    </div>
                );
            })}

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#009640] text-white font-bold py-3.5 rounded-lg hover:bg-[#007a33] transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                    </span>
                ) : (
                    'Enviar Mensagem'
                )}
            </button>
        </form>
    );
};
