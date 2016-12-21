import Action from './Action';

export class FadeIn extends Action {
  constructor(time) {
    super();
    this.time = time * 1000;
    this.alpha = 1;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    let alpha = sprite.alpha;
    let speed = (this.alpha - alpha) / this.time * deltaMS;

    sprite.alpha += speed;

    this.time -= deltaMS;
    // return true / false: ended / not end
    if (this.time < 0) {
      sprite.alpha = this.alpha;
      return true;
    }
    return false;
  }
}

export class FadeOut extends Action {
  constructor(time) {
    super();
    this.time = time * 1000;
    this.alpha = 0;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    let alpha = sprite.alpha;
    let speed = (this.alpha - alpha) / this.time * deltaMS;

    sprite.alpha += speed;

    this.time -= deltaMS;
    // return true / false: ended / not end
    if (this.time < 0) {
      sprite.alpha = this.alpha;
      return true;
    }
    return false;
  }
}