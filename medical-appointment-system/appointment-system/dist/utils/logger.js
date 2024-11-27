"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
class Logger {
    constructor(options) {
        this.serviceName = options.serviceName;
        this.logLevel = options.logLevel || LogLevel.INFO; // Por defecto: INFO
    }
    // Método principal para registrar
    log(level, message, data) {
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
        }
        else {
            console.log(JSON.stringify(logEntry));
        }
    }
    // Métodos públicos para cada nivel de registro
    debug(message, data) {
        if (this.shouldLog(LogLevel.DEBUG)) {
            this.log(LogLevel.DEBUG, message, data);
        }
    }
    info(message, data) {
        if (this.shouldLog(LogLevel.INFO)) {
            this.log(LogLevel.INFO, message, data);
        }
    }
    warn(message, data) {
        if (this.shouldLog(LogLevel.WARN)) {
            this.log(LogLevel.WARN, message, data);
        }
    }
    error(message, data) {
        this.log(LogLevel.ERROR, message, data);
    }
    // Determinar si debe registrarse un nivel dado
    shouldLog(level) {
        const levels = [
            LogLevel.DEBUG,
            LogLevel.INFO,
            LogLevel.WARN,
            LogLevel.ERROR,
        ];
        return levels.indexOf(level) >= levels.indexOf(this.logLevel);
    }
}
exports.Logger = Logger;
