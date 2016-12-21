import Action from './Action';

export class ScaleTo extends Action {
  constructor(scale_x, scale_y, time) {
    super();
    this.time = time * 1000;
    this.sx = scale_x;
    this.sy = scale_y;
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    // 最终的动画逻辑
    let scale = sprite.scale;
    let speed_x = (this.sx - scale.x) / this.time * deltaMS;
    let speed_y = (this.sy - scale.y) / this.time * deltaMS;

    sprite.scale.x += speed_x;
    sprite.scale.y += speed_y;

    this.time -= deltaMS;
    // return true / false: ended / not end
    if (this.time < 0) {
      sprite.scale.x = this.sx;
      sprite.scale.y = this.sy;
      return true;
    }
    return false;
  }
}

export class ScaleBy extends Action {
  constructor(scale_x, scale_y, time) {
    super();
    this.time = time * 1000;
    this.sx = scale_x;
    this.sy = scale_y;

    this.tsx = null; // target scale x
    this.tsy = null; // target scale y
  }
  // if end return true, if not end return false
  update(sprite, delta, deltaMS) {
    let scale = sprite.scale;
    if (this.tsx === null || this.tsy === null) {
      this.tsx = scale.x + this.sx;
      this.tsy = scale.y + this.sy;
    }

    let speed_x = (this.tsx - scale.x) / this.time * deltaMS;
    let speed_y = (this.tsy - scale.y) / this.time * deltaMS;

    sprite.scale.x += speed_x;
    sprite.scale.y += speed_y;

    this.time -= deltaMS;
    // return true / false: ended / not end
    if (this.time < 0) {
      sprite.scale.x = this.tsx;
      sprite.scale.y = this.tsy;
      return true;
    }
    return false;
  }
}