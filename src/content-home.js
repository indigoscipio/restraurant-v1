let content = document.querySelector("#content");

export default function loadContentHome() {
  content.innerHTML = "";
  console.log("Content Home is fully loaded!!");
  let home = document.createElement("div");
  home.classList.add("content-home");
  home.innerHTML = `
  <h2 class="heading-2">This isn't even a joke.</h2>
  <p class="paragraph">We only serve the best food. Lol</p>
  <div class="home-img"></div>`;
  content.append(home);
}
