const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        fs.readFile(`${__dirname}/index.html`, "utf8", (err, html) => {
        if (err) {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end("Página não encontrada");
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(html);
            response.end();
        }
        });
    } else if (request.url === "/mateus") {
        fs.readFile(`${__dirname}/mateus.html`, "utf8", (err, html) => {
        if (err) {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end("Página não encontrada");
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(html);
            response.end();
        }
        });
    } else if (request.url === "/lucas") {
        fs.readFile(`${__dirname}/lucas.html`, "utf8", (err, html) => {
        if (err) {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end("Página não encontrada");
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(html);
            response.end();
        }
        });
    } else if (request.url === "/joao") {
        fs.readFile(`${__dirname}/joao.html`, "utf8", (err, html) => {
        if (err) {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end("Página não encontrada");
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(html);
            response.end();
        }
        });
    } else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("Página não encontrada");
    }
});

server.listen(3000, () => {
  console.log("Executando site pessoal");
});
