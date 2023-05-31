const express = require('express');
const htmlroutes = require('./routes/htmlroutes.js');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"))
app.use(htmlroutes);

app.listen(PORT, ()=>{
    console.log(`App listening at http://localhost:${PORT} 🚀`)
})
