import Action from './Action';

export class Sequence extends Action {
  constructor(actions) {
    super();
    this.actions = actions;

    this.reset();
  }
  reset() {
    this._index = 0;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    if (this._index >= this.actions.length) {
      return true; // 所有 action 结束
    }
    let action = this.actions[this._index];

    let isEnd = action.update(sprite, delta, deltaMS);
    if (isEnd) {
      action.reset();
      this._index ++;
    }
    return false;
  }
}