import Action from './Action';

export class RotateTo extends Action {
  constructor(rotation, time) {
    super();
    this.time = time * 1000;
    this.rotation = rotation;

    this.reset();
  }
  reset() {
    this._time = this.time;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    const rotation = sprite.rotation;
    const speed = (this.rotation - rotation) / this._time * deltaMS;

    sprite.rotation += speed;

    this._time -= deltaMS;
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.rotation = this.rotation;
      this.reset();
      return true;
    }
    return false;
  }
}

export class RotateBy extends Action {
  constructor(rotation, time) {
    super();
    this.time = time * 1000;
    this.rotation = rotation;

    this.reset();
  }
  reset() {
    this._time = this.time;
    this.trotation = null; // target rotation
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    const rotation = sprite.rotation;

    if (this.trotation === null) {
      this.trotation = rotation + this.rotation;
    }
    const speed = (this.trotation - rotation) / this._time * deltaMS;

    sprite.rotation += speed;

    this._time -= deltaMS;
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.rotation = this.trotation;
      this.reset();
      return true;
    }
    return false;
  }
}
