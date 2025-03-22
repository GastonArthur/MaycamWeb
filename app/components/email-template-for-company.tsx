import * as React from 'react';

interface EmailTemplateForCompanyProps {
    name: string;
    email: string;
    message: string;
    subject: string;
}

export const EmailTemplateForCompany: React.FC<Readonly<EmailTemplateForCompanyProps>> = ({ name, email, message, subject }) => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f3f3f3' }}>
        <div style={{ maxWidth: '600px', margin: 'auto', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
            <h1 style={{ color: '#4b4b4b' }}>Nuevo mensaje recibido de {name} en MAYCAM EVOLVE WEB</h1>
            <p style={{ color: '#4b4b4b' }}>
                <strong>Nombre:</strong> {name}
            </p>
            <p style={{ color: '#4b4b4b' }}>
                <strong>Email:</strong> {email}
            </p>
            <p style={{ color: '#4b4b4b' }}>
                <strong>Asunto:</strong> {subject}
            </p>
            <p style={{ color: '#4b4b4b' }}>
                <strong>Mensaje:</strong><br /> {message}
            </p>
        </div>
    </div>
);
