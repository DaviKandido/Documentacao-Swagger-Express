const express = require("express");
const crudController = require("../controllers/crud.controller");

const router = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - content
 *       properties:
 *         id:
 *           type: number
 *         title:
 *           type: string
 *         content:
 *           type: string
 */

/**
 * @openapi
 * /posts:
 *   post:
 *     summary: Cria um post
 *     description: Essa rota cria um post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *           examples:
 *             post:
 *               value:
 *                 title: Post 1
 *                 content: Conteudo do post 1
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 message: Post created successfully
 *                 post:
 *                   id: 1
 *                   title: Post 1
 *                   content: Conteudo do post 1
 *       400:
 *         description: Dados incorretos ou incompletos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 message: Title and content are required
 */
router.post("/", crudController.save);

/**
 * @openapi
 * /posts:
 *   get:
 *     summary: Retorna todos os posts
 *     description: Essa rota será responsável por retornar todos os posts
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Retorna todos os posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               example:
 *                 - id: 1
 *                   title: Post 1
 *                   content: Conteudo do post 1
 *                 - id: 2
 *                   title: Post 2
 *                   content: Conteudo do post 2
 *                 - id: 3
 *                   title: Post 3
 *                   content: Conteudo do post 3
 *       404:
 *         description: Nenhum post foi encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 message: Nenhum post foi encontrado
 */
router.get("/", crudController.index);

/**
 * @openapi
 * /posts/{id}:
 *   get:
 *     summary: Retorna um post
 *     description: Essa rota será responsável por retornar um post pelo id
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Post encontrado
 *       404:
 *         description: Nenhum post foi encontrado
 */
router.get("/:id", crudController.show);

/**
 * @openapi
 * /posts/{id}:
 *   put:
 *     summary: Atualiza um post
 *     description: Atualiza completamente um post pelo id
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *           examples:
 *             post:
 *               value:
 *                 title: Post Atualizado
 *                 content: Conteudo atualizado
 *     responses:
 *       200:
 *         description: Post atualizado com sucesso
 *       404:
 *         description: Post não encontrado
 */
router.put("/:id", crudController.update);

/**
 * @openapi
 * /posts/{id}:
 *   delete:
 *     summary: Deleta um post
 *     description: Deleta um post pelo id
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Post deletado com sucesso
 *       404:
 *         description: Post não encontrado
 */
router.delete("/:id", crudController.destroy);

module.exports = router;
