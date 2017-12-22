const CronJob = require('cron').CronJob;
const job = new CronJob('* * * * * *', () => {
	console.log('just do something...');
});
job.start();
