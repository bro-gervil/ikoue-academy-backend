import { type Request, type Response, Router } from "express";
import { userService } from "./service";

const router = Router();

// list all users
router.post("/", async (req: Request, res: Response) => {
	const input = req.body; // requête utilisateur
	const user = await userService.createUser(input);
	res.json(user);
});

// list all users
router.get("/", async (_: Request, res: Response) => {
	const users = await userService.listUsers();
	res.json({ users });
});

export default router;
