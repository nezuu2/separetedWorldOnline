/*document.getElementById('password').innerHTML = "00332255";*/
/*document.getElementById('password2').innerHTML = "00332255";*/

document.getElementById('discord').innerHTML = "<mark>申し訳ございません。<br>現在開発中のためDiscordをご確認いただけません。</mark>";
document.getElementById('discord2').innerHTML = "<mark>申し訳ございません。現在開発中のためルールをご確認いただけません。</mark>";
/*document.getElementById('discord').innerHTML = "https://discord.com/channels/836901574076268545/836948443243085885";*/
/*document.getElementById('discord2').innerHTML = "https://discord.com/channels/836901574076268545/836948443243085885";*/
/*document.getElementById("discord").href = "https://discord.com/channels/836901574076268545/836948443243085885";*/
/*document.getElementById("discord2").href = "https://discord.com/channels/836901574076268545/836948443243085885";*/

// チェックボックスの取得
const btn = document.querySelector("#btn-mode");
 
// チェックした時の挙動
btn.addEventListener("change", () => {
  if (btn.checked == true) {
    // ダークモード
    document.body.classList.add("dark-theme");
    var result = $('.bi, .bi-moon').css( 'bi-moon-fill' );
    // var result = $('.bi-moon').addClass('bi-moon-fill');
    // var result = $('.bi-moon').removeClass('bi-moon');
  } else {
    // ライトモード
    document.body.classList.remove("dark-theme");
    // var result = $('.bi-moon-fill').addClass('bi-moon');
    // var result = $('.bi-moon-fill').removeClass('bi-moon-fill');
  }
});