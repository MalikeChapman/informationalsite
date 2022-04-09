const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) =>
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(req.url, req.method);
    if(req.url === "/")
    {
        fs.readFile("../html/index.html", (err, data) =>
        {
            if(err)
            {
                return;
            }
            res.write(data);
            return res.end()
        })
    }
    else if(req.url === "/about")
    {
        fs.readFile("../html/about.html", (err, data) =>
        {
            if(err)
            {
                return;
            }
            res.write(data);
            return res.end()
        })
    }
    else if(req.url === "/contact-me")
    {
        fs.readFile("../html/contact-me.html", (err, data) =>
        {
            if(err)
            {
                return;
            }
            res.write(data);
            return res.end()
        })
    }
    else
    {
        fs.readFile("../html/404.html", (err, data) =>
        {
            if(err)
            {
                return;
            }
            res.write(data);
            return res.end()
        })
    }

}).listen(port, () =>
{
    console.log("Listening on port 3000");
})