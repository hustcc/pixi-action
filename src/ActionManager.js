import PIXI from'pixi.js';

class Animation extends PIXI.utils.EventEmitter {
  constructor(sprite, action) {
    super();
    this._id = Math.random() + new Date().getTime() + '';
    this.sprite = sprite;
    this.action = action;

    this._started = false;
    this._ended = false;
    this._active = false;
  }

  update(delta, deltaMS) {
    if (! this._started) {
      // start event
      this.emit('start', deltaMS);
      this._started = true;
      this._active = true;
    }

    // do some update
    this._ended = this.action.update(this.sprite, delta, deltaMS);

    if (this._ended && this._active) {
      // end event
      this.emit('end', deltaMS);
      this._active = false;
    }
  }

  isEnded() {
    return this._ended;
  }
}

export default class ActionManager {
  constructor() {
    this.actions = {}; // the actions need to be done.
    this._actionsToDelete = [];

    this._last = 0;
  }

  update(delta) {
    let deltaMS;
    // calculate deltaMS
    if(!delta && delta !== 0) {
      // 如果没有指定 delta 时间
      deltaMS = this._getDeltaMS();
      delta = deltaMS / 1000;
    } else {
      // 如果指定时间，则直接使用
      deltaMS = delta * 1000;
    }
    // 先循环执行动作.
    for(let _id in this.actions) {
      let animation = this.actions[_id];
      // 更新 action
      animation.update(delta, deltaMS);
      // if action is end, remove it.
      if(animation.isEnded()) {
        this._actionsToDelete.push(animation);
      }
    }

    // 后删除已经结束，或者终止的动作
    if(this._actionsToDelete.length) {
      for(let i = 0; i < this._actionsToDelete.length; i ++) {
        this._remove(this._actionsToDelete[i]);
      }
      this._actionsToDelete.length = 0;
    }
  }

  // run action
  runAction(sprite, action) {
    // add into actions to be done.
    let animation = new Animation(sprite, action)
    this.actions[animation._id] = animation;
    return animation;
  }

  // cancel action
  cancelAction(animation) {
    // add into to be deleted.
    this._actionsToDelete.push(animation);
  }

  _remove(animation) {
    delete(this.actions[animation._id]); 
  }

  // 获得两个 frame 之间的时间，用于后续进行动作计算
  _getDeltaMS() {
    if(this._last === 0) this._last = Date.now();
    let now = Date.now();
    let deltaMS = now - this._last;
    this._last = now;
    return deltaMS;
  }
}
