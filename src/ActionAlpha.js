import Action from './Action';

export class AlphaTo extends Action {
  constructor(alpha, time) {
    super();
    this.time = time * 1000;
    this.alpha = alpha;
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

export class AlphaBy extends Action {
  constructor(alpha, time) {
    super();
    this.time = time * 1000;
    this.alpha = alpha;
    this.reset();
  }
  reset() {
    this._time = this.time;
    this.talpha = null;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    const alpha = sprite.alpha;
    if (this.talpha === null) {
      this.talpha = alpha + this.alpha;
    }

    const speed = (this.talpha - alpha) / this._time * deltaMS;

    sprite.alpha += speed;

    this._time -= deltaMS;
    // return true / false: ended / not end
    if (this._time <= 0) {
      sprite.alpha = this.talpha;
      this.reset();
      return true;
    }
    return false;
  }
}
