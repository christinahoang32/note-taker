const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const util = require('util');
// const { v4: uuidv4 } = require('uuid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile)


router.get('/notes', (req, res) => {
    readFileAsync('./db/db.json', 'utf8').then(data => {
        console.log(data);
        res.json(JSON.parse(data));
    }) 
});


router.post('/notes', (req,res) => {
    console.log(req.body);
    const { title, text} = req.body;
    if (title && text) {
        console.log('insideif')
        const newNotes = {
       title,
       text
        };
        return readFileAsync('./db/db.json', 'utf8').then(data => {
            console.log(data)
            writeFileAsync('./db/db.json', JSON.stringify([...JSON.parse(data),newNotes]))
         res.json(newNotes)
        })
    }
    

})



module.exports=router;