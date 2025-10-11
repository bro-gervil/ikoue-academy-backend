/// [ROUTE/CONTROLLER] --> [USECASE/SERVICE] --> [REPOSITORY] --> [DATABASE]

import { generateId } from "@/lib/ids";
import { logger } from "@/lib/log";
import { InMemoryUserRepository } from "./users.adapter";
import type {
	CreateUserInput,
	CreateUserOutput,
	UserEntity,
	UserRepository,
} from "./users.entity";

/**
 * Responsabilités:
 * - Implémenter la logique métier (règles de gestion, orchester avec le repository, etc...)
 */
export class UserService {
	private repository: UserRepository;

	constructor(repository: UserRepository) {
		this.repository = repository;
	}

	async createUser(input: CreateUserInput): Promise<CreateUserOutput> {
		logger.info({ input }, "creating user");
		const entity: UserEntity = {
			...input,
			id: generateId(), // string (numérique + auto increment)
			createdAt: new Date(),
			updatedAt: new Date(),
		};
		const result = await this.repository.create(entity);
		delete result.password;
		logger.info({ result }, "user created");
		return result;
	}

	async listUsers(): Promise<UserEntity[]> {
		logger.info("listing users");
		const users = await this.repository.findAll();
		logger.info({ users }, "users found");
		return users;
	}
}

const repository = new InMemoryUserRepository();
export const userService = new UserService(repository);
