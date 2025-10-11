// test/user.test.ts
import { describe, expect, test } from "bun:test";

import { userService } from "@/features/users/users.service";

describe("User Repository Test", () => {
	test("createUser", async () => {
		const user = await userService.createUser({
			email: "test@test.com",
			password: "password",
			firstName: "John",
			lastName: "Doe",
			role: "admin",
		});

		expect(user).toBeDefined();
		expect(user.email).toBe("test@test.com");
		expect(user.firstName).toBe("John");
		expect(user.lastName).toBe("Doe");
		expect(user.role).toBe("admin");
		//
		expect(user.id).toBeDefined();
		expect(user.createdAt).toBeDefined();
		expect(user.updatedAt).toBeDefined();
	});
});
