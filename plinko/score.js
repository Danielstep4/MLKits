const outputs = []
function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  	outputs.push([dropPosition, bounciness, size, bucketLabel]);
}

function runAnalysis() {
	// K-Nearest Neighbor
	const k = outputs.length / 3
	const predicationPoint = 300
	function distance(point) {
		return Math.abs(point - predicationPoint)
	}
	const reuslt = _.chain(outputs)
		.map(row => [distance(row[0]), row[3]])
		.sortBy(row => row[0])
		.slice(0, k)
		.countBy(row => row[1])
		.toPairs()
		.sortBy(row => row[1])
		.last()
		.first()
		.parseInt()
		.value()
}
