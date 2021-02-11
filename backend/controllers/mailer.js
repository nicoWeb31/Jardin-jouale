import nodemailer from 'nodemailer';

const sendEmail = async(options) => {
    // transporter
    const transporter = nodemailer.createTransport({
        // server: 'Gmail',
        // auth: {
        //     user: process.env.EMAIL_USERNAME,
        //     pass: process.env.EMAIL_PASSWORD
        // }
        //Activate  in gmail "less secure app"

        host: process.env.HOST_MAIL,
        port: process.env.PORT_MAIL,
        auth: {
            user: process.env.USER_MAIL,
            pass: process.env.PASS_MAIL,
        },
    });

    //email options
    const mailOptions = {
        from :"Nico <test@free.fr>",
        to : options.email,
        subject : options.subject,
        text: options.message,
        // html: ,
    }

    //Actully send email
    await transporter.sendMail(mailOptions)
};

export default sendEmail;