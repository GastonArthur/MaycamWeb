import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName }) => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f3f3f3' }}>
        <div style={{ maxWidth: '600px', margin: 'auto', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
            <h1 style={{ color: '#4b4b4b' }}>¡Hola, {firstName}!</h1>
            <p style={{ color: '#4b4b4b' }}>
                Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos pronto.
            </p>
            <p style={{ color: '#4b4b4b' }}>
                ¡Que tengas un gran día!
            </p>
        </div>
    </div>
);
