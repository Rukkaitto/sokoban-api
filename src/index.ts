import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get('/level', (req: Request, res: Response) => {
   const level = {
      name: "Level from API",
      rows: [
         "##########",
         "#x.x#....#",
         "#...CC.P.#",
         "#........#",
         "##########",
      ],
   };
   res.json(level);
}),

app.listen(PORT, () => {
	console.log(`Sokoban API listening on port ${PORT}`);
});