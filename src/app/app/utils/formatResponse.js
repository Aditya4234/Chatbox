export const formatAIResponse = (response) => {
  if (!response) return "";
  
  // Basic formatting: ensure consistent spacing and handle common patterns
  let formatted = response.trim();
  
  // Remove any redundant start/end whitespace around triple backticks to help parsing
  formatted = formatted.replace(/\s*```\s*/g, "\n```\n").trim();
  
  return formatted;
};
