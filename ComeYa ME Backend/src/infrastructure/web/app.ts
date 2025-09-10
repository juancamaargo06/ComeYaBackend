import express,{Response, Request} from "express";
import userRoutes from "../routes/UserRoutes";
import roleRoutes from "../../interfaces/roleRoutes";
import usuarioRoutes from "../../interfaces/usuarioRoutes";
import donacionDineroRoutes from "../../interfaces/donacionDineroRoutes";

class App{
    private app!: express.Application;

    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }
    private middleware(): void {
    this.app.use(express.json());
}
private routes(): void {
    this.app.use("/api", userRoutes);
    this.app.use("/api", roleRoutes);
    this.app.use("/api", usuarioRoutes);
    this.app.use("/api", donacionDineroRoutes);
}
    getApp(){
            return this.app;
        }
    }
export default new App().getApp();