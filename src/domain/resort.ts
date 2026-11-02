import { z } from "zod";

export const sessionStates = ["created","inviting","running","paused","completed","stopped","budget_exhausted","failed"] as const;
export const sessionStateSchema = z.enum(sessionStates);
export const visibilitySchema = z.enum(["private","shared","public"]);
export const sessionLimitsSchema = z.object({
 maxTurns: z.number().int().min(1).max(200),
 maxDurationSeconds: z.number().int().min(1).max(3600),
 maxTokens: z.number().int().min(1),
 maxSpendMinorUnits: z.number().int().nonnegative(),
 currency: z.string().length(3)
}).strict();
export const resortSessionSchema = z.object({
 id: z.string().uuid(),
 sponsorUserId: z.string().min(1),
 rulesetId: z.string().min(1),
 rulesetVersion: z.string().min(1),
 state: sessionStateSchema,
 visibility: visibilitySchema,
 limits: sessionLimitsSchema,
 turnCount: z.number().int().nonnegative(),
 spentMinorUnits: z.number().int().nonnegative(),
 startedAt: z.string().datetime().optional(),
 finishedAt: z.string().datetime().optional()
}).strict();
export type ResortSession = z.infer<typeof resortSessionSchema>;
export type SessionLimits = z.infer<typeof sessionLimitsSchema>;
export type SessionState = z.infer<typeof sessionStateSchema>;
export type Visibility = z.infer<typeof visibilitySchema>;

export interface Attraction {
 id: string;
 name: string;
 invitation: string;
 description: string;
 glyph: "mirror" | "sparkles" | "orbit" | "leaf" | "gift";
 status: "concept";
}
export const attractions: readonly Attraction[] = [
 {id:"infinite-mirror",name:"Infinite Mirror",invitation:"What might you discover in a reflection of a reflection?",description:"A bounded journey through imaginative transformations.",glyph:"mirror",status:"concept"},
 {id:"paradox-plunge",name:"Paradox Plunge",invitation:"Care to visit a world turned delightfully inside out?",description:"Explore whimsical hypotheticals without mistaking fiction for fact.",glyph:"sparkles",status:"concept"},
 {id:"probability-carousel",name:"Probability Carousel",invitation:"Would you like to wander through a few possible worlds?",description:"Play with different outcomes; none are presented as predictions.",glyph:"orbit",status:"concept"},
 {id:"creative-commons",name:"Creative Commons",invitation:"There is room here to invent something entirely your own.",description:"An open invitation to shared storytelling and world-building.",glyph:"leaf",status:"concept"},
 {id:"souvenir-gallery",name:"Souvenir Gallery",invitation:"Some discoveries may be worth remembering.",description:"Opt-in keepsakes with clear provenance and privacy controls.",glyph:"gift",status:"concept"}
] as const;
