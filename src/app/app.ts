import bodyParser from "body-parser";
import cors from "cors";
import express, {Application} from "express";
import {queryParser} from "./helper/QueryParser";
import {registerRoutes} from "./routes";


class App {
    app: Application;

    constructor() {
        this.app = express();
        this.middleware();
        this.setupApiRoutes();
    }

    private middleware(): void {
        this.app.use(cors());
        this.app.use(express.json({limit: "10mb"}));
        this.app.use(
            bodyParser.urlencoded({
                limit: "10mb",
                extended: true,
                parameterLimit: 50000,
            })
        );
        this.app.use(queryParser());
        this.app.enable("strict routing");
    }

    private setupApiRoutes(): void {
        // @ts-ignore
        // this.app.router(registerRoutes(this.app))
        registerRoutes(this.app);
    }

}

export default new App().app;
