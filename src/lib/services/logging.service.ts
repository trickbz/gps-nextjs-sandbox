/* eslint-disable no-console */
export class Logger {
  static log(message: string, ...optionalParams: unknown[]): void {
    console.log(
      `[LOG] ${new Date().toISOString()} - ${message}`,
      ...optionalParams,
    );
  }

  static error(message: string, ...optionalParams: unknown[]): void {
    console.error(
      `[ERROR] ${new Date().toISOString()} - ${message}`,
      ...optionalParams,
    );
  }

  static warn(message: string, ...optionalParams: unknown[]): void {
    console.warn(
      `[WARN] ${new Date().toISOString()} - ${message}`,
      ...optionalParams,
    );
  }

  static debug(message: string, ...optionalParams: unknown[]): void {
    console.debug(
      `[DEBUG] ${new Date().toISOString()} - ${message}`,
      ...optionalParams,
    );
  }
}
