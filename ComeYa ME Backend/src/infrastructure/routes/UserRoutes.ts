import { Router } from "express";
import { UserAdpartes } from "../adapter/UserAdaptar";
import { UserApplicationService } from "../../application/UserApplicationService";
import { UserController } from "../controller/UserController";

const router = Router();
const userAdpartes = new UserAdpartes();
const userApp = new UserApplicationService(userAdpartes);
const userController = new UserController(userApp);


// Obtener todos los usuarios
router.get("/users", async (req, res) => {
    try {
        await userController.getAllUsers(req, res);
    } catch (error) {
        res.status(400).json({ message: "Error al obtener usuarios" });
    }
});

// Obtener usuario por correo
router.get("/users/correo", async (req, res) => {
    try {
        await userController.getUserByEmailQuery(req, res);
    } catch (error) {
        res.status(400).json({ message: "Error al obtener usuario por correo" });
    }
});

// Obtener usuario por nombre
router.get("/users/nombre", async (req, res) => {
    try {
        await userController.getUserByNameQuery(req, res);
    } catch (error) {
        res.status(400).json({ message: "Error al obtener usuario por nombre" });
    }
});

// Obtener usuario por ID
router.get("/users/:id", async (req, res) => {
    try {
        await userController.getUserById(req, res);
    } catch (error) {
        res.status(400).json({ message: "Error al obtener usuario por id" });
    }
});

// Crear usuario
router.post("/users", async (req, res) => {
    try {
        await userController.registerUser(req, res);
    } catch (error) {
        res.status(400).json({ message: "Error al crear usuario" });
    }
});

// Actualizar usuario
router.put("/users/:id", async (req, res) => {
    try {
        await userController.updateUser(req, res);
    } catch (error) {
        res.status(400).json({ message: "Error al actualizar usuario" });
    }
});

// Eliminar usuario
router.delete("/users/:id", async (req, res) => {
    try {
        await userController.deleteUser(req, res);
    } catch (error) {
        res.status(400).json({ message: "Error al eliminar usuario" });
    }
});

export default router ;