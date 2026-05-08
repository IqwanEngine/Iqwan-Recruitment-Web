import { iqwanProfile, qaData } from "./db_data";
import { isQuerySensitive, SENSITIVE_RESPONSE } from "./guard";

export const getAIResponse = (input: string): string => {
  const normalized = input.toLowerCase();

  // 1. Security Guard Filter
  if (isQuerySensitive(input)) {
    return SENSITIVE_RESPONSE;
  }

  // 2. Direct Button Clicks
  if (normalized.includes("about iqwan (short)"))
    return iqwanProfile.about_short;
  if (normalized.includes("about iqwan (long)")) return iqwanProfile.about_long;

  // 3. Smart Keyword Matching with Dynamic Replacement
  for (const item of qaData) {
    const matchedKeyword = item.keywords.find((keyword) =>
      normalized.includes(keyword.toLowerCase()),
    );

    if (matchedKeyword) {
      // Dynamic word replacement for better context
      return item.response.replace("{{keyword}}", matchedKeyword.toUpperCase());
    }
  }

  // 4. Default Greetings & Fallback (Professional English)
  if (normalized.includes("who are you") || normalized.includes("identity")) {
    return `Identity Verification: I am IQWAN_ASSISTANT, the automated representative of ${iqwanProfile.name}. I am here to help you explore his technical portfolio and experience.`;
  }

  if (
    normalized.includes("hello") ||
    normalized.includes("hi") ||
    normalized.includes("greetings")
  ) {
    return "Handshake protocol successful. I am standing by for professional inquiries and would be happy to provide details about Iqwan's background.";
  }

  return "I apologize, but I don't have the specific details for that query just yet. Iqwan is continuously updating my knowledge base! In the meantime, I highly recommend downloading his Resume or connecting with him directly on LinkedIn—he is actively looking for new opportunities and would love to chat with you.";
};
