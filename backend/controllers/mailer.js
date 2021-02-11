import nodemailer from 'nodemailer';



const sendEmail = options =>{
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
              pass: "a40e328283d92e"

        
    })

    //email options

    //Actully send email
}