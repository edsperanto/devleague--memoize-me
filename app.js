window.onload = function() {
	console.log(memoize.query('h1'));
	console.log(memoize.query('.title'));
	console.log(memoize.id('lol'));
	console.log(memoize.query('h1'));
	console.log(memoize.query('.title'));
	console.log(memoize.id('lol'));
}
