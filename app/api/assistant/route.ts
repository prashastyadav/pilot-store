import { NextRequest } from "next/server";
import OpenAI from "openai";
import { ECOMM_E2E_PROMPT } from "@/src/lib/ecommPrompt";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return new Response(JSON.stringify({ error: "Missing OPENAI_API_KEY" }), {
      status: 500,
    });
  }

  try {
    const body = await req.json();
    const userPrompt = String(body?.prompt ?? "").slice(0, 8000);

    if (!userPrompt) {
      return new Response(JSON.stringify({ error: "Empty prompt" }), {
        status: 400,
      });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: ECOMM_E2E_PROMPT },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.3,
    });

    const reply = completion.choices[0]?.message?.content ?? "";
    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: "AI request failed" }), {
      status: 500,
    });
  }
}
