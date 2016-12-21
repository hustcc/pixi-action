import Action from './Action';

export class ScaleTo extends Action {
  constructor(scale_x, scale_y, time) {
    super();
    this.time = time * 1000;
    this.x = scale_x;
    this.y = scale_y;

    this.reset();
  }
  reset() {
    this._time = this.time;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    // 最终的动画逻辑
    let scale = sprite.scale;
    let speed_x = (this.x - scale.x) / this._time * deltaMS;
    let speed_y = (this.y - scale.y) / this._time * deltaMS;

    sprite.scale.x += speed_x;
    sprite.scale.y += speed_y;

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
  constructor(scale_x, scale_y, time) {
    super();
    this.time = time * 1000;
    this.x = scale_x;
    this.y = scale_y;

    this.reset();
  }
  reset() {
    this._time = this.time;
    this.tx = null; // target scale x
    this.ty = null; // target scale y
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    let scale = sprite.scale;
    if (this.tx === null || this.ty === null) {
      this.tx = scale.x + this.x;
      this.ty = scale.y + this.y;
    }

    let speed_x = (this.tx - scale.x) / this._time * deltaMS;
    let speed_y = (this.ty - scale.y) / this._time * deltaMS;

    sprite.scale.x += speed_x;
    sprite.scale.y += speed_y;

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