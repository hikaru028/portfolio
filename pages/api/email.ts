import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '@/components/utils/MailUtils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { sender, email, subject, message } = req.body;

        const senderAddress = {
            name: sender || 'Hikari.',
            address: email || 'no-reply@hikari.com',
        };

        const receivers = [{
            name: process.env.OWNER || 'No name', 
            address: process.env.EMAIL || 'no-reply@example.com',
        }];

        try {
            const result = await sendEmail({
                sender: senderAddress,
                receivers: receivers,
                subject,
                message,
            });

            res.status(200).json({ message: 'Message sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
