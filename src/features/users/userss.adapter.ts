import type { UserEntity, UserRepository } from "./users.entity";

export class InMemoryUserRepository implements UserRepository {
	private db: UserEntity[] = [];

	async create(user: UserEntity): Promise<UserEntity> {
		this.db.push(user);
		return Promise.resolve(user);
	}

	async findAll(): Promise<UserEntity[]> {
		return Promise.resolve(this.db);
	}

	async findById(id: string): Promise<UserEntity | undefined> {
		return Promise.resolve(this.db.find((user) => user.id === id));
	}

	async update(user: UserEntity): Promise<UserEntity> {
		this.db = this.db.map((u) => (u.id === user.id ? user : u));
		return Promise.resolve(user);
	}

	async delete(id: string): Promise<void> {
		this.db = this.db.filter((user) => user.id !== id);
	}
}
