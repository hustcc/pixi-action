import Action from './Action';

export class ScaleTo extends Action {
  constructor(scaleX, scaleY, time) {
    super();
    this.time = time * 1000;
    this.x = scaleX;
    this.y = scaleY;

    this.reset();
  }
  reset() {
    this._time = this.time;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    // 最终的动画逻辑
    const scale = sprite.scale;
    const scaleX = (this.x - scale.x) / this._time * deltaMS;
    const scaleY = (this.y - scale.y) / this._time * deltaMS;

    sprite.scale.x += scaleX;
    sprite.scale.y += scaleY;

    this._time -= deltaMS;
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.scale.x = this.x;
      sprite.scale.y = this.y;
      this.reset();
      return true;
    }
    return false;
  }
}

export class ScaleBy extends Action {
  constructor(scaleX, scaleY, time) {
    super();
    this.time = time * 1000;
    this.x = scaleX;
    this.y = scaleY;

    this.reset();
  }
  reset() {
    this._time = this.time;
    this.tx = null; // target scale x
    this.ty = null; // target scale y
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    const scale = sprite.scale;
    if (this.tx === null || this.ty === null) {
      this.tx = scale.x + this.x;
      this.ty = scale.y + this.y;
    }

    const speedX = (this.tx - scale.x) / this._time * deltaMS;
    const speedY = (this.ty - scale.y) / this._time * deltaMS;

    sprite.scale.x += speedX;
    sprite.scale.y += speedY;

    this._time -= deltaMS;
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.scale.x = this.tx;
      sprite.scale.y = this.ty;
      this.reset();
      return true;
    }
    return false;
  }
}
