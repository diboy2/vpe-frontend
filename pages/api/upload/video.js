import httpProxyMiddleware from "next-http-proxy-middleware";

export const config = {
    api: {
        bodyParser: false,
    },
}

export default function uploadVideo(req, res) {
    httpProxyMiddleware(req, res, {
        target: 'https://upload-video-ilpyl7uuva-uc.a.run.app'
    })
}

