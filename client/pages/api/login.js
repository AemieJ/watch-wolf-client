import { server } from "../../config/server.js"

export default async (req, res) => {
    let base64 = req.body;

    let requestOptions = {
        method: 'GET',
        headers: {
            "Authorization": `Basic ${base64}`, 
        },
        redirect: 'follow'
    };

    try {
        let response = await fetch(`${server}/api/auth/login`, requestOptions);
        res.status(200).json({ data: "Login successful", err: null });
    } catch (err) {
        res.status(200).json({ data: null, err: "Login unsuccessful" });
    }

}