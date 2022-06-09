// const NF = 8, 
// 			NAV_MAP = {
// 				187: { dir:  1, act: 'zoom', name: 'in' } /* + */, 
// 				 61: { dir:  1, act: 'zoom', name: 'in' } /* + WTF, FF? */, 
// 				189: { dir: -1, act: 'zoom', name: 'out' } /* - */, 
// 				173: { dir: -1, act: 'zoom', name: 'out' } /* - WTF, FF? */, 
// 				 37: { dir: -1, act: 'move', name: 'left', axis: 0 } /* ⇦ */, 
// 				 38: { dir: -1, act: 'move', name: 'up', axis: 1 } /* ⇧ */, 
// 				 39: { dir:  1, act: 'move', name: 'right', axis: 0 } /* ⇨ */, 
// 				 40: { dir:  1, act: 'move', name: 'down', axis: 1 } /* ⇩ */
// 			}, 
var ball = document.getElementById('yyy');
console.log(ball)

ball.onmousedown = function(e) { // 1. отследить нажатие

  // подготовить к перемещению
  // 2. разместить на том же месте, но в абсолютных координатах
  ball.style.position = 'absolute';
  moveAt(e);
  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.appendChild(ball);

  ball.style.zIndex = 1000; // показывать мяч над другими элементами

  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(e) {
    ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
  }

  // 3, перемещать по экрану
  document.onmousemove = function(e) {
    moveAt(e);
  }

  // 4. отследить окончание переноса
  ball.onmouseup = function() {
    document.onmousemove = null;
    ball.onmouseup = null;
  }
}
