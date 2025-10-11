export type UserEntity = {
	id: string;
	email: string;
	password?: string;
	firstName: string;
	lastName: string;
	role: string; // admin, client, technician
	createdAt: Date;
	updatedAt: Date;
};

export interface UserRepository {
	create: (user: UserEntity) => Promise<UserEntity>;
	findAll: () => Promise<UserEntity[]>;
	findById: (id: string) => Promise<UserEntity | undefined>;
	update: (user: UserEntity) => Promise<UserEntity>;
	delete: (id: string) => Promise<void>;
}

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
