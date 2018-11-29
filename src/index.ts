export class Stikstak<T> {
  private _data: T[]

  constructor(data = [] as T[]) {
    this.write(data)
  }

  get size() {
    return this._data.length
  }

  get ultimate() {
    return this.fromEnd()
  }

  get penultimate() {
    return this.fromEnd(1)
  }

  fromEnd(offset = 0) {
    return this._data[this.size - offset]
  }

  write(data: T[]) {
    this._data = data
  }

  set(value: T, offset = 0) {
    this._data[offset] = value
  }

  move(source: number, destination: number) {
  }

  roll(x: number) {
  }

  rotate() {
  }

  unrotate() {
  }

  swap() {
    this.set(this.penultimate, this.size)
    this.set(this.ultimate, this.size - 1)
  }

  copy(x: number) {
  }

  dup() {
  }
}