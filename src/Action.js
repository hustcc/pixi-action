export default class Action {
  constructor() {
  }
  reset() {
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    // need to be override.
    if (! sprite) throw 'Action obejct is not valid.';
  }
}
