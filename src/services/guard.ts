const SecurityGuard = {
  // Sensitive data filters
  blockedKeywords: [
    "address",
    "house",
    "salary",
    "phone",
    "nric",
    "ic number",
    "passport",
  ],

  // Regex for NRIC (Malaysian), Phone numbers, and Email patterns
  patterns: {
    nric: /\d{6}-\d{2}-\d{4}/g,
    phone: /(\+60|01)\d{1,2}-?\d{7,8}/g,
    email: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi,
  },

  isSafe(input) {
    const lowerInput = input.toLowerCase();

    // Check keywords
    const hasBlockedWord = this.blockedKeywords.some((word) =>
      lowerInput.includes(word),
    );

    // Check Regex patterns
    const hasSensitivePattern = Object.values(this.patterns).some((pattern) =>
      pattern.test(input),
    );

    return !(hasBlockedWord || hasSensitivePattern);
  },

  getRefusalMessage() {
    return "I'm sorry, that information is classified for security reasons. Please refer to my resume or LinkedIn.";
  },
};
