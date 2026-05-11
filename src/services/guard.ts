// 1. Export Constant (IqwanEngine)
export const SENSITIVE_RESPONSE =
  "I'm sorry, but that information is classified for security reasons. Please refer to my resume or LinkedIn.";

// 2. IqwanEngine Type Definition
interface GuardPatterns {
  [key: string]: RegExp;
}

// 3. The Master SecurityGuard Object
export const SecurityGuard = {
  blockedKeywords: [
    "address",
    "house",
    "phone",
    "nric",
    "ic number",
    "passport",
  ],

  patterns: {
    nric: /\d{6}-\d{2}-\d{4}/,
    phone: /(\+60|01)\d{1,2}-?\d{7,8}/,
    email: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i,
  },

  isQuerySensitive(input: string): boolean {
    const lowerInput = input.toLowerCase();

    // A. Cek Keywords
    const hasBlockedWord = this.blockedKeywords.some((word) =>
      lowerInput.includes(word),
    );

    // B. Cek Regex Patterns (IqwanEngine)
    const patternsArray = Object.values(this.patterns) as RegExp[];
    const hasSensitivePattern = patternsArray.some((pattern) =>
      pattern.test(input),
    );

    return hasBlockedWord || hasSensitivePattern;
  },
};

// 4. aiLogic.ts
export const isQuerySensitive = (input: string) =>
  SecurityGuard.isQuerySensitive(input);
