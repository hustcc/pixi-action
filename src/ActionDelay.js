import Action from './Action';

export class DelayTime extends Action {
  constructor(time) {
    super();
    this.time = time * 1000;

    this.reset();
  }
  reset() {
    this._time = this.time;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    // do nothing util time is out.
    this._time -= deltaMS;
    // return true / false: ended / not end
    if (this._time <= 0) {
      this.reset();
      return true;
    }
    return false;
  }
}
