// server.js
// Used for hosting on Heroku

const express = require("express");
const path = require("path");
const serveStatic = require("serve-static")

// middleware for solving 'Cannot GET /<x>' problem
const history = require("connect-history-api-fallback");

app = express();
app.use(history());

// use files from 'dist' folder
app.use(serveStatic(path.join(__dirname, "dist")));
const port = process.env.PORT || 80;
app.listen(port);
