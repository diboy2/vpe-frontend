import httpProxyMiddleware from "next-http-proxy-middleware";

export const config = {
    api: {
        bodyParser: false,
    },
}

export default function uploadImage(req, res) {
    httpProxyMiddleware(req, res, {
        target: 'https://upload-image-ilpyl7uuva-ue.a.run.app'
    })
}

