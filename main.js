/* ローディング画面を追加するやつ */
// window.onload = function() {
//   var load_element = document.createElement('div');
//   load_element.id = 'loading';
//   document.body.appendChild(load_element);

//   var spinner_element = document.createElement('div');
//   spinner_element.classList.add("spinner");
//   load_element.appendChild(spinner_element);

//   const spinner = document.getElementById('loading');
//   spinner.classList.add('loaded');
// }
/*document.getElementById('password').innerHTML = "00332255";*/
/*document.getElementById('password2').innerHTML = "00332255";*/

document.getElementById('discord').innerHTML = "<mark>申し訳ございません。現在開発中のためご参加いただけません。</mark>";
document.getElementById('discord2').innerHTML = "<mark>現在開発中のためルールをご確認いただけません。</mark>";
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
    document.getElementsById("bi-moon").classList.add("bi-moon-fill");
    documents.getElementById("text-muted").style.color = "red" ;
  } else {
    // ライトモード
    document.body.classList.remove("dark-theme");
  }
});

// 翻訳
// const glot = new Glottologist();
// const h1 = document.querySelector("a");
// const btn2 = document.querySelector("#btn-mode2");
// btn2.addEventListener("change", () => {
//   if (btn2.checked == true) {
//     // 付与時
//     glot.t( h1.textContent, 'en' ).then( result => {
//       h1.textContent = result;
//     })
//   } else {
//     // 解除時
//   }
// });