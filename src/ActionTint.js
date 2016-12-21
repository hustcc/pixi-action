import Action from './Action';

export class TintTo extends Action {
  constructor(tint, time) {
    super();
    this.time = time * 1000;
    this.tint = tint;
    this.reset();
  }
  reset() {
    this._time = this.time;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    let tint = sprite.tint;
    let speed = (this.tint - tint) / this._time * deltaMS;

    sprite.tint += speed;

    this._time -= deltaMS;
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.tint = this.tint;
      this.reset();
      return true;
    }
    return false;
  }
}

export class TintBy extends Action {
  constructor(tint, time) {
    super();
    this.time = time * 1000;
    this.tint = tint;
    
    this.reset();
  }
  reset() {
    this._time = this.time;
    this.ttint = null;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    let tint = sprite.tint;
    if (this.ttint === null) {
      this.ttint = tint + this.tint;
    }

    let speed = (this.ttint - tint) / this._time * deltaMS;

    sprite.tint += speed;

    this._time -= deltaMS;
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.tint = this.ttint;
      this.reset();
      return true;
    }
    return false;
  }
}