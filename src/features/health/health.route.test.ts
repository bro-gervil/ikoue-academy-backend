import { describe, expect, test } from "bun:test";
import request from "supertest";

import app from "@/server";

describe("GET /health", () => {
	test("should return status 200", async () => {
		const response = await request(app).get("/health");
		expect(response.status).toBe(200);
		expect(response.body.status).toBe("UP");
	});
});
