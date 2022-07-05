const express = require("express");
const routerKue = express.Router();

const controllerKue = require("../controller/kue");

routerKue.route("/Kue").get(controllerKue.getKue).post(controllerKue.insert);

routerKue.route("/Kue/:kode").put(controllerKue.update).get(controllerKue.getKueByKode).delete(controllerKue.delete);

routerKue.route("/Kue/Nama/:kode").get(controllerKue.getNamaByKode).put(controllerKue.insertNama);

module.exports = routerKue;
