import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Solo aceptar solicitudes POST
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configuración del transporte de correo
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Usa el servicio que necesites: Gmail, Outlook, etc.
      auth: {
        user: process.env.EMAIL_USER, // Tu correo electrónico
        pass: process.env.EMAIL_PASS, // Contraseña de aplicación o token
      },
    });

    // Opciones del correo
    const mailOptions = {
      from: email, // Correo del remitente (puede ser el que se recolectó en el formulario)
      to: process.env.EMAIL_USER, // Tu correo, el destinatario del mensaje
      subject: `Nuevo mensaje de ${name}`, // Asunto del correo
      text: `Has recibido un nuevo mensaje:\n\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    };

    try {
      // Enviar el correo
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Correo enviado con éxito.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al enviar el correo.' });
    }
  } else {
    // Si no es un método POST
    res.status(405).json({ message: 'Método no permitido.' });
  }
}
