import type { Request, Response } from "express";
import express from "express";
import healthRoutes from "./features/health/route";
import usersRoutes from "./features/users/route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

// methode + chemin
app.get("/", (_: Request, res: Response) => {
	res.send("Hello World!");
});

app.use("/health", healthRoutes);
app.use("/users", usersRoutes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
