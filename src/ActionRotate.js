import Action from './Action';

export class RotateTo extends Action {
  constructor(rotation, time) {
    super();
    this.time = time * 1000;
    this.rotation = rotation;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    let rotation = sprite.rotation;
    let speed = (this.rotation - rotation) / this.time * deltaMS;

    sprite.rotation += speed;

    this.time -= deltaMS;
    // return true / false: ended / not end
    if (this.time < 0) {
      sprite.rotation = this.rotation;
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

    this.trotation = null; // target rotation
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    let rotation = sprite.rotation;

    if (this.trotation === null) {
      this.trotation = rotation + this.rotation;
    }
  
    let speed = (this.trotation - rotation) / this.time * deltaMS;

    sprite.rotation += speed;

    this.time -= deltaMS;
    // return true / false: ended / not end
    if (this.time < 0) {
      sprite.rotation = this.trotation;
      return true;
    }
    return false;
  }
}