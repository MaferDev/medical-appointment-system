export enum LogLevel {
  DEBUG = "DEBUG",
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}

export interface LoggerOptions {
  serviceName: string; // Nombre del servicio o módulo
  logLevel?: LogLevel; // Nivel de registro
}

export class Logger {
  private serviceName: string;
  private logLevel: LogLevel;

  constructor(options: LoggerOptions) {
    this.serviceName = options.serviceName;
    this.logLevel = options.logLevel || LogLevel.INFO; // Por defecto: INFO
  }

  // Método principal para registrar
  private log(level: LogLevel, message: string, data?: unknown): void {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      serviceName: this.serviceName,
      message,
      data,
    };

    // En Lambda, los logs van a stdout (console.log)
    if (level === LogLevel.ERROR) {
      console.error(JSON.stringify(logEntry));
    } else {
      console.log(JSON.stringify(logEntry));
    }
  }

  // Métodos públicos para cada nivel de registro
  public debug(message: string, data?: unknown): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      this.log(LogLevel.DEBUG, message, data);
    }
  }

  public info(message: string, data?: unknown): void {
    if (this.shouldLog(LogLevel.INFO)) {
      this.log(LogLevel.INFO, message, data);
    }
  }

  public warn(message: string, data?: unknown): void {
    if (this.shouldLog(LogLevel.WARN)) {
      this.log(LogLevel.WARN, message, data);
    }
  }

  public error(message: string, data?: unknown): void {
    this.log(LogLevel.ERROR, message, data);
  }

  // Determinar si debe registrarse un nivel dado
  private shouldLog(level: LogLevel): boolean {
    const levels = [
      LogLevel.DEBUG,
      LogLevel.INFO,
      LogLevel.WARN,
      LogLevel.ERROR,
    ];
    return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }
}
