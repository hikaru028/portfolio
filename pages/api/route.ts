import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '@/components/utils/MailUtils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { sender, email, subject, message } = req.body;

        const senderAddress = {
            name: sender,
            address: email,
        };

        const receiver = [
            {
                name: process.env.OWNER || 'Owner Name', // Default value if undefined
                address: process.env.EMAIL || 'owner@example.com', // Default value if undefined
            }
        ];

        try {
            const result = await sendEmail({
                sender: senderAddress,
                receiver: receiver,
                subject: subject || 'No Subject',
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
