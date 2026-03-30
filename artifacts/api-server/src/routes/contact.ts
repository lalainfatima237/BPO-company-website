import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { contactMessagesTable, insertContactMessageSchema } from "@workspace/db/schema";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const result = insertContactMessageSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ error: "Invalid input: " + result.error.message });
    return;
  }

  try {
    const [inserted] = await db
      .insert(contactMessagesTable)
      .values(result.data)
      .returning();

    res.json({
      success: true,
      message: "Thank you for your message! We will get back to you shortly.",
      id: inserted.id,
    });
  } catch (err) {
    req.log.error({ err }, "Failed to save contact message");
    res.status(500).json({ error: "Failed to save your message. Please try again later." });
  }
});

router.get("/contact/messages", async (req, res) => {
  try {
    const messages = await db
      .select()
      .from(contactMessagesTable)
      .orderBy(desc(contactMessagesTable.createdAt));
    res.json(messages);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch contact messages");
    res.status(500).json({ error: "Failed to fetch messages." });
  }
});

export default router;
