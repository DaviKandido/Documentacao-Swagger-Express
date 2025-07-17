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
 * /posts:
 *  post:
 *    summary: Cria um post
 *    description: Essa rota cria um post
 *    tags: [Posts]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/post'
 *          examples:
 *            post:
 *              value:
 *                title: Post 1
 *                content: Conteudo do post 1
 *   responses:
 *     201:
 *       description: Post criado com sucesso
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               message: Post created successfully
 *               post:
 *                 id: 1
 *                 title: Post 1
 *                 content: Conteudo do post 1
 *     400:
 *       description: Dados incorretos ou incompletos
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               message: Title and content are required
*/
router.post("/", crudController.save);



/** 
 * @openapi
 * /posts:
 *  get:
 *    summary: Cria um post
 *    description: Essa rota cria um post
 *    tags: [Posts]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/post'
 *          examples:
 *            post:
 *              value:
 *                title: Post 1
 *                content: Conteudo do post 1
 *   responses:
 *     201:
 *       description: Post criado com sucesso
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               message: Post created successfully
 *               post:
 *                 id: 1
 *                 title: Post 1
 *                 content: Conteudo do post 1
 *     400:
 *       description: Dados incorretos ou incompletos
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               message: Title and content are required
*/
router.get("/", crudController.index);


router.get("/:id", crudController.show);


router.put("/:id", crudController.update);

router.delete("/:id", crudController.destroy);


module.exports = router