VideoStream = require('./');
stream = new VideoStream({
    name: 'stream1',
    streamUrl: process.env.STREAM_URL || 'rtsp://81.25.227.94:38554/0',
    wsPort: 8081,
    ffmpegOptions: {
        "-c:a": "aac",
        "-hls_list_size": 65535,
        "-hls_time": 2,
    }
})

stream2 = new VideoStream({
    name: 'stream2',
    streamUrl: 'rtsp://81.25.227.94:28554/0',
    wsPort: 8082,
    ffmpegOptions: {
        "-c:a": "aac",
        "-hls_list_size": 65535,
        "-hls_time": 2,
    }
})