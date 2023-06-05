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
      if (values[i]) {
        array.push(values[i][0])
      }
    }
    return array
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
  findindex: () => {


  }
}
