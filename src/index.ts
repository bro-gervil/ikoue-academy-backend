import type { Request, Response } from "express";
import express from "express";
import healthRoutes from "./features/health/health.route";
import usersRoutes from "./features/users/users.route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

// methode + chemin
app.get("/", (_: Request, res: Response) => {
	res.send({
		name: "Session Backend",
		version: "1.0.0",
	});
});

app.use("/health", healthRoutes);
app.use("/users", usersRoutes);

app.listen(port, () => {
	console.log(`server is listening on port ${port}`);
});
