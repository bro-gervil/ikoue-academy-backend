import { describe, expect, test } from "bun:test";
import request from "supertest";

import app from "@/server";

describe("Create user", () => {
	test("should return 400 when email is not a gmail account", async () => {
		const response = await request(app).post("/users").send({
			email: "test@test.com",
			password: "password",
			firstName: "John",
			lastName: "Doe",
			role: "admin",
		});
		expect(response.status).toBe(400);
	});

	test("should return 400 when the password < 8", async () => {
		const response = await request(app).post("/users").send({
			email: "test@gmail.com",
			password: "1234567",
			firstName: "John",
			lastName: "Doe",
			role: "admin",
		});
		expect(response.status).toBe(400);
	});
});
