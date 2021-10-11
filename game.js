// LOADING画面を追加するやつ
window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

// ↓ ここからゲーム本体のソース ↓
var TITLE = 'WELCOME';
var TEXT_START = 'Press z key';

var SCREEN_SX = 1600;
var SCREEN_SY = 800;

var startf = false;

$(function(){
    var canvas = document.getElementById('game');
    var con = canvas.getContext('2d');

    var c = $('body');
    c.on('keydown', function (e) {
        if (!startf) {
            if (e.keyCode === 90) {
                startf = true;
                init();
                draw(con);
            }
            return;
        }
    });

    draw(con);
});

function init () {
}

function draw (con) {
    con.fillStyle = 'black';
    con.fillRect(0, 0, SCREEN_SX, SCREEN_SY);

    if (!startf) {
        con.textBaseline = 'alphabetic';
        con.textAlign = 'center';
        con.fillStyle = 'white';

        con.font = "48px consolas";
        con.fillText(TITLE, SCREEN_SX / 2, SCREEN_SY / 4);

        con.font = "32px consolas";
        con.fillText('> ' + TEXT_START + ' <', SCREEN_SX / 2, SCREEN_SY / 4 * 3);

        return;
    }
}