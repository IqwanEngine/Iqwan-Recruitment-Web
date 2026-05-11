// == IqwanEngine ==
// System: Master AI Logic Handler
// Description: Core logic for handling user inputs using Dual-Engine:
//              1. Strict Exact Match (For UI Buttons)
//              2. Smart Keyword Match (Longest Match Wins - Punctuation Safe)
// ==============================================================================

import { iqwanProfile, qaData } from "./db_data";

export const getAIResponse = (input: string): string => {
  // == IqwanEngine: Input Validation ==
  if (!input || input.trim() === "") {
    return "System standby. Please enter a query or select an option.";
  }

  // == IqwanEngine: Smart Normalization ==
  const normalized = input.trim().toLowerCase().replace(/\?+$/, "");

  // == IqwanEngine: Profile Retrieval ==
  if (normalized.includes("about iqwan (short)")) {
    return iqwanProfile.about_short;
  }
  if (normalized.includes("about iqwan (long)")) {
    return iqwanProfile.about_long;
  }

  // ------------------------------------------------------------------
  // ENGINE 1: STRICT EXACT MATCH PROTOCOL (Untuk Klik Butang)
  // ------------------------------------------------------------------
  const exactMatch = qaData.find((item) => {
    if (!item.question) return false;
    const dbQuestion = item.question.trim().toLowerCase().replace(/\?+$/, "");
    return dbQuestion === normalized;
  });

  if (exactMatch) {
    return exactMatch.response
      .replace(/\{\{keyword\}\}/g, "this topic")
      .replace(/\{\{name\}\}/g, "there");
  }

  // ------------------------------------------------------------------
  // ENGINE 2: SMART KEYWORD MATCHING (Longest Match Wins Algorithm)
  // ------------------------------------------------------------------
  // Algoritma ini memastikan keyword "custom ai" (9 huruf) akan mengalahkan
  // keyword "ai" (2 huruf), menyelesaikan masalah overlap.

  let bestMatch: { item: any; keyword: string } | null = null;

  for (const item of qaData) {
    if (!item.keywords) continue;

    for (const kw of item.keywords) {
      const regex = new RegExp(`\\b${kw.toLowerCase()}\\b`, "i");

      if (regex.test(normalized)) {
        if (!bestMatch || kw.length > bestMatch.keyword.length) {
          bestMatch = { item, keyword: kw };
        }
      }
    }
  }

  if (bestMatch) {
    return bestMatch.item.response
      .replace(/\{\{keyword\}\}/g, bestMatch.keyword.toUpperCase())
      .replace(/\{\{name\}\}/g, "there");
  }

  // == IqwanEngine: Conversational AI Fallbacks ==
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

  // == IqwanEngine: Global Fallback ==
  return "I apologize, but I don't have the specific details for that query just yet. Iqwan is continuously updating my knowledge base! In the meantime, I highly recommend downloading his Resume or connecting with him directly on LinkedIn—he is actively looking for new opportunities and would love to chat with you.";
};
