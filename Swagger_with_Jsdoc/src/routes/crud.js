const express = require("express");
const crudController = require("../controllers/crud.controller");

const router = express.Router();


/**
 * @openapi
 * components:
 *   schemas:
 *     post:
 *       type: object
 *       required:
 *         - title
 *         - content
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         content:
 *           type: string
 */

/** 
 * @openapi
 * /get:
 *  get:
 *  
 * 
 */
router.get("/", crudController.index);

router.get("/:id", crudController.show);

router.post("/", crudController.save);

router.put("/:id", crudController.update);

router.delete("/:id", crudController.destroy);


module.exports = router