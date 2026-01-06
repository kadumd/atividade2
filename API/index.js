const http = require("http")
const fs = require("fs")
const path = require("path")
const portaDeEntrada = process.env.PORT || 3000;

const servidor = http.createServer((pedido, resposta) => {
    console.log(pedido.url)
    switch (pedido.url) {
        case '/':
            resposta.writeHead(200, { "Content-Type": "text/html" })
            resposta.end(fs.readFileSync("./index.html"))
            break

        case '/main.css':
            resposta.writeHead(200, { "Content-Type": "text/css" })
            resposta.end(fs.readFileSync("./main.css"))
            break

        case '/responsivo.css':
            resposta.writeHead(200, { "Content-Type": "text/css" })
            resposta.end(fs.readFileSync("./responsivo.css"))
            break

        case '/main.js':
            resposta.writeHead(200, { "Content-Type": "text/javascript" })
            resposta.end(fs.readFileSync("./main.js"))
            break

        // assets

        case '/img/Arabesque.webp':
            resposta.writeHead(200, { "Content-Type": "image/webp" })
            resposta.end(fs.readFileSync("./img/Arabesque.webp"))
            break

        case '/img/Basil.webp':
            resposta.writeHead(200, { "Content-Type": "image/webp" })
            resposta.end(fs.readFileSync("./img/Basil.webp"))
            break

        case '/img/Gizeh.webp':
            resposta.writeHead(200, { "Content-Type": "image/webp" })
            resposta.end(fs.readFileSync("./img/Gizeh.webp"))
            break

        case '/img/1.png':
            resposta.writeHead(200, { "Content-Type": "image/png" })
            resposta.end(fs.readFileSync("./img/1.png"))
            break

        case '/img/2.png':
            resposta.writeHead(200, { "Content-Type": "image/png" })
            resposta.end(fs.readFileSync("./img/2.png"))
            break

        case '/img/3.png':
            resposta.writeHead(200, { "Content-Type": "image/png" })
            resposta.end(fs.readFileSync("./img/3.png"))
            break

        case '/img/4.png':
            resposta.writeHead(200, { "Content-Type": "image/png" })
            resposta.end(fs.readFileSync("./img/4.png"))
            break

        case '/img/5.png':
            resposta.writeHead(200, { "Content-Type": "image/png" })
            resposta.end(fs.readFileSync("./img/5.png"))
            break

        case '/img/6.png':
            resposta.writeHead(200, { "Content-Type": "image/png" })
            resposta.end(fs.readFileSync("./img/6.png"))
            break

        case '/img/7.png':
            resposta.writeHead(200, { "Content-Type": "image/png" })
            resposta.end(fs.readFileSync("./img/7.png"))
            break

        case '/img/seta.png':
            resposta.writeHead(200, { "Content-Type": "image/png" })
            resposta.end(fs.readFileSync("./img/seta.png"))
            break

        case '/img/estrela.png':
            resposta.writeHead(200, { "Content-Type": "image/png" })
            resposta.end(fs.readFileSync("./img/seta.png"))
            break
    }
})

servidor.listen(portaDeEntrada, "0.0.0.0")