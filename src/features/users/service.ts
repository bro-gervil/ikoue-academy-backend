/// [ROUTE/CONTROLLER] --> [USECASE/SERVICE] --> [REPOSITORY] --> [DATABASE]
import { InMemoryUserRepository } from "./adapter";
import type { UserEntity, UserRepository } from "./entity";

export type CreateUserInput = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	role: string; // admin, client, technician
};

export type CreateUserOutput = {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	role: string; // admin, client, technician
	createdAt: Date;
	updatedAt: Date;
};

export class UserService {
	private repository: UserRepository;

	constructor(repository: UserRepository) {
		this.repository = repository;
	}

	async createUser(input: CreateUserInput): Promise<CreateUserOutput> {
		console.log("creating user", input);

		const entity: UserEntity = {
			...input,
			id: crypto.randomUUID(),
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		const user = await this.repository.create(entity);

		const result: CreateUserOutput = {
			id: user.id,
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
			role: user.role,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
		};

		console.log("user created", result);

		return result;
	}

	async listUsers(): Promise<UserEntity[]> {
		console.log("listing users");
		const users = await this.repository.findAll();
		console.log("users found", users.length);
		return users;
	}
}

const repository = new InMemoryUserRepository();
export const userService = new UserService(repository);
