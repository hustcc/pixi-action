import Action from './Action';

export class SkewTo extends Action {
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
    const skew = sprite.skew;
    const speedX = (this.x - skew.x) / this._time * deltaMS;
    const speedY = (this.y - skew.y) / this._time * deltaMS;

    sprite.skew.x += speedX;
    sprite.skew.y += speedY;

    this._time -= deltaMS;
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.skew.x = this.x;
      sprite.skew.y = this.y;
      this.reset();
      return true;
    }
    return false;
  }
}

export class SkewBy extends Action {
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
    const skew = sprite.skew;
    if (this.tx === null || this.ty === null) {
      this.tx = skew.x + this.x;
      this.ty = skew.y + this.y;
    }

    const speedX = (this.tx - skew.x) / this._time * deltaMS;
    const speedY = (this.ty - skew.y) / this._time * deltaMS;

    sprite.skew.x += speedX;
    sprite.skew.y += speedY;

    this._time -= deltaMS;
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.skew.x = this.tx;
      sprite.skew.y = this.ty;
      this.reset();
      return true;
    }
    return false;
  }
}
