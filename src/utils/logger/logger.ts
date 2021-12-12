import winston from 'winston';

const format = winston.format.combine(
    winston.format.colorize({
        all: true,
    }),
    winston.format.label({
        label: '[LOGGER]',
    }),
    winston.format.timestamp({
        format: 'YY-MM-DD HH:MM:SS',
    }),
    winston.format.printf(
        (info) =>
            ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`
    )
);

const options: winston.LoggerOptions = {
    transports: [
        new winston.transports.Console({
            level: 'debug',
            format: winston.format.combine(winston.format.colorize(), format),
        }),
        new winston.transports.File({
            filename: 'logs/debug.log',
            level: 'debug',
        }),
    ],
};

const logger = winston.createLogger(options);

if (process.env.NODE_ENV !== 'production') {
    logger.debug('Logging initialized at debug level');
}

export { logger };
