export const parseToString = (value: unknown): string => {
  switch (typeof value) {
    case "object":
      return JSON.stringify(value);
    case "undefined":
      return "";
    default:
      return `${value}`;
  }
};

export const parseErrorToString = (error: unknown): string => {
  return error instanceof Error ? error.toString() : parseToString(error);
};
