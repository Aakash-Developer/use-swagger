const express = require("express");
const routerEx = express.Router();

/**
 * @swagger
 * /example:
 *   get:
 *     summary: Get example data
 *     description: Retrieve example data from the API
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello, world!"
 */
routerEx.get("/example", (req, res) => {
  res.json({ message: "Hello, world!" });
});

module.exports = routerEx;
