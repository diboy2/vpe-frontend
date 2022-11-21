export const addText = async (url, text) => {
    const response = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({ text })
    });
    if(response.ok) {
        return await response.text()
    }
    return ""
};

export default {
    addText
}