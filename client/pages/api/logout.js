import { server } from "../../config/server.js"

export default async (req, res) => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    try {
        let response = await fetch(`${server}/api/auth/logout`, requestOptions);
        res.status(200).json({ data: "Logout successful", err: null });
    } catch (err) {
        res.status(200).json({ data: null, err: "Logout unsuccessful" });
    }

}