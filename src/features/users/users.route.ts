import { type Request, type Response, Router } from "express";
import { z } from "zod";
import { userService } from "./users.service";

const router = Router();

const createUserSchema = z.object({
	email: z.email().refine((email) => email.endsWith("@gmail.com"), {
		message: "nous n'acceptons que les emails @gmail.com",
	}),
	password: z.string().min(8),
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	role: z.enum(["admin", "client", "technician"]).optional().default("client"),
});
/**
 * Créer un utilisateur
 * - Valider l'input (jamais faire confiance aux données en entrée) // https://zod.dev/
 * ROUTER --> SERVICE
 * Responsabilités:
 * - Valider l'input
 * - Vérifier les permissions de l'utilisateur connecté (si utilisateur il y a)
 * - Appeler le service
 * - Valider les données en sortie (optionnel)
 * - Retourner la réponse à l'utilisateur
 */
router.post("/", async (req: Request, res: Response) => {
	const input = req.body; // requête utilisateur (json)
	const result = createUserSchema.safeParse(input);
	if (!result.success) {
		//code 400: bad request
		res.status(400).json({ error: result.error.message });
		return;
	}
	const user = await userService.createUser(result.data);
	// valider les données en sortie
	res.status(201).json(user);
});

// list all users
router.get("/", async (_: Request, res: Response) => {
	const users = await userService.listUsers();
	res.status(200).json({ users });
});

// Récupérer un utilisateur par son id
router.get("/:id", async (_: Request, __: Response) => {
	throw new Error("Not implemented");
});

// Mettre à jour un utilisateur par son id
router.put("/:id", async (_: Request, __: Response) => {
	throw new Error("Not implemented");
});

// Supprimer un utilisateur par son id
router.delete("/:id", async (_: Request, __: Response) => {
	throw new Error("Not implemented");
});

export default router;
