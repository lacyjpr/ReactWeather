// function getTempPromise(location) {
// 	return new Promise(function(resolve, reject){
// 		setTimeout(function(){
// 			resolve(79);
// 			reject('City not found');
// 		}, 1000); 

// 	});
// }

// getTempPromise('Philadelphia').then(function (temp){
// 	console.log('promise success', temp);
// }, function(err) {
// 	console.log('promise error', err);
// });

function addPromise(a, b) {
	return new Promise(function(resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number'){
			resolve(a + b);
		} else {
			reject('a & b need to be numbers');
		}
	});
}

addPromise(2, 3).then(function(sum) {
	console.log('success', sum);
}, function(err) {
	console.log('error', err);
});

addPromise('jp', 3).then(function(sum) {
	console.log('this should not appear');
}, function(err) {
	console.log('this should appear', err);
});