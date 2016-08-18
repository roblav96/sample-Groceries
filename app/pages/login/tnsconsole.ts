// 

var colors = require('ansicolors')



class tnsConsole {

	public log(...args: any[]): void {
		args.unshift(colors.green('CONSOLE LOG'))

		// console.log('console >', console)
		// console.log('typeof console >', typeof console)
		// console.dir(console);

		console.dir(args);
		// console.dir(console.log);
		// console.log().apply(this)
		// console.log(colors.green('CONSOLE LOG' + args[0]))

		let str = '\n'
		let i, len = args.length
		for (i = 0; i < len; i++) {
			str = str + args[i] + ' '
		}
		// str = str + '\n\n\n'
		console.log('THIS IS IT >')
		console.log(str)

	}

}

export default new tnsConsole()
