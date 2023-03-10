//GASのAPIのURL（各自変更してください。）
const endpoint =
  "https://script.google.com/macros/s/AKfycbwBqrFIJ5wto-tsRUUcgKdehuqoAvL71WL8KhzZ3sjjmp5_mc-uySDC4qkumVJg0_bqdw/exec";

//APIを使って非同期データを取得する
fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    // JSONから配列に変換
    const object = data;
    // objectの内容をmenu1クラスの要素に表示する
    const menu1_h2 = document.querySelector(".menu1 h2");
    menu1_h2.textContent = object[0].title;
    const menu1_h3 = document.querySelector(".menu1 h3");
    menu1_h3.textContent = object[0].time;
    const menu1_h4 = document.querySelector(".menu1 h4");
    menu1_h4.textContent = object[0].season;
    const menu1_h5 = document.querySelector(".menu1 h5");
    menu1_h5.textContent = object[0].country;

    const menu2_h2 = document.querySelector(".menu2 h2");
    menu2_h2.textContent = object[1].title;
    const menu2_h3 = document.querySelector(".menu2 h3");
    menu2_h3.textContent = object[1].time;
    const menu2_h4 = document.querySelector(".menu2 h4");
    menu2_h4.textContent = object[1].season;
    const menu2_h5 = document.querySelector(".menu2 h5");
    menu2_h5.textContent = object[1].country;
  });
