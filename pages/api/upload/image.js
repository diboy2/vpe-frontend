export const config = {
    api: {
        bodyParser: {
        sizeLimit: '4mb',
        },
    },
}

export default async(req, res) => {
    const url = "https://upload-image-ilpyl7uuva-ue.a.run.app";

    try {
        const response =  await fetch(url, {
            method: "POST",
            body:req.body
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

