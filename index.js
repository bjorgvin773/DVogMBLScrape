const osmosis = require("osmosis");
const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.listen(3000)

const allNews = [];

osmosis
.get("https://www.mbl.is/frettir/")
.find([".teaser"])
.set({
    "photo": ".mynd  img@src",
    "text": ".texti",
    "title": "h1"

})
.data((l)=>{
    console.log("Hér er l:");
    console.log(l);
    allNews.push(l);
})
.log(console.log)
.error(console.log)
.debug(console.log)

app.get('/', (req, res) => {
    res.send(allNews);
})

// osmo 2

const News = [];

osmosis
.get("www.dv.is")
.find([".grein"])
.set({
    "title": "h2",
    'photo': 'figure@style'

})
.data((l)=>{
    l.photo = l.photo.slice(21, -1)
    allNews.push(l);
})
.log(console.log)
.error(console.log)
.debug(console.log)

app.get('/', (req, res) => {
    res.send(allNews);
})