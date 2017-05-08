import Action from './Action';

export class FadeIn extends Action {
  constructor(time) {
    super();
    this.time = time * 1000;
    this.alpha = 1;

    this.reset();
  }
  reset() {
    this._time = this.time;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    const alpha = sprite.alpha;
    const speed = (this.alpha - alpha) / this._time * deltaMS;

    sprite.alpha += speed;

    this._time -= deltaMS;
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.alpha = this.alpha;
      this.reset(); // end reset action
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
    this.reset();
  }
  reset() {
    this._time = this.time;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    const alpha = sprite.alpha;
    const speed = (this.alpha - alpha) / this._time * deltaMS;

    sprite.alpha += speed;

    this._time -= deltaMS;
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.alpha = this.alpha;
      this.reset();
      return true;
    }
    return false;
  }
}
