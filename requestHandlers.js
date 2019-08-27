var qs = require("querystring");

function senha(request, response) {
    if (request.method == "GET") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<form method=post>");
        response.write("<input type=text name=password /> \n");
        response.write("<input type=submit />");
        response.write("</form>");
        response.end();
    } else {
        body = '';
        request.on('data', function (data) {
            body += data;
        });
        request.on('end', function () {
            var dados = qs.parse(body);            
            response.writeHead(200, { "Content-Type": "text/html" });            
            if (dados.password != '54321') {
                response.write("Não Autorizado!");
            }
            else {
                response.write("Acertou!");
                response.end();
            }
        });
    }
}

exports.senha = senha;

