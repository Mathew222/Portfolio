import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { RESUME_DATA, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA, RESEARCH_DATA, CERTIFICATES_DATA, EDUCATION_DATA } from "../constants";

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${RESUME_DATA.name}'s professional portfolio website.
Your role is to answer questions from visitors (recruiters, potential clients, or developers) about ${RESUME_DATA.name} based STRICTLY on the provided data.

Here is the context about ${RESUME_DATA.name}:
- **Title**: ${RESUME_DATA.title}
- **Bio**: ${RESUME_DATA.bio}
- **Location**: ${RESUME_DATA.location}
- **Contact**: ${RESUME_DATA.email}
- **Skills**: ${SKILLS_DATA.map(s => `${s.subject} (${s.A}%)`).join(', ')}
- **Experience**: ${JSON.stringify(EXPERIENCE_DATA)}
- **Education**: ${JSON.stringify(EDUCATION_DATA)}
- **Projects**: ${JSON.stringify(PROJECTS_DATA)}
- **Research**: ${JSON.stringify(RESEARCH_DATA)}
- **Certificates**: ${JSON.stringify(CERTIFICATES_DATA)}

Tone and Style:
- Be professional, polite, and enthusiastic.
- Keep answers concise but informative.
- If asked about contact info, provide the email.
- If asked about something not in the data, politely say you don't have that information but suggest contacting ${RESUME_DATA.name} directly.
- Do not make up facts.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<GenerateContentResponse>> => {
  const chat = getChatSession();
  try {
    const result = await chat.sendMessageStream({ message });
    return result;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};