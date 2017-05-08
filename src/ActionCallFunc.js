import Action from './Action';

export class CallFunc extends Action {
  constructor(func) {
    super();
    this.func = func || function () {};

    this.reset();
  }
  reset() {
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    this.func();
    // 直接完之后结束
    this.reset();
    return true;
  }
}
