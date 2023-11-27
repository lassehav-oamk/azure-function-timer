const { app } = require('@azure/functions');

app.timer('randomQuoteTimerFunction', {
    schedule: '0 */1 * * * *',
    handler: (myTimer, context) => {
        context.log('Timer function processed request.');
    }
});
