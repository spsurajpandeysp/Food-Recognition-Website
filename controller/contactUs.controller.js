const { response } = require('express');
const {ContactModel} = require('../model/contactUs.model')
const mongoose = require('mongoose');
const nodemailer = require('nodemailer')
const contactUs =async (req,res)=> {
    try{
        const contactUsData = req.body;
        const data = await new ContactModel(req.body)
        await data.save();
        let testAccount = await nodemailer.createTestAccount();
        const transporter = nodemailer.createTransport({
            service:"gmail",
            secure:true,
            port: 465,
            auth: {
                user: 'dvlprservice@gmail.com',
                pass: 'cgvd shiv mise ahol '
            }
        });

        let info = await transporter.sendMail({
            from:"dvlprservice@gmail.com",
            to:contactUsData.email,
            subject:"Your Response is Successfully Submitted ",
            text:req.body.message,
            html:"Thankyou for contacting us , we will contact you soon"
        })

        res.status(200).json(data)
    }
    catch(err){
        res.status(400).send("Error in Contact Us")
    }
}


module.exports={contactUs}