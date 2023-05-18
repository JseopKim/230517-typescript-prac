"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var formTag = "\n<form method=\"POST\" action=\"/hello\"> \n  <input type=\"text\" name=\"id\">\n  <input type=\"submit\"> \n</form>\n";
function hi(sumbitString) {
    return "<h1>".concat(sumbitString, "</h1>");
}
function htmlBox(data) {
    return "\n  <!DOCTYPE html>\n  <html lang=\"en\">\n  <head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n  </head>\n  <body>\n  ".concat(data, "\n  </body>\n  </html>\n  ");
}
var app = (0, express_1.default)();
var port = 3333;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.send(htmlBox(formTag));
});
app.post('/hello', function (req, res) {
    var submitString = req.body.id;
    res.send(htmlBox(hi(submitString)));
});
app.listen(port, function () {
    console.log("\uC11C\uBC84\uAC00 http://localhost:".concat(port, " \uC5D0\uC11C \uC2E4\uD589 \uC911\uC785\uB2C8\uB2E4."));
});
