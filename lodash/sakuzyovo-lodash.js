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
  ,
  propertyOf: (str) => {
    var i = 0
    return parseValue()

    function parseValue() {
      var char = str[i]
      if (char == '{') {
        return parseObject()
      }
      if (char == '[') {
        return parseArray()
      }
      if (char == '"') {
        return parseString()
      }
      if (char == 't') {
        var token = str.slice(i, i + 4)
        if (token == 'true') {
          i += 4
          return true
        } else {
          throw new SyntaxError(`在${i}的位置遇到了错误的token`)
        }
      }
      if (char == 'f') {
        var token = str.slice(i, i + 5)
        if (token == 'false') {
          i += 5
          return false
        } else {
          throw new SyntaxError(`在${i}的位置遇到了错误的token`)
        }
      }
      if (char == 'n') {
        var token = str.slice(i, i + 4)
        if (token == 'null') {
          i += 4
          return true
        } else {
          throw new SyntaxError(`在${i}的位置遇到了错误的token`)
        }
      }
      return parseNumber()
    }


    function parseNumber() {
      var start = i
      while (str[i] >= '0' && str[i] <= '9') {
        i++
      }
      return Number(str.slice(start, i))
    }

    function parseString() {
      i++
      var start = i
      while (str[i] !== '"' && i < str.length) {
        i++
      }
      if (str[i] !== '"') {
        throw new SyntaxError(`未结束的字符串，它的起点为` + start)
      }
      var end = i
      i++
      return str.slice(start, end)
    }

    function parseArray() {
      var result = []
      i++
      if (str[i] == ']') {
        i++
        return result

      }
      while (i < str.length) {
        var value = parseValue()
        result.push(value)
        if (str[i] == ',') {
          i++
          continue
        }
        if (str[i] == ']') {
          i++
          break
        }
      }
      return result
    }
    function parseObject() {
      var result = {}
      i++
      skipSpace()
      if (str[i] == '}') {
        i++
        return result
      }
      while (i < str.length) {
        var name = parseString()
        skipSpace()
        i++
        skipSpace()
        var value = parseValue()
        result[name] = value
        if (str[i] == ',') {
          i++
          continue
        }
        if (str[i] == '}') {
          i++
          break
        }
      }
      return result
    }
    function skipSpace() {
      while (str[i] == ' ' || str[i] == '\n' || str[i] == '\t' || str[i] == '\r') {
        i++
      }
      return
    }
  }
}


