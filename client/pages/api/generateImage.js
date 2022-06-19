import { server } from "../../config/server"
import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs';
import fsAxios from "fs"
import axios from "axios"
import FormData from "form-data"

export const config = {
    api: {
        bodyParser: false
    }
};

const asyncParse = async (req) => {
    const data = await new Promise((resolve, reject) => {
        const form = new IncomingForm();
        form.parse(req, function (err, fields, files) {
            if (err) reject({ err });
            resolve({ fields, files });
        });
    });
    return JSON.stringify(data);
}


export default async function handler(req, res) {
    console.log("Receiving");

    const response = await asyncParse(req);
    const data = JSON.parse(response)
    console.log(data)
    let f = data.files.file
    console.log(f)
    try {
        let url = `${server}/api/examine/image`
        console.log(f.filepath)
        let formData = new FormData();
        formData.append('file', fsAxios.createReadStream(f.filepath));
        
        let config = {
            method: 'post',
            url: url,
            headers: { 
              'Authorization': 'Basic ZGVsdGE6Y3lMdEVIVG53V3czV3ZwaEpWVlQ=', 
              ...formData.getHeaders()
            },
            data : formData
          };

        const responseFinal = await axios(config);
        console.log(responseFinal)
        const dataFinal = responseFinal.data;
        res.status(200).json({ data: JSON.stringify(dataFinal), err: null })
    } catch (err) {
        res.status(200).json({ data: null, err: "Generation unsuccessful" })
    }
}