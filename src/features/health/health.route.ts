import { type Request, type Response, Router } from "express";

const router = Router();

// [ROUTE]

router.get("/", (_: Request, res: Response) => {
	res.json({
		status: "UP",
	});
});

export default router;
