export default async(req, res) => {
    const url = "https://upload-image-ilpyl7uuva-ue.a.run.app";
    const image_url = req.body.url;
    const body = new FormData();
    body.append("file", image_url);
    try {
        const response =  await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(body)
        });
        if (response.ok) {
            const text = await response.text()
            res.status(200).send(text)
        } else {
            throw new Error(response.statusText)
        }
    } catch(err) {
        console.error(err)
        res.status(500).send(err.message)
    }
}

