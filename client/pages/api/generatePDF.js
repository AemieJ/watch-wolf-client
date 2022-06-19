import { server } from "../../config/server.js"
import FormData from "form-data"
import fs from 'fs';


export default async (req, res) => {
    let body = JSON.parse(req.body)
    let base64 = body.base64;
    let formData = body.formData;

    let requestOptions = {
        method: 'POST',
        headers: {
            "Authorization": `Basic ${base64}`,
            "Content-Type": "multipart/form-data"
        },
        body: formData,
        redirect: 'follow'
      };

    console.log(requestOptions)

    try {
        let response = await fetch(`${server}/api/examine/pdf`, requestOptions); 
        let data = await response.json();
        console.log(data)
        res.status(200).json({ data: JSON.stringify(data), err: null });
    } catch (err) {
        res.status(500).json({ data: null, err: 'Generation unsuccessful'})
    }


}