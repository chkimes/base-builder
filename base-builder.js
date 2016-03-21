var tileRoot = document.querySelector('#base-builder .tile-container');
for(var i = 0; i < 20; i++) {
    for(var j = 0; j < 20; j++) {
        var el = document.createElement("div");
        el.style.left = (j*40) + 'px';
        el.style.top = (i*40) + 'px';
        el.innerHTML = i + ',' + j;
        el.className = 'cell';
        tileRoot.appendChild(el);
    }
}

var moveLeft,moveUp,moveRight,moveDown = false;
var handleKey = function(isDown, keyCode)
{
    if (keyCode == 65) {
        moveLeft = isDown;
    } else if (keyCode == 87) {
        moveUp = isDown;
    } else if (keyCode == 68) {
        moveRight = isDown;
    } else if (keyCode == 83) {
        moveDown = isDown;
    }
}
document.addEventListener("keydown", function(e) { handleKey(true, e.keyCode); });
document.addEventListener("keyup", function(e) { handleKey(false, e.keyCode); });

setInterval(function() {
    if (moveLeft)
        console.log('left');
    if (moveUp)
        console.log('up');
    if (moveRight)
        console.log('right');
    if (moveDown)
        console.log('down');
}, 16);
