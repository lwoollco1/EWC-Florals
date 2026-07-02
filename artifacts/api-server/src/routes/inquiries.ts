import { Router, type IRouter } from "express";
import { db, inquiriesTable } from "@workspace/db";
import { SubmitInquiryBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/inquiries", async (req, res): Promise<void> => {
  const parsed = SubmitInquiryBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [inquiry] = await db
    .insert(inquiriesTable)
    .values({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      eventType: parsed.data.eventType,
      eventDate: parsed.data.eventDate ?? null,
      guestCount: parsed.data.guestCount ?? null,
      budgetRange: parsed.data.budgetRange ?? null,
      venue: parsed.data.venue ?? null,
      message: parsed.data.message,
    })
    .returning();

  req.log.info({ inquiryId: inquiry.id }, "New inquiry submitted");

  res.status(201).json({
    id: inquiry.id,
    name: inquiry.name,
    email: inquiry.email,
    phone: inquiry.phone,
    eventType: inquiry.eventType,
    eventDate: inquiry.eventDate,
    guestCount: inquiry.guestCount,
    budgetRange: inquiry.budgetRange,
    venue: inquiry.venue,
    message: inquiry.message,
    createdAt: inquiry.createdAt.toISOString(),
  });
});

export default router;
