const save = async (url, body) => {
    try {
        const response =  await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body
        });
        if (response.ok) {
            return response.text()
        } else {
            throw new Error(response.statusText)
        }
    } catch(err) {
        console.error(err)
        return err.message
    }
};

const saveText = async (text, url) => {
    const body = { text };
    const responseText = await save(url,body);
    console.info(responseText);
    return responseText;
}

export const savePatientConcerns = async (text) => {
    return await saveText(text, "https://upload-patient-concerns-ilpyl7uuva-uc.a.run.app")
}


export default async(req, res) => {
    try {
        const response =  await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body
        });
        if (response.ok) {
            const text = await response.text()
        } else {
            throw new Error(response.statusText)
        }
    } catch(err) {
        console.error(err)
        return err.message
    }
    res.status(200).json(users)
}
