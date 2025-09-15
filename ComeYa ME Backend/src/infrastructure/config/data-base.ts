import { DataSource, Connection } from 'typeorm';
import dotenv from "dotenv";
import envs from './environment-vars';
import { UserEntity} from '../entities/UserEntity';


dotenv.config();
export const AppDataSource = new DataSource({
    type: "mysql",
    host: envs.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: envs.DB_USER,
    password: envs.DB_PASSWORD,
    database: envs.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [UserEntity]
});

//conexion a la base de datos
export const connectDB = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database connected successfully");
    }catch (error) {
        console.error("Error connecting to the database", error);
        process.exit(1);
    }
}


