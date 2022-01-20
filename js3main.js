// localStorage.clear()
const segment3 = document.querySelector(".item3");
const segment4 = document.querySelector(".item4");
const segment5 = document.querySelector(".item5");
const segment6 = document.querySelector(".item6");

const createForm = () => {
  const listForm = document.createElement("form");

  listForm.setAttribute("class", "listform");

  const record = document.createElement("input");
  record.setAttribute("class", "inner");
  listForm.appendChild(record);

  const add = document.createElement("input");
  add.setAttribute("value", "Add");
  add.setAttribute("class", "pusher");
  add.setAttribute("type", "button");
  const save = document.createElement("input");
  save.setAttribute("value", "Save");
  save.setAttribute("class", "saver");
  save.setAttribute("type", "button");
  listForm.appendChild(add);
  listForm.appendChild(save);
  add.addEventListener("click", (e) => {
    let data = e.target.parentElement.parentElement.querySelector(".list");
    if (!data) {
      data = document.createElement("ul");
      data.setAttribute("class", "list");
      e.target.parentElement.parentElement.appendChild(data);
    }

    addRecord(record.value, data, counter);
    counter++;
  });

  save.addEventListener("click", (e) => {
    let records = listForm.parentElement.querySelectorAll(".list span");
    records = Array.from(records);
    records = records.map((e) => e.innerHTML);
    localStorage.setItem(
      "seg " + listForm.parentElement.className,
      records.join(";")
    );
  });

  return listForm;
};

let out = document.createElement("p", 'class="output"');

let isShown = false;

const button = document.querySelector("button.execute");

const button2 = document.querySelector("input.count");
const inner = document.querySelector(".argument");
const form = document.querySelector(".max");
const radio = document.querySelector("input[value=bold]");
const radio2 = document.querySelector("input[value=thin]");
const cookie = document.cookie.split(";");

let counter = 0;
const exist = [];

// Задание 1
const blockX = document.getElementById("p1");
const blockY = document.getElementById("p2");

function swapBlockInfo(block1, block2) {
  let tmp = block2.textContent;
  block2.textContent = block1.textContent;
  block1.textContent = tmp;
}

blockX.onclick = () => swapBlockInfo(blockX, blockY);
blockY.onclick = () => swapBlockInfo(blockX, blockY);

// Задание 2
function area1(a, h) {
  form1.output1.value = (a.value * h.value) / 2;
}

// Задание 3
button2.addEventListener("click", () => {
  const numbers = inner.value.split(" ");
  let max = parseInt(numbers[0]);
  let count = 0;
  for (let i = 0; i <= numbers.length; i++) {
    if (parseInt(numbers[i]) > max) {
      count = 1;
      max = parseInt(numbers[i]);
      continue;
    }

    if (parseInt(numbers[i]) == max) {
      count++;
    }
  }
  alert(count);
  document.cookie = "count=" + count;
});

for (let i = 0; i < cookie.length; i++) {
  if (cookie[i].split("=")[0].trim() == "count") {
    if (cookie[i].split("=")[1] != "0") {
      form.setAttribute("style", "display:none");
      const save = confirm(cookie[i] + ". Видалити результат?");
      if (!save) {
        alert("У вас знайдені куки, перезавантажте сторінку");
      } else {
        document.cookie = "count=0";
        window.location.reload();
      }
    }
  }
}

// Задание 4
document.getElementsByTagName("body")[0].onload = () => {
  document.getElementById("six").style.fontWeight =
    localStorage.getItem("fontWeight");
  document.getElementById("checker").checked =
    localStorage.getItem("radio") === "true";

  const cssStyles = localStorage.getItem("CSS-Styles");
  if (cssStyles === null) {
    localStorage.setItem("CSS-Styles", "");
    return;
  }
  const styles = cssStyles.split("$");
  for (let counter = 0; counter < styles.length; counter++) {
    if (styles[counter] === "null" || styles[counter].length < 2) {
      continue;
    }
    const arr = styles[counter].split(";");
    const id = arr[0];
    const style = arr[1];
    const setting = arr[2];
    addCssSetting(id, style, setting);
    alert(style);
  }
};

document.getElementById("save").onclick = () => {
  if (document.getElementById("checker").checked) {
    localStorage.setItem("fontWeight", "bold");
    localStorage.setItem("radio", "true");
    document.getElementById("six").style.fontWeight = "bold";
  } else {
    document.getElementById("six").style.fontWeight = "normal";
    localStorage.setItem("fontWeight", "normal");
    localStorage.setItem("radio", "false");
  }
};

document.getElementById("numbers").addEventListener("focus", (event) => {
  document.getElementById("six").style.fontWeight = "bold";
});


// Задание 5

function CookiesDelete() {
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    let eqPos = cookie.indexOf("=");
    let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    document.cookie =
      name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
}
const numbers = document.querySelector("#numbers");
const calculate = document.querySelector("#calculate");
const calculator = document.querySelector("#calculator");
calculate.addEventListener("click", handlerCalc);

function handlerCalc(e) {
  console.dir(numbers.value);
  const arr = numbers.value.split(",").map((el) => Number(el));
  const maxValue = arr.filter((v) => v == Math.max(...arr)).length;
  alert(maxValue);
  document.cookie = `value=${maxValue}`;
  alert("Збережено в куки");
}
let data = document.cookie;

if (data) {
  const maxValue = data.split("=")[1];
  alert(`максимальне значення${maxValue}`);
  calculator.style.display = "none";
  alert(
    `куки видаляться після натиснення кнопки ОК та перезавантажеться сторінка`
  );
  CookiesDelete();
  window.location.reload();
}
let counterEl = 0;
let colorList = "black";
const selectText = document.querySelector("#select-text");
const addText = document.querySelector("#add-text");
const listItem = document.querySelector(".list-item");

addText.addEventListener("click", addItem);

function addItem() {
  colorList === "black" ? (colorList = "white") : (colorList = "black");
  const el = selectText.value;
  const str = `<li style="color:${colorList}">${el}</li>`;
  //   console.log(str);

  listItem.insertAdjacentHTML("afterbegin", str);
  localStorage.setItem(`item${counterEl}`, el);
  localStorage.setItem(`counter`, counterEl);
  counterEl++;
}

if (localStorage.item0) {
  counterEl = Number(localStorage.getItem("counter"));
  console.log(counterEl);

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    // console.log(`${key}: ${localStorage.getItem(key)}`);
    if (key.includes("item")) {
      let localItem = localStorage.getItem(key);
      let localStr = `<li style="color:${
        colorList === "black" ? (colorList = "white") : (colorList = "black")
      }">${localItem}</li>`;
      listItem.insertAdjacentHTML("afterbegin", localStr);
    }
  }
  localStorage.setItem(`counter`, counterEl);
}
