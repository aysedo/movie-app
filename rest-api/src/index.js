import express from "express";
import bodyParser from "body-parser"; // post islemleri icin, payloadin okunmasini saglar.payload gönderdigimiz bilgi clientdan yani postmandan oder react appindan.
import cors from "cors";

const movieList = [
  {
    id: 1,
    name: "Grease",
    actor: "John Travolta",
    img: "https://media.services.cinergy.ch/media/box1600/7501334182f2cea2da7130e92269521765091de4.jpg",
  },
  {
    id: 2,
    name: "Pixels",
    actor: "Adam Sandler",
    img: "https://i.weltbild.de/p/pixels-129206850.jpg?v=5&wp=p5",
  },
  {
    id: 3,
    name: "Maleficent",
    actor: "Angelina Jolie",
    img: "https://www.moviemaster.de/9999/2019/19malefi.jpg",
  },
];

const app = express();
const port = 5000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rest API Endpoints

app.get("/movies", (req, res, next) => {
  // no Logic
  //res.json({ firstName: "hi", lastName: "Coders!" });
  const newArray = JSON.parse(JSON.stringify(movieList));
  const list = newArray.reverse();
  res.json(list);
});

app.get("/movies/:id", (req, res, next) => {
  const id = req.params.id;
  const identification = movieList.find((movie) => movie.id == id);
  res.send(identification);
});

app.post("/filme", (req, res, next) => {
  // get params
  const movie = req.body; // params derken req.bodyi kastediyoruz
  const postNewMovie = movieList.push("");
  // no Logic
  // return result
  res.status(201).send(postNewMovie);
  
});

app.put("/movies/:id", (req, res, next) => {
  // params
  const personId = req.params.id;
  const person = req.body;
  // no Logic
  // return result
  res.send(`updated! ${personId}`);
});

app.delete("/filme/:id", (req, res) => {
  // get params
  const personId = req.params.id;
  // no Logic
  // return result to the Client
  res.send(`deleted! ${personId}`);
});

app.get("/rent/:id", (req, res, next) => {
  // no Logic
  //res.json({ firstName: "hi", lastName: "Coders!" });
  res.send({ firstName: "hi", lastName: "Coders!" });
});

app.post("/rent", (req, res, next) => {
  // get params
  console.log("sonuc", req.body);
  const person = req.body; // params derken req.bodyi kastediyoruz
  // no Logic
  // return result
  res.status(201).send({
    firstName: person.firstName.toUpperCase(),
    lastName: person.lastName.toUpperCase(),
  });
});

app.listen(5000, () => {
  console.log("rest api server has been just on port 5000 started!");
});
