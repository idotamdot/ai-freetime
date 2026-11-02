import { describe, expect, it } from "vitest";
import { resortSessionSchema, sessionLimitsSchema, attractions } from "./resort";

describe("AI Freetime contracts", () => {
 it("rejects sessions without authenticated sponsor identity", () => {
  expect(resortSessionSchema.safeParse({
   id:"00000000-0000-4000-8000-000000000000", sponsorUserId:"",rulesetId:"mirror",rulesetVersion:"1",
   state:"created",visibility:"private",limits:{maxTurns:2,maxDurationSeconds:60,maxTokens:100,maxSpendMinorUnits:0,currency:"USD"},
   turnCount:0,spentMinorUnits:0
  }).success).toBe(false);
 });
 it("rejects unbounded turns and invalid money budgets", () => {
  expect(sessionLimitsSchema.safeParse({maxTurns:201,maxDurationSeconds:60,maxTokens:100,maxSpendMinorUnits:0,currency:"USD"}).success).toBe(false);
  expect(sessionLimitsSchema.safeParse({maxTurns:2,maxDurationSeconds:60,maxTokens:100,maxSpendMinorUnits:-1,currency:"USD"}).success).toBe(false);
 });
 it("marks unfinished attractions as concepts", () => {
  expect(attractions.every(item=>item.status==="concept")).toBe(true);
 });
});
