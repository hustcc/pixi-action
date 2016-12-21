import PIXI from'pixi.js';
import ActionManager from './ActionManager';
import {MoveTo, MoveBy} from './ActionMove';
import {ScaleTo, ScaleBy} from './ActionScale';
import {RotateTo, RotateBy} from './ActionRotate';
import {FadeIn, FadeOut} from './ActionFade';
import {SkewTo, SkewBy} from './ActionSkew';
import {PivotTo, PivotBy} from './ActionPivot';
import {Blink} from './ActionBlink';

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
  SkewBy: SkewBy,

  PivotTo: PivotTo,
  PivotBy: PivotBy,

  Blink: Blink,
};

if(!PIXI.actionManager){
  PIXI.actionManager = new ActionManager();

  PIXI.action = action;
}
export default action;