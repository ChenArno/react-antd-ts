
const ora = require('ora');
const scpClient = require('scp2')
const chalk = require('chalk');
const { Client } = require('ssh2')
const { homepage } = require('../package.json');

const path = homepage === "/" ? "/build" : homepage;
const suffix = path.replace(/\//, '');

let server = {
	host: '47.114.152.205',
	port: '22',
	username: 'root',
	password: 'Afd_2020',
	path: '/var/staticApp' + path + "/",
	model: '生产'
}

switch (process.env.NODE_ENV) {
	case 'production':
		break;
	default:
		server.host = '10.144.111.102';
		server.password = 'afd123789';
		server.model = '测试';
		break;
}

const spinner = ora(
	'正在发布到' + server.model + '服务器...'
)

const conn = new Client()

const client = conn.on('ready', () => {
	console.log(chalk.red(`正在删除${server.path}\n`));
	conn.exec(`rm -rf ${server.path}`, (err, stream) => {
		if (err) throw err;
		console.log(chalk.red(`删除成功\n`));
		stream.on('close', (code, signal) => {
			// 在执行shell命令后，把开始上传部署项目代码放到这里面
			spinner.start();
			scpClient.scp(suffix + '/', {
				host: server.host,
				port: server.port,
				username: server.username,
				password: server.password,
				path: server.path
			}, (err) => {
				spinner.stop();
				if (err) throw err
				console.log(chalk.green('Success! 成功发布到' + server.model + '服务器! \n'));
			});
			conn.end();
		}).on('data', (data) => {
			console.log('STDOUT: ' + data);
		}).stderr.on('data', function (data) {
			console.log('STDERR: ' + data)
		});
	});
});

client.connect({
	host: server.host,
	port: server.port,
	username: server.username,
	password: server.password,
})
