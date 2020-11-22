const express = require("express");
const app = express();
const ejs = require("ejs");
var fs = require("fs");
var path = require("path");
const port = process.env.npm_package_config_ssrPort;

function lastSyncTime() {
  var currentdate = new Date();
  return (
    "Last Sync: " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds()
  );
}

// server side chart data generation
const getChartData = () => {
  // area chart
  const profits = Array.from({ length: 30 }, () =>
    Math.floor(Math.random() * 40)
  );
  // stacked bar chart
  const web = Array.from({ length: 37 }, (item, idx) =>
    Math.floor(Math.random() * idx * 4)
  );
  const social = Array.from({ length: 37 }, (item, idx) =>
    Math.floor(Math.random() * idx * 2)
  );
  const other = Array.from({ length: 37 }, (item, idx) =>
    Math.floor(Math.random() * idx)
  );
  return { profits, web, social, other };
};

var content = 0;

fs.readFile(path.join(__dirname, "data.txt"), "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  content = parseInt(data);
});

//  static files serving
app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/img", express.static(path.join(__dirname, "img")));
app.use("/css", express.static(path.join(__dirname, "css")));

// Render index.ejs file
app.get("/:level?", function (req, res) {
  if ((req.params.level && isNaN(+req.params.level)) || req.params.level === '0') {
    res.redirect("/");
  }
  const level = +req.params.level || 0;
  if (level < 0) {
    res.redirect("/");
  }
  if (level > 5) {
    res.redirect('/5');
  }
  // Render page using renderFile method
  ejs.renderFile(
    "ssr/index.ejs",
    {
      lastSync: lastSyncTime(),
      chartData: getChartData(),
      level: level,
      sales: content,
    },
    {},
    function (err, template) {
      if (err) {
        throw err;
      } else {
        res.end(template);
      }
    }
  );
});

// Server setup
app.listen(port, function (error) {
  if (error) throw error;
  else console.log("Server is running");
});
