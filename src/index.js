import PIXI from'pixi.js';
import ActionManager from './ActionManager';
import {MoveTo, MoveBy} from './ActionMove';

let action = {
  ActionManager: ActionManager,
  MoveTo: MoveTo,
  MoveBy: MoveBy
};

if(!PIXI.actionManager){
  PIXI.actionManager = new ActionManager();

  PIXI.action = action;
}
export default action;