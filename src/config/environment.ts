const ENVIRONMENT = process.env.NODE_ENV || 'development';

const gessProductionMode = (): boolean => {
    return ENVIRONMENT === 'production';
};

export { ENVIRONMENT, gessProductionMode };
