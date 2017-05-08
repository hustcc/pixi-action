import * as PIXI from 'pixi.js';
import ActionManager from './ActionManager';
import { MoveTo, MoveBy } from './ActionMove';
import { ScaleTo, ScaleBy } from './ActionScale';
import { RotateTo, RotateBy } from './ActionRotate';
import { FadeIn, FadeOut } from './ActionFade';
import { SkewTo, SkewBy } from './ActionSkew';
import { PivotTo, PivotBy } from './ActionPivot';
import { Blink } from './ActionBlink';
import { TintTo, TintBy } from './ActionTint';
import { AlphaTo, AlphaBy } from './ActionAlpha';
import { Repeat } from './ActionRepeat';
import { Sequence } from './ActionSequence';
import { Spawn } from './ActionSpawn';
import { DelayTime } from './ActionDelay';
import { CallFunc } from './ActionCallFunc';

const action = {
  ActionManager,
  MoveTo,
  MoveBy,
  ScaleTo,
  ScaleBy,
  RotateTo,
  RotateBy,
  FadeIn,
  FadeOut,
  SkewTo,
  SkewBy,
  PivotTo,
  PivotBy,
  Blink,
  TintTo,
  TintBy,
  AlphaTo,
  AlphaBy,
  Repeat,
  Sequence,
  Spawn,
  DelayTime,
  CallFunc,
};

if (!PIXI.actionManager) {
  PIXI.actionManager = new ActionManager();
  PIXI.action = action;
}
export default action;
