const express = require("express");
// el router es el objeto que guarda todas las rutas
const clientRouter = express.Router();
const { isAuth } = require("../middlewares/auth.middleware");
const { upload } = require("../middlewares/file.middleware");

// instanciamos al controlador para usar las funciones relativas a cada ruta
const {
  getClient,
  getClients,
  createClient,
  updateClient,
  deleteClient,
} = require("../controller/dating.controller");

// RUTAS

//nombreDelRouter.get('endpoint', <nombreDeLaFuncion)

// OBTENER UNA
clientRouter.get("/:id", getClient);

// OBTENER TODAS
clientRouter.get("/", getClients);

// CREAR
clientRouter.post("/", [upload.single("image"), isAuth], createClient);

// UPDATE
clientRouter.patch("/:id", [upload.single("image"), isAuth], updateClient);

// DELETE
clientRouter.delete("/:id", [isAuth], deleteClient);

module.exports = clientRouter;
