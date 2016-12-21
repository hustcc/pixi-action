export default class Action {
  constructor() {
    this.time = 1000;
    this.x = null;
    this.y = null;
    this.sx = null;
    this.sy = null;
    this.skew = null;
    this.tint = null;
    this.rotation = null;
    this.alpha = null;
  }

  reset() {
    this.time = 1000;
    this.x = null;
    this.y = null;
    this.sx = null;
    this.sy = null;
    this.skew = null;
    this.tint = null;
    this.rotation = null;
    this.alpha = null;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    // need to be override.
    if (! sprite) throw "action obejct is not valid.";
  }
}
