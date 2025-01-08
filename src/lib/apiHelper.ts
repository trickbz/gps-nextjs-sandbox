export const getErrorMessage = (
  error: unknown,
  defaultMessage: string,
): string => {
  const resultMsg =
    error instanceof Error && error.name !== 'AbortError'
      ? `${defaultMessage}. ${error.message}`
      : defaultMessage;
  return resultMsg;
};
