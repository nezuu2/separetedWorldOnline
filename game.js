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
                titleDraw(con);
            }
            return;
        }
    });

    titleDraw(con);
});

function init () {
}

function BGdraw (con) {
    con.fillStyle = 'black';
    con.fillRect(0, 0, SCREEN_SX, SCREEN_SY)
    return
}

function titleDraw (con) {
    BGdraw(con);

    if (!startf) {
        con.textBaseline = 'alphabetic';
        con.textAlign = 'center';
        con.fillStyle = 'white';

        con.font = "48px consolas";
        con.fillText(TITLE, SCREEN_SX / 2, SCREEN_SY / 4);
        // for(i=0;i<10;i++){
        //     con.fillText(TITLE, SCREEN_SX / i, SCREEN_SY / 4);
        //     sleep(1000);
        // }

        con.font = "32px consolas";
        con.fillText('> ' + TEXT_START + ' <', SCREEN_SX / 2, SCREEN_SY / 4 * 3);

        return;
    }
}

// ビジーwaitを使う方法
function sleep(waitMsec) {
  var startMsec = new Date();
 
  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}