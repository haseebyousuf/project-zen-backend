import chalk from "chalk";

class Logger {
    private static formatMessage(
        level: string,
        message: string,
        context: string = "general",
        metadata: Record<string, any> = {},
    ) {
        const timestamp = chalk.gray(new Date().toISOString());
        const metadataString = Object.keys(metadata).length
            ? `\nMetadata: ${JSON.stringify(metadata, null, 2)}`
            : "";

        const levelColor =
            {
                info: chalk.blue("[INFO]"),
                warn: chalk.yellow("[WARN]"),
                error: chalk.red("[ERROR]"),
                debug: chalk.green("[DEBUG]"),
            }[level.toLowerCase()] || chalk.white(`[${level.toUpperCase()}]`);

        const contextFormatted = chalk.cyan(`${context}:`);

        return `${levelColor} ${timestamp} - ${contextFormatted} ${message}${metadataString}`;
    }

    static info(
        message: string,
        context?: string,
        metadata?: Record<string, any>,
    ) {
        console.info(this.formatMessage("info", message, context, metadata));
    }

    static warn(
        message: string,
        context?: string,
        metadata?: Record<string, any>,
    ) {
        console.warn(this.formatMessage("warn", message, context, metadata));
    }

    static error(
        message: string,
        context?: string,
        metadata?: Record<string, any>,
    ) {
        console.error(this.formatMessage("error", message, context, metadata));
    }

    static debug(
        message: string,
        context?: string,
        metadata?: Record<string, any>,
    ) {
        console.debug(this.formatMessage("debug", message, context, metadata));
    }
}

export default Logger;
