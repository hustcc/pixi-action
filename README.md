# pixi-action

> **pixi-action** is a plugin for [Pixi.js](https://github.com/pixijs/pixi.js) to create actions and animations easily. API inspired by **Cocos2d-x**. Online demo [here](http://git.hust.cc/pixi-action/).

[![Build Status](https://travis-ci.org/hustcc/pixi-action.svg?branch=master)](https://travis-ci.org/hustcc/pixi-action) [![npm](https://img.shields.io/npm/v/pixi-action.svg?style=flat-square)](https://www.npmjs.com/package/pixi-action) [![npm](https://img.shields.io/npm/dt/pixi-action.svg?style=flat-square)](https://www.npmjs.com/package/pixi-action) [![npm](https://img.shields.io/npm/l/pixi-action.svg?style=flat-square)](https://www.npmjs.com/package/pixi-action)


## 1. Install

> **npm install pixi-action**

`require` it, or import it with `script` tag, all is OK.


## 2. Usage

Code just like below.

```js
var renderer = new PIXI.autoDetectRenderer(800,600);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();

var sprite1 = new Sprite(resources['res/img/animal.png'].texture);

var action_move = new PIXI.action.MoveTo(500, 400, 2);

var animation = PIXI.actionManager.runAction(cat, action_moveto);
animation.on('end', function(elapsed) {
  console.log('action end.');
});

function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(stage);
  PIXI.actionManager.update(); // update actions
}
animate();
```


## 3. How it works

This plugin add a new namespace named **`action`** to the PIXI namespace, and the action namespace has 2 new classes, **ActionManager** and **Action**, and create an instance for ActionManager in PIXI.actionManager, but all you need is add `PIXI.actionManager.update()` in your requestAnimationFrame. You can pass as params for `PIXI.actionManager.update(delta)` your own delta time, if you don't pass anything it will be calculated internally. 

For max accuracy calculating the delta time you can use the [AnimationLoop](https://github.com/Nazariglez/pixi-animationloop/) plugin.

When a action is started, or ended, it will fire events named `start` / `end`.


## 4. Using AnimationLoop

```js
var renderer = new PIXI.autoDetectRenderer(800,600);
document.body.appendChild(renderer.view);

var animationLoop = new PIXI.AnimationLoop(renderer);

//Add a postrender or prerender event to add the timer.update in the raf.
animationLoop.on('postrender', function() {
  PIXI.actionManager.update(this.delta); //Pass as param the delta time to PIXI.timerManager.update
});

animationLoop.start();
```


## 5. Events

TimerManager extends from [PIXI.utils.EventEmitter](https://github.com/primus/eventemitter3), and emit some events: start, end, repeat, update and stop. More info: [Node.js Events](https://nodejs.org/api/events.html#events_emitter_emit_event_arg1_arg2)

- **start - callback(elapsedTime)**: Fired when the action starts.
- **end - callback(elapsedTime)**: Fired when the action is ended.


## 6. Actions & Animations

Now **pixi-action** supported actions / animations below. You can just combine them for complex actions.

 - [x] **ActionMove**

> PIXI.action.MoveTo(x, y, time);
> PIXI.action.MoveBy(x, y, time);

 - [x] **ActionScale**

> PIXI.action.ScaleTo(x, y, time);
> PIXI.action.ScaleBy(x, y, time);

 - [x] **ActionRotate**

> PIXI.action.RotateTo(rotation, time);
> PIXI.action.RotateBy(rotation, time);

 - [x] **ActionBlink**

> PIXI.action.Blink(count, time);

 - [x] **ActionFade**

> PIXI.action.FadeIn(time);
> PIXI.action.FadeOut(time);

 - [x] **ActionSkew**

> PIXI.action.SkewTo(x, y, time);
> PIXI.action.SkewBy(x, y, time);

 - [x] **ActionPivot**

> PIXI.action.PivotTo(x, y, time);
> PIXI.action.PivotBy(x, y, time);

 - [x] **ActionTint**

> PIXI.action.TintTo(tint, time);
> PIXI.action.TintBy(tint, time);

 - [x] **ActionAlpha**

> PIXI.action.AlphaTo(alpha, time);
> PIXI.action.AlphaBy(alpha, time);

 - [x] **ActionSequence**

> PIXI.action.Sequence(actions);

 - [X] **ActionRepeat**

> PIXI.action.Repeat(action, count);

 - [x] **repeatForever**

> PIXI.action.Repeat(action);

 - [x] **ActionDelay**

> PIXI.action.DelayTime(time);

 - [x] **ActionCallFunc**

> PIXI.action.CallFunc(func);



## 7. API

 - **PIXI.actionManager.runAction(object, action)**: run action on an object, return an animation, can `on` the events.
 -  **PIXI.actionManager.cancelAction(AnimationObject)**: cancel the animation.
 - **new PIXI.action.*(args)**: create an action.
  

## LICENSE

MIT@[hustcc](https://github/com/hustcc). Welcome to **`Submit Pull Request`**.