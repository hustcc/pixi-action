export default class Action {
  constructor() {
    this.time = 1;
    this.x = null;
    this.y = null;
    this.scale_x = null;
    this.scale_y = null;
    this.skew = null;
    this.tint = null;
    this.rotation = null;

    // this.end = false;
  }

  reset() {
    this.time = 1;
    this.x = null;
    this.y = null;
    this.scale_x = null;
    this.scale_y = null;
    this.skew = null;
    this.tint = null;
    this.rotation = null;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    // need to be override.
    if (! sprite) throw "action obejct is not valid.";
  }
}
