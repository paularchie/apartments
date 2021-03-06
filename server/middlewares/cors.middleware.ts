export function cors(req, res, next) {
    // const allowedOrigins = ['http://localhost:4000'];
    // const origin = req.headers.origin;

    // if (allowedOrigins.indexOf(origin) > -1) {
    //     res.setHeader('Access-Control-Allow-Origin', origin);
    // }

    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.append('Access-Control-Allow-Headers', ['Content-Type', 'x-xsrf-token']);

    next();
}
