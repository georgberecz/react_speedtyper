

var previousActions = [];

const actionLogger = logger => store => next => action => {
  var currentTime = Date.now()
  var delta = 1000*5
  while (previousActions.length > 0) {
  	if (previousActions[0].time + delta < currentTime)
  		previousActions.shift()
  	else 
  		break;
  }
  previousActions.push({type: action.type, time: Date.now()})
  logger.log(previousActions.length*12)
  let result = next(action)
  return result
}

export default actionLogger
