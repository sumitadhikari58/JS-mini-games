const express = require("express")
const app = express()
const path = require("path")
const { randomUUID } = require('crypto')
let port = 3000
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("view engine","ejs")
app.set("views", path.join(__dirname, "views"));
let notes = [
    {id:randomUUID(),
    title:"Sleep",
    content:"Sleeping is the right way to success"},
    {id:randomUUID(),
    title:"Work",
    content:"Work is the wrong way to success"}
]
app.get("/notes",(req,res)=>{
    res.render("notes.ejs",{notes:notes})
})
app.get("/notes/new",(req,res)=>{
    res.render("newnotes.ejs")
})
app.post("/notes",(req,res)=>{
    const {title,content} = req.body;
    const id = randomUUID();
    notes.push({id,title,content});
    res.redirect("/notes");
})
app.get("/notes/:id",(req,res)=>{
    const{id}  = req.params;
    const notesfind = notes.find(note => note.id === id);
    if(!notesfind){
        return res.status(404).send("Note not found")
    }
    res.render("shownotes.ejs",{note: notesfind});
})