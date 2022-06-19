import { server } from "../../config/server.js"

export default async (req, res) => {
    let body = JSON.parse(req.body);
    let base64 = body.base64;
    let text = body.text;

    let requestOptions = {
        method: 'POST',
        headers: {
            "Authorization": `Basic ${base64}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "text": text
        }),
        redirect: 'follow'
    };

    try {
        let response = await fetch(`${server}/api/examine/text`, requestOptions); 
        let data = await response.json();
        res.status(200).json({ data: JSON.stringify(data), err: null });
    } catch (err) {
        res.status(500).json({ data: null, err: 'Generation unsuccessful'})
    }


}