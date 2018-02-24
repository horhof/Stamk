class Stack {
  private _data: any[]

  constructor(data = []) {
    this.set(data)
  }

  get size() {
    return this._data.length
  }

  fromEnd(offset = 0) {
    return this._data[this.size - offset]
  }

  write(data: any[]) {
    this._data = data
  }

  set(value: any, offset = 0) {
    this._data[offset] = value
  }

  move() {
  }

  roll() {
  }

  rotate() {
  }

  unrotate() {
  }

  swap() {
    const ult = this.fromEnd()
    const pen = this.fromEnd(1)
    this.set(this.size, pen)
    this.set(this.size - 1, ult)
  }

  copy() {
  }

  dupe() {
  }
}