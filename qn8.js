function isString(value) {
  if (typeof value === 'string') {
    console.log(`${value} is a string.`)
  } else {
    console.log(`${value} is NOT a string.`)
  }
}

isString('my name')

isString(1234)