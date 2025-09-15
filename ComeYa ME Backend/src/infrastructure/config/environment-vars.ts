/**
Este modulo se encarga de:
    - Cargar las variables desde un archivo .env usando dotenv
    - Validar las variables con Joi para asegurarse de que tengan los formatos esperados
    Explotarlas como un objeto tipado para su uso en la apliacación
 */
 
import dotenv from 'dotenv';
import joi, { defaults, optional } from 'joi';
 
export type ReturnEnvironmentsVars = {
    PORT: number;
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
}
/*
ValidationEnvironmentVars: Estructura que al
*/
 
 
type ValidationEnvironmentVars= {
    error : joi.ValidationError | undefined;
    value: ReturnEnvironmentsVars;
}
 
import Joi from 'joi';
 
dotenv.config();
//Funcion clasica
function validateEnvVars(vars: NodeJS.ProcessEnv): { error: any, value: any } {
    const envSchema = Joi.object({
        PORT: Joi.number().required(),
        DB_HOST: joi.string().required(),
        DB_PORT: joi.number().default(3306),
        DB_USER: joi.string().required(),
        DB_PASSWORD: joi.string().allow("").optional(),
        DB_NAME:joi.string().required(),
    }).unknown(true);
    const { error, value } = envSchema.validate(vars);
    return { error, value };
}
//funcion tipo flecha
const loadEnvVars = (): ReturnEnvironmentsVars=>{
    const result = validateEnvVars(process.env);
    if(result.error){
        throw new Error (`Error en las variables de entorno: ${result.error.message}`);    
    }
    const value = result.value;
    return{
        PORT: value.PORT,
        DB_HOST: value.DB_HOST,
        DB_PORT: value.DB_PORT,
        DB_USER: value.DB_USER,
        DB_PASSWORD: value.DB_PASSWORD,
        DB_NAME: value.DB_NAME
    };
}
const envs = loadEnvVars();
export default envs;