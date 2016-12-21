import Action from './Action';

export class PivotTo extends Action {
  constructor(x, y, time) {
    super();
    this.time = time * 1000;
    this.x = x;
    this.y = y;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    let pivot = sprite.pivot;
    let speed_x = (this.x - pivot.x) / this.time * deltaMS;
    let speed_y = (this.y - pivot.y) / this.time * deltaMS;

    sprite.pivot.x += speed_x;
    sprite.pivot.y += speed_y;

    this.time -= deltaMS;
    // return true / false: ended / not end
    if (this.time < 0) {
      sprite.pivot.x = this.x;
      sprite.pivot.y = this.y;
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

    let speed_x = (this.tx - pivot.x) / this.time * deltaMS;
    let speed_y = (this.ty - pivot.y) / this.time * deltaMS;

    sprite.pivot.x += speed_x;
    sprite.pivot.y += speed_y;

    this.time -= deltaMS;
    // return true / false: ended / not end
    if (this.time < 0) {
      sprite.pivot.x = this.tx;
      sprite.pivot.y = this.ty;
      return true;
    }
    return false;
  }
}