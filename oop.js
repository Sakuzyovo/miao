class Complex {
  constructor(real, imag) {
    this.real = real
    this.imag = imag
  }
  plus(c) {
    var real = this.real + c.real
    var imag = this.imag + c.imag
    return new Complex(real, imag)
  }
  minus(c) {
    var real = this.real - c.real
    var imag = this.imag - c.imag
    return new Complex(real, imag)
  }
  mul(c) {
    var real = this.real * c.real - this.imag * c.imag
    var imag = this.real * c.imag + this.imag * c.real
    return new Complex(real, imag)
  }
  div(c) {
    var helper = new Complex(c.real, -c.imag)
    var up = this.mul(helper)
    var down = c.mul(helper)
    var real = up.real / down.real
    var imag = up.imag / down.real
    return new Complex(real, imag)
  }
}
class Stack {
  constructor() {
    this.head = null
    this.nodeCount = 0
  }
  push(val) {
    var node = {
      val, next: null
    }
    this.nodeCount++
    if (this.head == null) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
  }
  pop() {
    if (this.head == null) {
      return undefined
    }
    this.nodeCount--
    var result = this.head.val
    this.head = this.head.next
    return result
  }
  get size() {
    return this.nodeCount
  }


}

class Vector {

  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(vector) {
    var x = this.x + vector.x
    var y = this.y + vector.y
    return new Vector(x, y)
  }
  minus(vector) {
    var x = this.x - vector.x
    var y = this.y - vector.y
    return new Vector(x, y)
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}


class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  append(val) {
    var node = {
      val, next: null
    }
    if (this.head == null) {
      this.head = this.tail = node
      return
    } else {
      this.tail.next = node
      this.tail = node
      return
    }
  }
  prepend(val) {
    var node = {
      val, next: null
    }
    if (this.head == null) {
      this.head = this.tail = node
      return
    } else {
      node.next = this.head
      this.head = node
      return
    }
  }
  at(idx) {
    var p = this.head
    var count = 0
    while (count < idx) {
      p = p.next
      count++
    }
    return p.val
  }
  get size() {
    var p = this.head
    var l = 0
    while (p) {
      l++
      p = p.next
    }
    return l
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.nodeCount = 0
  }

  add(val) {
    var node = {
      val, next: null
    }
    if (this.head == null) {
      this.head = this.tail = node
    }

    this.tail.next = node
    this.tail = node
    this.nodeCount++
  }
  pop() {
    if (this.head == null) {
      return
    }
    this.nodeCount--

    if (this.head == this.tail) {
      var result = this.head.val
      this.head = this.tail = null
      return result
    }

    var result = this.head.val
    this.head = this.head.next
    return result
  }
  get size() {
    return this.nodeCount
  }
}

class MySet {
  constructor() {
    this.MyMap = new MyMap()
  }

  add(key, val) {
    return this.MyMap.set(key, val)
  }

  get(key) {
    return this.MyMap.get(key)
  }

  has(key) {
    return this.MyMap.has(key)
  }

  delete(val) {
    return this.MyMap.delete(val)
  }

  get size() {
    return this.MyMap.size
  }
}

class MyMap {
  constructor() {
    this._keys = []
    this._vals = []
  }
  set(key, val) {
    var keyIdx = this._keys.indexOf(key)
    if (keyIdx >= 0) {
      this._vals[keyIdx] = val
    } else {
      this._keys.push(key)
      this._vals.push(val)
    }
    return this
  }

  get(key) {
    var keyIdx = this._keys.indexOf(key)
    if (keyIdx >= 0) {
      return this._vals[keyIdx]
    }
  }

  has(key) {
    if (this._keys.includes(key)) {
      return true
    } else {
      return false
    }
  }
  delete(key) {
    var keyIdx = this._keys.indexOf(key)
    if (keyIdx >= 0) {
      this._keys.splice(keyIdx, 1)
      this._vals.splice(keyIdx, 1)
      return true
    }
    return false
  }
  get size() {
    return this._keys.length
  }
}


class PriorityQueue {
  constructor(initials = [], predicate = (it) => it) {
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function,got:' + predicate)
    }
    this._elements = []
    this._predicate = predicate
    for (var item of initials) {
      this.push(item)
    }
  }
  _swap(i, j) {
    var t = this._elements[i]
    this._elements[i] = this._elements[j]
    this._elements[j] = t
  }
  _heapup(pos) {
    if (pos == 0) {
      return
    }
    var predicate = this._predicate
    var parentpos = (pos - 1) >> 1
    if (predicate(this._elements[pos]) > predicate(this._elements[parentpos])) {
      this._swap(pos, parentpos)
      this._headup(parentpos)
    }
  }
  _heapDown(pos) {
    var leftpos = 2 * pos + 1
    var right = 2 * pos + 2
    var maxidx = pos
    var predicate = this._predicate
    if (leftpos < this._elements.length && predicate(this._elements[leftpos]) > predicate(this._elements[maxidx])) {
      maxidx = leftpos

    }
    if (rightpos < this._elements.length && predicate(this._elements[rightpos]) > predicate(this._elements[maxidx])) {
      maxidx = rightpos
    }
    if (maxidx !== pos) {
      this._swap(maxidx, pos)
      this._heapDown(maxidx)
    }
  }
  push(val) {
    this._elements.push(val)
    this, _headup(this._elements.length - 1)
    return this
  }
  pop() {
    if (this._elements.length == 0) {
      return undefined
    }
    if (this._elements.length == 1) {
      return this, this._elements.pop()
    }
    var result = this._elements[0]
    var last = this._elements.pop()
    this._elements[0] = last
    this._heapDown(0)
    return result
  }
  peek() {
    return this._elements[0]
  }
  get size() {
    return this._elements.length
  }
}

function heapify(ary) {
  var start = (ary.length - 1) >> 1
  for (var i = start; i >= 0; i--) {
    _heapDown(ary, i)
  }
  return ary
}

function heapSort(ary) {
  heapify(ary)
  for (var i = ary.length - 1; i > 0; i--) {
    swap(ary, i, 0)
    _heapDown(ary, 0, i)
  }
  return ary
}