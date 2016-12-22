import PIXI from'pixi.js';
import ActionManager from './ActionManager';
import {MoveTo, MoveBy} from './ActionMove';
import {ScaleTo, ScaleBy} from './ActionScale';
import {RotateTo, RotateBy} from './ActionRotate';
import {FadeIn, FadeOut} from './ActionFade';
import {SkewTo, SkewBy} from './ActionSkew';
import {PivotTo, PivotBy} from './ActionPivot';
import {Blink} from './ActionBlink';
import {TintTo, TintBy} from './ActionTint';
import {Repeat} from './ActionRepeat';
import {Sequence} from './ActionSequence';
import {Delay} from './ActionDelay';

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

  TintTo: TintTo,
  TintBy: TintBy,

  Repeat: Repeat,

  Sequence: Sequence,

  Delay: Delay,
};

if(!PIXI.actionManager){
  PIXI.actionManager = new ActionManager();

  PIXI.action = action;
}
export default action;