import { logger } from "./lib/log";
import app from "./server";

const port = 3000;

// Démarrer le serveur
app.listen(port, () => {
	logger.info(`server is listening on port ${port}`);
});
