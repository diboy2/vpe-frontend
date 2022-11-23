export default async function clearTextRecognitionTable(req, res) {
    const url = "https://clear-text-recognition-tables-ilpyl7uuva-ue.a.run.app";

    try {
        const response =  await fetch(url, {
            method: "POST"
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

