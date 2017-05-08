import Action from './Action';

export class Spawn extends Action {
  constructor(actions) {
    super();
    this.actions = actions;

    this.reset();
  }
  reset() {
    // this._index = 0;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    if (!this.actions || !this.actions.length) {
      return true; 
    }
    let result = true;
    for(var i = this.actions.length -1 ; i >=0;i--){
        let action = this.actions[i];

        let isEnd = action.update(sprite, delta, deltaMS);
        if (isEnd) {
          action.reset();
          this.actions.splice(i,1);
        }else{
          result = false;
        }
    }
    
    return result;
  }
}