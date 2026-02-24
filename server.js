import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(express.json());

// Configure le transporteur d'email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Route pour envoyer un email
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
  }

  try {
    // Email envoyé à l'administrateur
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'karibia.pro@gmail.com',
      subject: `Nouvelle demande de contact de ${name}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Email de confirmation au client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Nous avons reçu votre demande - KARIB\'IA',
      html: `
        <h2>Merci de nous avoir contacté !</h2>
        <p>Nous avons bien reçu votre demande et nous vous recontacterons dans les 24 heures.</p>
        <p>Cordialement,<br>L'équipe KARIB'IA</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi d\'email:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});
