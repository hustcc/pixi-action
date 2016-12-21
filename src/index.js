import PIXI from'pixi.js';
import ActionManager from './ActionManager';
import {MoveTo, MoveBy} from './ActionMove';
import {ScaleTo, ScaleBy} from './ActionScale';
import {RotateTo, RotateBy} from './ActionRotate';
import {FadeIn, FadeOut} from './ActionFade';
import {SkewTo, SkewBy} from './ActionSkew';

let action = {
  ActionManager: ActionManager,
  MoveTo: MoveTo,
  MoveBy: MoveBy,

  ScaleTo: ScaleTo,
  ScaleBy: ScaleBy,

  RotateTo: RotateTo,
  RotateBy: RotateBy,

  FadeIn: FadeIn,
  FadeOut: FadeOut,

  SkewTo: SkewTo,
  SkewBy: SkewBy
};

if(!PIXI.actionManager){
  PIXI.actionManager = new ActionManager();

  PIXI.action = action;
}
export default action;