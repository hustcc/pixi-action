import Action from './Action';

export class PivotTo extends Action {
  constructor(x, y, time) {
    super();
    this.time = time * 1000;
    this.x = x;
    this.y = y;

    this.reset();
  }
  reset() {
    this._time = this.time;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    let pivot = sprite.pivot;
    let speed_x = (this.x - pivot.x) / this._time * deltaMS;
    let speed_y = (this.y - pivot.y) / this._time * deltaMS;

    sprite.pivot.x += speed_x;
    sprite.pivot.y += speed_y;

    this._time -= deltaMS;
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.pivot.x = this.x;
      sprite.pivot.y = this.y;

      this.reset();
      return true;
    }
    return false;
  }
}

export class PivotBy extends Action {
  constructor(x, y, time) {
    super();
    this.time = time * 1000;
    this.x = x;
    this.y = y;

    this.reset();
  }
  reset() {
    this._time = this.time;
    this.tx = null; // target x
    this.ty = null; // target y
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    let pivot = sprite.pivot;
    if (this.tx === null || this.ty === null) {
      this.tx = pivot.x + this.x;
      this.ty = pivot.y + this.y;
    }

    let speed_x = (this.tx - pivot.x) / this._time * deltaMS;
    let speed_y = (this.ty - pivot.y) / this._time * deltaMS;

    sprite.pivot.x += speed_x;
    sprite.pivot.y += speed_y;

    this._time -= deltaMS;
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.pivot.x = this.tx;
      sprite.pivot.y = this.ty;
      this.reset();
      return true;
    }
    return false;
  }
}