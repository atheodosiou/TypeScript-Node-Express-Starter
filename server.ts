import { logger } from './src/utils/logger/logger';
import { app } from './src/app';

app.listen(app.get('port'), () => {
    logger.info(
        'App is running at http://localhost:' +
            app.get('port') +
            ' in ' +
            app.get('env') +
            ' mode'
    );
    logger.info('Press CTRL-C to stop');
});
