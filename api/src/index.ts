import express from "express";
import helmet from "helmet";
import cors from "cors";
import compress from "compression";
import services from "./services";
const app = express();
const port = 8080;

app.use(helmet());
app.use(compress());
app.use(cors());

services["graphql"].applyMiddleware({app});

app.get("/", (req, res) => {
    res.send( "Hello world!" );
} );

app.listen(port, () => {
    console.log( `server started at http://localhost:${port}`);
});
