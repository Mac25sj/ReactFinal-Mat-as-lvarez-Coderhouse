import { setGlobalOptions } from "firebase-functions";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import admin from "firebase-admin";
import nodemailer from "nodemailer";

admin.initializeApp();
setGlobalOptions({ maxInstances: 10 });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tucorreo@gmail.com",
    pass: "tu_app_password"
  }
});

export const sendPurchaseEmail = onDocumentCreated("compras/{compraId}", async (event) => {
  const compra = event.data.data();

  const mailOptions = {
    from: "GuitarCoder 🎸 <tucorreo@gmail.com>",
    to: "destinatario@ejemplo.com",
    subject: `Nueva compra de ${compra.nombre}`,
    text: `Se ha realizado una compra por ${compra.total} USD.\nProducto: ${compra.producto}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Correo enviado con éxito");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
});