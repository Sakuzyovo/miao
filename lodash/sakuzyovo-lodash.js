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
    for (var i = 0; i < values.length; i++) {
      array.push(values[i][0])
    }
    return array
  },
  difference: function (array, brray) {

    for (var i = 0, j = 0; i < array.length, j < brray.length; i++, j++) {
      [1, 2][2, 3]

    }
  }
}