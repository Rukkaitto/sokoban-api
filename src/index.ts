import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get('/level', (req: Request, res: Response) => {
   const level = {
      board_id: "apilevel",
      name: "Level from API",
      rows: [
         "..#####.",
         "###...#.",
         "#xPC..#.",
         "###.Cx#.",
         "#x##C.#.",
         "#.#.x.##",
         "#C.CCCx#",
         "#...x..#",
         "########",
      ],
   };
   res.json(level);
}),

app.listen(PORT, () => {
	console.log(`Sokoban API listening on port ${PORT}`);
});
