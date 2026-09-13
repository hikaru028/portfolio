'use client';

import React, { FC, useState, useEffect, useRef, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, MailIcon, SendHorizontal, Pencil } from 'lucide-react';

const success = 'Message sent successfully!';

const contactData = [
    { field: 'sender', placeholder: 'Full name', icon: User, type: 'text' },
    { field: 'email', placeholder: 'Email', icon: MailIcon, type: 'email' },
    { field: 'subject', placeholder: 'Subject', icon: Pencil, type: 'text' }
];

const Form: FC = () => {
    const [formData, setFormData] = useState<ContactProps>({
        sender: '',
        email: '',
        subject: '',
        message: ''
    });
    const [result, setResult] = useState<string | undefined>();
    const [sending, setSending] = useState(false);
    const [visible, setVisible] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
    const canReset = Object.values(formData).some(value => value.trim() !== '');
    const canSend = Object.values(formData).every(value => value.trim() !== '');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleFocus = (field: string) => {
        setFocusedField(field);
    };

    const handleBlur = (field: string) => {
        if (!formData[field as keyof ContactProps]) {
            setFocusedField(null);
        }
    };

    const handleLabelClick = (field: string) => {
        if (inputRefs.current[field]) {
            inputRefs.current[field]?.focus();
        }
        handleFocus(field);
    };

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (sending || !canSend) return;
        setSending(true);

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Unable to send your message. Please email me directly.');
            }

            setResult(data.message);
            setVisible(true);

            // If the message is success, reset the form
            if (data.message === success) {
                setTimeout(() => {
                    setFormData({ sender: '', email: '', subject: '', message: '' });
                    setFocusedField('');
                }, 100);
            }
        } catch (error) {
            setResult(error instanceof Error ? error.message : 'Unable to send your message. Please email me directly.');
            setVisible(true);
        } finally {
            setSending(false);
        }
    };

    const resetAll = () => {
        setFormData({ sender: '', email: '', subject: '', message: '' });
        setResult(undefined);
        setVisible(false);
        setFocusedField('')
    };

    // Automatically fade out the message after 5 seconds
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                setResult(undefined);
                setVisible(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <form className='flex flex-col gap-y-4' onSubmit={sendEmail} action="/api/email" method='POST'>
            {contactData.map(({ field, placeholder, type }, index) => (
                <div key={index} className='relative flex items-center'>
                    <p
                        className={`absolute transition-all duration-200 ${focusedField === field || formData[field as keyof ContactProps]
                            ? '-top-3 left-6 text-sm text-primary px-2 bg-background'
                            : 'top-4 left-8 text-muted-foreground px-2 bg-transparent'
                            }`}
                        onClick={() => handleLabelClick(field)}
                    >
                        {placeholder} *
                    </p>
                    <Input
                        ref={(element) => { inputRefs.current[field] = element }}
                        onChange={handleChange}
                        onFocus={() => handleFocus(field)}
                        onBlur={() => handleBlur(field)}
                        type={type}
                        id={field}
                        value={formData[field as keyof ContactProps]}
                        required
                        className={`focus:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_2px_#FACC15,0_0_5px_#FACC15,0_0_8px_#FACC15]  ${formData[field as keyof ContactProps] !== '' && 'border border-primary dark:border dark:border-primary'}`}
                    />
                    {/* <Icon className={`absolute right-6 ${focusedField === field || formData[field as keyof ContactProps] ? 'text-primary' : 'text-muted-foreground'}`} size={20} /> */}
                </div>
            ))}

            {/* Message */}
            <div className='relative flex items-center'>
                <Textarea
                    onChange={handleChange}
                    id='message'
                    placeholder='Please type your message... *'
                    value={formData.message}
                    className={`focus:shadow-[0_0_1px_#fff,inset_0_0_1px_#fff,0_0_2px_#FACC15,0_0_5px_#FACC15,0_0_8px_#FACC15]  ${formData.message && 'border border-primary dark:border dark:border-primary'}`}
                    required
                />
            </div>

            {/* Buttons */}
            <div className='w-full flex justify-end gap-x-4 '>
                {/* Reset button */}
                <Button
                    type='button'
                    onClick={resetAll}
                    className={`${canReset ? 'active shadow-lg hover:shadow-none bg-gray-300 hover:bg-gray-300/80' : 'bg-gray-300/80 shadow-none hover:bg-bg-gray-300/80'} h-14 min-w-[150px]`}
                    disabled={!canReset}
                >
                    Reset
                </Button>

                {/* Send button */}
                <Button
                    type='submit'
                    className={`${canSend ? 'active shadow-lg hover:shadow-none' : ''} h-14 flex items-center gap-x-3 min-w-[150px]`}
                    disabled={!canSend}
                >
                    {sending ? 'Sending...' : 'Let\'s Talk '}
                    <SendHorizontal size={18} />
                </Button>
            </div>

            {/* Result Message */}
            {visible && result &&
                <p
                    className={`w-[350px] m-auto rounded-sm text-center py-4 px-6 transition-all ${result === success ? 'bg-[#8cff98]' : 'bg-[#fa5050]'}`}
                >
                    {result}
                </p>
            }
        </form>
    );
};

export default Form;

type ContactProps = {
    sender: string,
    email: string,
    subject: string,
    message: string,
};
