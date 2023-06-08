const cds = require('@sap/cds');

cds.on('bootstrap', async app => {
    app.use((req, res, next)=>{
        const {origin} = req.headers;
        res.set('access-control-allow-origin', origin);
        if(req.method === 'OPTIONS') return res.set('access-control-allow-methods', 'GET,HEAD,PUT,PATCH,POST,DELETE').set('access-control-allow-headers', 'Content-Type, Authorization, authority,  ').end()
        next();
    })
})