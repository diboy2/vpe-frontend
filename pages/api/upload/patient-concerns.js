export default async function uploadPatientConcerns(req, res) {
    const url = "https://upload-patient-concerns-ilpyl7uuva-uc.a.run.app";
    try {
        const response =  await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(req.body)
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