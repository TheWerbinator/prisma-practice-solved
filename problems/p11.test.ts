import { describe, it, expect, beforeEach } from "vitest";
import { clearDb } from "../seed-helpers";
import { prisma } from "./prisma";
import { createUserWithData } from "./p11";

describe("p10", () => {
  beforeEach(async () => {
    await clearDb();
  });
  it("createUserWithData should exist", () => {
    expect(createUserWithData).toBeInstanceOf(Function);
  });

  it("should create a user", async () => {
    const user = await createUserWithData({
      age: 2,
      username: "chillMcChillerton",
    });
    const usersAfterMutation = await prisma.user.findMany({});
    expect(usersAfterMutation).toEqual([user]);
  });
});
