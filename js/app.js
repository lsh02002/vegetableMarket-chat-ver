let timer;

let content = [];

function getTime() {
  let today = new Date();

  let hours = today.getHours(); // 시
  let minutes = today.getMinutes(); // 분
  let seconds = today.getSeconds(); // 초

  let result = hours + ":" + minutes + ":" + seconds;

  return result;
}

function displayMemo(memo, price, message) {
  const main = document.querySelector("main");
  const div = document.createElement("div");
  //div.setAttribute("class", `"main-box-${index}"`);

  const cssText01 =
    "style = 'width: 400px; height: 60px;    display: flex;    justify-content: start;    align-items: center;   padding: 3px 0px 3px 0px; '";

  const htmlCon =
    " <div class='main-box'" +
    cssText01 +
    ">  <div class='main-ad-cart-icon'>    <img src='assets/cart.svg' alt='' />  </div>  <div class='main-ad-content'>    <div class='main-ad-message'>" +
    memo +
    "<div class='main-ad-price'>" +
    price +
    "원</div></div></div><hr />";

  div.innerHTML = htmlCon;
  main.appendChild(div);

  const div_2 = document.createElement("div");
  //div.setAttribute("class", `"main-box-${index}"`);

  const cssText_2 =
    " style= 'width: 100%;  height: 60px;  display: flex;  justify-content: start;  align-items: center;'";
  const htmlCont_2 =
    "  <div class='main-second-ask'>  <div class='main-second-ask-dcontent'>    <div class='main-second-ask-date'>" +
    getTime() +
    "</div>  </div>  <div class='main-second-ask-message'>" +
    message +
    "</div></div><div class='main-second-respond'></div> </div>';";

  div_2.innerHTML = htmlCont_2;
  main.appendChild(div_2);
}

function displayMemo_res(memo) {
  const main = document.querySelector("main");
  const div = document.createElement("div");
  //div.setAttribute("class", `"main-box-${index}"`);

  const cssText02 =
    "sytle='width: 100%;    height: 60px;      display: flex;    justify-content: start;    align-items: center;'";
  const htmlCon =
    " <div class='main-box-third'> <div class='main-third-picon'> <img src='assets/person.svg' alt='' /> </div> <div class='main-third-respond-message'>" +
    memo +
    " </div> <div class='main-third-ask-dcontent'> <div class='main-third-respond-date'>" +
    getTime() +
    "</div> </div> </div>";

  div.innerHTML = htmlCon;
  main.appendChild(div);
}

function readMemo(memo, price, message) {
  //const ul = document.querySelector("#chat-ul");  //ul.innerHTML = "";

  displayMemo(memo, price, message);
}

function readMemo_res(memo) {
  displayMemo_res(memo);
}

function createMemo(memo, price, message) {
  readMemo(memo, price, message);
}

function createMemo_res(memo) {
  readMemo_res(memo);
}

function handleSubmit(event) {
  event.preventDefault();

  const input = document.querySelector("#chat-input");
  const price = document.querySelector("#chat-price-input");
  const message = document.querySelector("#chat-message-input");

  createMemo(input.value, price.value, message.value);
  input.value = "";
}

function handleSubmit_res(event) {
  event.preventDefault();

  const input = document.querySelector("#chat-respond-input");

  createMemo_res(input.value);
  input.value = "";
}

const _form = document.querySelector("#footer-chat-sender");
_form.addEventListener("submit", handleSubmit);

const _formRes = document.querySelector("#footer-respond-chat");
_formRes.addEventListener("submit", handleSubmit_res);
