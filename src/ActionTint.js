import Action from './Action';

export class TintTo extends Action {
  constructor(tint, time) {
    super();
    this.time = time * 1000;
    this.tint = tint;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    let tint = sprite.tint;
    let speed = (this.tint - tint) / this.time * deltaMS;

    sprite.tint += speed;

    this.time -= deltaMS;
    // return true / false: ended / not end
    if (this.time < 0) {
      sprite.tint = this.tint;
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
    this.ttint = null;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    let tint = sprite.tint;
    if (this.ttint === null) {
      this.ttint = tint + this.tint;
    }

    let speed = (this.ttint - tint) / this.time * deltaMS;

    sprite.tint += speed;

    this.time -= deltaMS;
    // return true / false: ended / not end
    if (this.time < 0) {
      sprite.tint = this.ttint;
      return true;
    }
    return false;
  }
}