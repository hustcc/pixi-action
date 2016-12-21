export default class Action {
  constructor() {
  }

  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    // need to be override.
    if (! sprite) throw "action obejct is not valid.";
  }
}
