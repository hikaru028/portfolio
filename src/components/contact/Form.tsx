'use client';

import React, { FC, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { User, MailIcon, SendHorizontal, Pencil } from 'lucide-react';

const success = 'Message sent successfully!'; 

const Form: FC = () => {
    const [formData, setFormData] = useState<EmailProps>({ 
        sender: '', 
        email: '', 
        subject: '', 
        message: '' 
    });
    const [canReset, setCanReset] = useState(false);
    const [canSend, setCanSend] = useState(false);
    const [result, setResult] = useState<string | undefined>();
    const [sending, setSending] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    
        // Update the canReset and canSend states based on form data validity
        setCanReset(true);
        setCanSend(formData.sender !== '' && formData.email !== '' && formData.message !== '');
    };

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        try {
            const response = await fetch('/api/route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            setResult(result.message);
            setVisible(true);

            // If the message is success, reset the form
            if (result.message === success) {
                setTimeout(() => {
                    setFormData({ sender: '', email: '', subject: '', message: '' });
                    setCanReset(false);
                    setCanSend(false);
                }, 100);
            }
        } catch (error) {
            setResult('Error sending email');
            setVisible(true);
        } finally {
            setSending(false);
        }
    };

    const resetAll = () => {
        setFormData({ sender: '', email: '', subject: '', message: '' });
        setCanReset(false);
        setCanSend(false);
        setResult(undefined);
        setVisible(false);
    };

    // Automatically fade out the message after 5 seconds
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                setResult(undefined);
                setVisible(false);
            }, 5000);

            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [visible]);

    return (
        <form className='flex flex-col gap-y-4' onSubmit={sendEmail} action="/api/route" method='POST'>
            {/* Name */}
            <div className='relative flex items-center'>
                <Input onChange={handleChange} type='text' id='sender' placeholder='Name *' value={formData.sender} required/>
                <User className='absolute right-6' size={20} />
            </div>

            {/* Email */}
            <div className='relative flex items-center'>
                <Input onChange={handleChange} type='email' id='email' placeholder='Email *' value={formData.email} required/>
                <MailIcon className='absolute right-6' size={20} />
            </div>

            {/* Subject */}
            <div className='relative flex items-center'>
                <Input onChange={handleChange} type='text' id='subject' placeholder='Subject *' value={formData.subject} required/>
                <Pencil className='absolute right-6' size={20} />
            </div>

            {/* Message */}
            <div className='relative flex items-center'>
                <Textarea onChange={handleChange} id='message' placeholder='Please type your message... *' value={formData.message} required/>
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
                    className={`${canSend ? 'active shadow-lg hover:shadow-none' : '' } h-14 flex items-center gap-x-3 min-w-[150px]`}
                    disabled={!canSend}
                >
                    {sending ? 'Sending...' : 'Let\'s Talk '}
                    <SendHorizontal size={18} />
                </Button>
            </div>

            {/* Result Message */}
            {visible && result && 
                <p
                    className={`w-[350px] m-auto rounded-sm text-center py-4 px-6 transition-all ${result === success ? 'bg-[#51ed61]/80' : 'bg-[#ed5151]/80'}`}
                >
                    {result}
                </p>
            }
        </form>
    );
};

export default Form;

type EmailProps = {
    sender: string,
    email: string,
    subject?: string,
    message: string,
};
