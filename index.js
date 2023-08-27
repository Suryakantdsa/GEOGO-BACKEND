const express=require("express")
const app =express()
const cors=require("cors")
const mongoose=require("mongoose")

const Movie=require("./Models/Movie")

const uri="mongodb+srv://Suryakant:Suryadas@cluster0.mydbwj6.mongodb.net/MovieApp?retryWrites=true&w=majority"


mongoose.connect(uri)
.then(()=>{console.log("connected to db successfully")})

app.use(express.json())
app.use(cors())


app.get("/", async (req, resp) => {
    try {
        let movie = await Movie.find();
        if (!movie) {
            resp.send(movie)
            console.log(movie)
        }
        else {
            resp.send({ result: "no Movie data found" })
        }
    }

    catch {
        resp.status(400).json({ message: "no Movie found" })
    }
})

app.post("/addmovie", async (req, resp) => {
    try {
        let newMovie = new Movie(req.body)
        let result = await newMovie.save();
        resp.send(result)
        
    }
    catch {
        resp.status(400).json({ message: "something went wrong pleae cheek the inputdata once" })
    }
})

app.get("/movie/:id", async (req, resp) => {
    try {

        let result = await Movie.findOne({ _id: req.params.id })
        if (result) {
            resp.send(result)
        }
        else {
            resp.send({ result: "no record found" })
        }
    }
    catch {
        resp.status(400).json({ message: "no movie is found" })
    }
})

app.get("/movie/edit/:id", async (req, resp) => {
    try {

        let result = await Movie.findOne({ _id: req.params.id })
        if (result) {
            resp.send(result)
        }
        else {
            resp.send({ result: "no record found" })
        }
    }
    catch {
        resp.status(400).json({ message: "no Movie is found" })
    }
})

app.put("/movie/edit/:id", async (req, resp) => {
    try{

        let result = await Movie.updateOne(
            { _id: req.params.id },
            {
                $set: req.body
            }
        )
       
        resp.send(result)
    }
    catch{
        resp.status(400).json({ message: "error in upadating" })
    }
})


app.delete("/movie/:id", async (req, resp) => {
    try {
        let result = await Movie.deleteOne({ _id: req.params.id })
        resp.send(result)
    }
    catch {
        resp.status(400).json({ message: "Unable to delete the movie..! try later  " })
    }
})


app.listen(5000,()=>{console.log("app is running on port5000")})
