export type UserEntity = {
	id: string;
	email: string;
	password: string;
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

/// [ROUTE/CONTROLLER] --> [USECASE/SERVICE] --> [REPOSITORY] --> [DATABASE]
