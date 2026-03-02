import OpenAI from "openai";

export async function GET() {

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const agentPrompt = `
You are an autonomous AI Career Agent.

MISSION:
Find and analyze high-quality job opportunities for an
early-career candidate interested in:

- Data Analyst
- Business Analyst
- AI/ML roles
- Management Trainee
- Entry-level tech roles

LOCATION:
India or Remote.

TASKS:

1. Identify ideal companies hiring these roles.
2. Explain why each company is a strong fit.
3. Suggest application strategy.
4. Generate a short personalized motivation answer.

OUTPUT FORMAT:

For each job provide:

Company:
Role:
Why Good Fit:
Application Strategy:
Sample Answer (Why join?):

Focus on quality over quantity.
Avoid generic advice.
Act like an elite recruiter.
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      {
        role: "system",
        content: "You are a world-class recruiter and career strategist."
      },
      {
        role: "user",
        content: agentPrompt
      }
    ],
    temperature: 0.7
  });

  return Response.json({
    success: true,
    result: response.choices[0].message.content
  });
}
