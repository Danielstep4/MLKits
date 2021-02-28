const outputs = []
function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  	outputs.push([dropPosition, bounciness, size, bucketLabel]);
}

function runAnalysis() {
	// K-Nearest Neighbor
	const analyzeOutputs = []
	const k = 3
	const predicationPoint = 300
	function distance(point) {
		return Math.abs(point - predicationPoint)
	}
	for(let dp of outputs) {
		let x = distance(dp[0])
		analyzeOutputs.push([x ,dp[3]])
	}
	console.log(analyzeOutputs.sort((a, b) => a[0] - b[0]).slice(0,k))
}

