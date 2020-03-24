function handleErrorType(error){
  switch (error.type){
    case 'error':
      error instanceof ErrorEvent ? reportCaughtError(error) : reportResourceError(error)
      break;
    case 'unhandledrejection':
      reportPromiseError(error)
      break;
    case 'httpError':
      reportHttpError(error)
    default:
      break
  }

}
function reportCaughtError(error){
  console.group('======Caught Error======')
  console.log(error)
  console.groupEnd()
}
function reportResourceError(error){
  console.group('======Resource Error======')
  console.log(error)
  console.groupEnd()
}
function reportPromiseError(error){
  console.group('======Promise Error======')
  console.log(error)
  console.groupEnd()
}
function reportHttpError(error){
  console.group('======Http Error======')
  console.log(error)
  console.groupEnd()
}

export default handleErrorType