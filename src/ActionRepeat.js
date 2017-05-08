import Action from './Action';

export class Repeat extends Action {
  constructor(action, count) {
    super();
    this.action = action;
    this.count = count;

    this.reset();
  }
  reset() {
    this._count = this.count;
    // 无效数字的时候，为无穷大
    if (!this._count) this._count = Infinity;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    const isEnd = this.action.update(sprite, delta, deltaMS);
    if (isEnd) {
      this.action.reset();
      this._count = this._count - 1;
    }
    // 循环结束
    if (this._count <= 0) {
      this.reset();
      return true;
    }
    return false;
  }
}
