// アルバデータの作成
let album = [
  {src: 'img/1.jpg', msg: 'Hotelでパチリ'},
  {src: 'img/2.jpg', msg: 'Hotelでパチリ'},
  {src: 'img/3.jpg', msg: 'ディズニーランド到着'},
  {src: 'img/4.jpg', msg: '集合写真'},
  {src: 'img/5.jpg', msg: ''},
  {src: 'img/6.jpg', msg: ''},
  {src: 'img/7.jpg', msg: ''},
  {src: 'img/8.jpg', msg: ''},
  {src: 'img/9.jpg', msg: ''},
  {src: 'img/10.jpg', msg: ''},
  {src: 'img/11.jpg', msg: ''},
  {src: 'img/12.jpg', msg: ''},
  {src: 'img/13.jpg', msg: ''},
  {src: 'img/14.jpg', msg: ''},
  {src: 'img/15.jpg', msg: ''},
  {src: 'img/16.jpg', msg: ''},
  {src: 'img/17.jpg', msg: ''},
  {src: 'img/18.jpg', msg: ''},
  {src: 'img/19.jpg', msg: ''},
  {src: 'img/20.jpg', msg: ''},
  {src: 'img/21.jpg', msg: ''},
  {src: 'img/22.jpg', msg: ''},
  {src: 'img/23.jpg', msg: ''},
  {src: 'img/24.jpg', msg: ''},
  {src: 'img/25.jpg', msg: ''},
  {src: 'img/26.jpg', msg: ''},
  {src: 'img/27.jpg', msg: ''},
  {src: 'img/28.jpg', msg: ''},
  {src: 'img/29.jpg', msg: ''},
  {src: 'img/30.jpg', msg: ''},
  {src: 'img/31.jpg', msg: ''},
  {src: 'img/32.jpg', msg: ''},
  {src: 'img/33.jpg', msg: ''},
  {src: 'img/34.jpg', msg: ''},
  {src: 'img/35.jpg', msg: ''},
  {src: 'img/36.jpg', msg: ''},
  {src: 'img/37.jpg', msg: ''},
  {src: 'img/38.jpg', msg: ''},
  {src: 'img/39.jpg', msg: ''},
  {src: 'img/40.jpg', msg: ''},
  {src: 'img/41.jpg', msg: ''},
  {src: 'img/42.jpg', msg: ''},
  {src: 'img/43.jpg', msg: ''},
  {src: 'img/44.jpg', msg: ''},
  {src: 'img/45.jpg', msg: ''},
  {src: 'img/46.jpg', msg: ''},
  {src: 'img/47.jpg', msg: ''},
  {src: 'img/48.jpg', msg: ''},
  {src: 'img/49.jpg', msg: ''},
  {src: 'img/50.jpg', msg: ''},
  {src: 'img/51.jpg', msg: ''},
  {src: 'img/52.jpg', msg: ''},
  {src: 'img/53.jpg', msg: ''},
  {src: 'img/54.jpg', msg: ''},
  {src: 'img/55.jpg', msg: ''},
  {src: 'img/56.jpg', msg: ''},
  {src: 'img/57.jpg', msg: ''},
  {src: 'img/58.jpg', msg: ''},
  {src: 'img/59.jpg', msg: ''},
  {src: 'img/60.jpg', msg: ''},
  {src: 'img/61.j3pg', msg: ''},
  {src: 'img/62.jpg', msg: ''},
  {src: 'img/63.jpg', msg: ''},
  {src: 'img/64.jpg', msg: ''},
  {src: 'img/65.jpg', msg: ''},
  {src: 'img/66.jpg', msg: ''},
  {src: 'img/67.jpg', msg: ''},
  {src: 'img/68.jpg', msg: ''},
  {src: 'img/69.jpg', msg: ''},
  {src: 'img/70.jpg', msg: ''},
  {src: 'img/71.jpg', msg: ''}

];

// 最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main')
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル写真画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
  let thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlame.insertBefore(thumbImage, null);
}

// クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
  }
});