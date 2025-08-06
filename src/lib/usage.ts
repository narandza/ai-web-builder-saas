import { RateLimiterPrisma } from "rate-limiter-flexible";
import { prisma } from "./db";

const FREE_POINTS = 5;

const DURATION = 30 * 24 * 60 * 60; // 30 day

export async function getUsageTracker() {
  const usageTracker = new RateLimiterPrisma({
    storeClient: prisma,
    tableName: "Usage",
    points: FREE_POINTS,
    duration: DURATION,
  });

  return usageTracker;
}
