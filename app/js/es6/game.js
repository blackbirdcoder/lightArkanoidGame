'use strict';

let game = {
  ctx: null,
  ball: null,
  platform: null,
  sprites: {
    background: null,
    ball: null,
    platform: null,
    block: null,
  },
  init: function() {
    this.ctx = document.getElementById('gamecanvas').getContext('2d');
  },
  preload( callback ) {
    let loaded = 0;
    let required = Object.keys( this.sprites ).length;

    let onImageLoad = () => {
      ++loaded;
      if ( loaded >= required ) {
        callback();
      }
    };

    for ( let key in this.sprites ) {
      this.sprites[key] = new Image();
      this.sprites[key].src = 'img/' + key + '.png';
      this.sprites[key].addEventListener('load', onImageLoad);
    }
  },
  run() {
    window.requestAnimationFrame(() => {
      this.render();
      });
    },
  render() {
    this.ctx.drawImage( this.sprites.background, 0, 0 );
    this.ctx.drawImage( this.sprites.ball, 0, 0, this.ball.width, this.ball.height, this.ball.x, this.ball.y, this.ball.width, this.ball.height );
    this.ctx.drawImage( this.sprites.platform, this.platform.x, this.platform.y );
    this.ctx.drawImage( this.sprites.block, 0, 0 );
  },
  start: function() {
    this.init();
    this.preload(() => {
      this.run();
    });
  }
};
game.ball = {
  x: 320,
  y: 280,
  width: 20,
  height: 20,
}
game.platform = {
  x: 280,
  y: 300,
};
window.addEventListener('load', () => {
  game.start();
});
