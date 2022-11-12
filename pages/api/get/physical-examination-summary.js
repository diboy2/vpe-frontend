export default async(req, res) => {
    const url = "https://get-text-recognition-summary-1-ilpyl7uuva-ue.a.run.app";
    try {
        const response =  await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(JSON.stringify(jsonResponse))
            res.status(200).json(jsonResponse)
        } else {
            throw new Error(response.statusText)
        }
    } catch(err) {
        console.error(err)
        res.status(500).send(err.message)
    }
}
