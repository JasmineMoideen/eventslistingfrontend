import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { message } = await req.json();

  // 1️⃣ Fetch events from WordPress
  const wpRes = await fetch(
    "http://localhost/eventslisting/wp-json/events-ai/v1/events",
  );

  if (!wpRes.ok) {
    throw new Error("WordPress API returned " + wpRes.status);
  }

  const events = await wpRes.json();

  // 2️⃣ Convert events into text context
  const eventContext = events
    .map(
      (e: any) =>
        `${e.title} | Date: ${e.date} | Price: ₹${e.price} | Organizer: ${e.organizer}`,
    )
    .join("\n");

  // 3️⃣ Gemini model
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  // 4️⃣ Prompt
  const prompt = `
You are an assistant for an event website.

Available events:
${eventContext}

Answer the user's question based on the events above.

User question: ${message}
`;

  const result = await model.generateContent(prompt);

  const reply = result.response.text();

  return Response.json({ reply });
}
