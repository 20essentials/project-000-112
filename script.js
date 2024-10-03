console.groupCollapsed("Reference ⬇️");
console.log(
  "Texture",
  "https://i0.wp.com/textures.world/wp-content/uploads/2018/10/8-Classic-Floor-Tile-Background-Texture-copy.jpg?ssl=1"
);
console.log(
  "Keyboards",
  "https://static.vecteezy.com/system/resources/previews/012/222/212/original/3d-rendering-arrow-keyboard-keys-isolated-png.png"
);
console.groupEnd();

const $ = (el) => document.querySelector(el);
const $longWay = $(".long-way");

let i = 0;
let j = 40;
const MOVE = 0.4;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    $longWay.style.setProperty("--x", `${(i += MOVE)}deg`);
    console.log(i);
  }
  if (e.key === "ArrowRight") {
    $longWay.style.setProperty("--x", `${(i -= MOVE)}deg`);
    console.log(i);
  }
  if (e.key === "ArrowUp") {
    $longWay.style.setProperty("--y", `${(j += MOVE)}deg`);
    console.log(i);
  }
  if (e.key === "ArrowDown") {
    $longWay.style.setProperty("--y", `${(j -= MOVE)}deg`);
    console.log(i);
  }
});

setTimeout(() => {
  document.title = "In Pc you can use ⬆️⬇️⬅️➡️";
  $('link[rel="shortcut icon"').href = "assets/keys.png";
}, 4000);
