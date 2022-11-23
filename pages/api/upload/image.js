import httpProxyMiddleware from "next-http-proxy-middleware";

export const config = {
    api: {
        bodyParser: false,
    },
}

export default async function uploadImage(req, res) {
    httpProxyMiddleware(req, res, {
        target: 'http://172.18.5.119:8080'
    })
}

