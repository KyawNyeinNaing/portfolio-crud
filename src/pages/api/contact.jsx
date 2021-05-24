import nodemailer from 'nodemailer'

export default async (req, res) => {
  const { name, email, subject, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'noreply.tp.smtp@gmail.com',
      pass: 'Kyaw@noreply2021$'
    }
  })

  try {
    const result = await transporter.sendMail({
      from: email,
      to: 'thetpai.tp27@gmail.com',
      subject: `Contact form from ${name}`,
      html: `
        <p>You have a new contact form submission</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><stong>Email:</stong>${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })

    console.log(`Message sent`, result.messageId)
  } catch (error) {
    console.log(error)
  }

  res.status(200).json(req.body)
}