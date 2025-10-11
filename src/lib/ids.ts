// DRY: Don't Repeat Yourself
import { nanoid } from "nanoid";

export function generateId(): string {
	return nanoid();
}
