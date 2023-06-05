var sakuzyovo = {
  chunk: function (array, size) {
    var a = []
    var count = 0
    for (var i = 0; i < array.length; i += size) {
      a.push(array.slice(i, i + size))
    }
    return a
  }
  ,
  compact: function (array) {
    var res = []
    for (var i of array) {
      if (i) {
        res.push(i)
      }
    }
    return res
  }
  ,
  concat: function (array, ...values) {
    var result = array
    for (var i = 0; i < values.length; i++) {
      if (Array.isArray(values[i])) {
        for (var j = 0; j < values[i].length; j++) {
          result.push(val[i][j])
        }
      } else {
        result.push(Val[i])
      }
    }
    return result
  },
  // difference: function (array, brray) {

  //   for (var i = 0, j = 0; i < array.length, j < brray.length; i++, j++) {
  //     [1, 2][2, 3]

  //   }
  // }
  drop: function (array, number = 1) {
    return array.slice(number)
  }
  ,
  dropRight: function (array, number) {
    if (number == null) {
      return array.slice(0, array.length - 1)
    }
    if (number == 0) {
      return array
    }

    for (var i = 1; i <= number; i++) {
      array.pop()
    }
    return array
  }
  ,
  fill: (array, value, start = 0, end = array.length) => {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }
  ,
  // findindex: (array,predicate = _.identity, fromIndex = 0) => {


  // }
  flatten: (array) => {
    var result = []
    for (var i of array) {
      if (Array.isArray(i)) {
        for (var a = 0; a < i.length; a++) {
          result.push(item[a])
        }
      }
      else {
        result.push(i)
      }
    }
    return result
  }
  ,

  flattenDeep: (array) => {
    var result = []
    for (var item of array) {
      if (Array.isArray(item)) {
        var sz = sakuzyovo.flattenDeep(item)
        for (var a of sz) {
          result.push(a)
        }
      }
      else {
        result.push(item)
      }
    }
    return result
  }
  ,
  flattenDepth: (array, depth = 1) => {
    if (depth == 0) {
      return array.slice()
    }
    var result = []
    for (var item of array) {
      if (Array.isArray(item)) {
        var sz = sakuzyovo.flattenDeep(item, depth - 1)
        for (var a of sz) {
          result.push(a)
        }
      }
      else {
        result.push(item)
      }
    }
    return result
  }
}
