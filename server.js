VideoStream = require('./');
stream = new VideoStream({
    name: 'stream1',
    streamUrl: process.env.STREAM_URL || 'rtsp://81.25.227.94:38554/0',
    wsPort: process.env.WS_PORT,
    ffmpegOptions: {
        "-c:a": "aac",
        "-hls_list_size": 65535,
        "-hls_time": 2,
    }
})