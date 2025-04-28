import { EmailTemplate } from '../../components/email-template';
import { EmailTemplateForCompany } from '../../components/email-template-for-company';
import { Resend } from 'resend';
import * as React from 'react';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // 1. Enviar email al usuario para confirmación
        await resend.emails.send({
            from: 'onboarding@resend.dev',  // Dirección que tienes autorizada en Resend
            to: email,  // Al email del usuario
            subject: 'Confirmación de recepción de tu mensaje',
            react: EmailTemplate({
                firstName: name,
                email: ''
            }) as React.ReactElement,
        });

        // 2. Enviar email a la empresa con todos los datos
        await resend.emails.send({
            from: 'onboarding@resend.dev',  // Dirección que tienes autorizada en Resend
            to: 'marketing@maycamevolve.com',     // Dirección de tu empresa
            subject: subject || `Nuevo mensaje de ${name}`,
            react: EmailTemplateForCompany({ name, email, message, subject }) as React.ReactElement,
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message });
    }
}
