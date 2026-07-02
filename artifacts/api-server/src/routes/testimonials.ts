import { Router, type IRouter } from "express";
import { db, testimonialsTable } from "@workspace/db";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

router.get("/testimonials", async (_req, res): Promise<void> => {
  const testimonials = await db
    .select()
    .from(testimonialsTable)
    .orderBy(desc(testimonialsTable.createdAt));

  res.json(
    testimonials.map((t) => ({
      id: t.id,
      clientName: t.clientName,
      eventType: t.eventType,
      review: t.review,
      rating: t.rating,
      imageUrl: t.imageUrl ?? null,
      location: t.location ?? null,
    }))
  );
});

export default router;
