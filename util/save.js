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

export const uploadFile = async (url, file) => {
    const body = new FormData();
    body.append("file", file);
    const response = await fetch(url,{
        method: "POST",
        body
    });
    if(response.ok) {
       return await response.text();
    } 
    return "";
};

export default {
    addText,
    uploadFile
}