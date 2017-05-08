import Action from './Action';

export class Blink extends Action {
  constructor(count, time) {
    super();

    this.time = time * 1000;
    this.count = count;

    this.reset();
  }
  reset() {
    this._count = this.count * 2;
    this._gap = this.time / this._count; // 每次的时间
    this._timer = 0;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    // const visible = sprite.visible;

    if (this._timer <= 0) {
      // toggle
      sprite.visible = !sprite.visible;
      this._timer = this._gap;
      this._count --;
    } else {
      this._timer -= deltaMS;
    }
    // return true / false: ended / not end
    if (this._count <= 0) {
      this.reset();
      return true;
    }
    return false;
  }
}
