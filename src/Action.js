export default class Action {
  constructor() {
    // nothing
  }
  reset() {
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    // need to be override.
    if (!sprite) throw new Error('Action obejct is not valid.');
  }
}
