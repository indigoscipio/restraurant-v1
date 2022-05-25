let content = document.querySelector("#content");

export default function loadContentMenu() {
  content.innerHTML = "";
  console.log("Content Menu is fully loaded!!");
  let menu = document.createElement("div");
  menu.classList.add("content-menu");
  menu.innerHTML = `
  <h2 class="heading-2">Our Finest Menu Yet ⭐⭐⭐</h2>
  <div class="menu-card">
    <img src="../src/Images/image-1.jpg" alt="" />
    <h3 class="heading-3">Restaurant Menu 1</h3>
    <p class="paragraph">
      Lorem ipsum dolor snt ipsa repudiandae quisquam accusantium,
      explicabo commodi labore soluta temporibus ad possimus?
    </p>
  </div>
  <div class="menu-card">
    <img src="../src/Images/image-1.jpg" alt="" />
    <h3 class="heading-3">Restaurant Menu 1</h3>
    <p class="paragraph">
      Lorem ipsum dolor sit amet ipsa repudiandae quisquam accusantium,
      explicabo commodi labore soluta temporibus ad possimus?
    </p>
  </div>
  <div class="menu-card">
    <img src="../src/Images/image-1.jpg" alt="" />
    <h3 class="heading-3">Restaurant Menu 1</h3>
    <p class="paragraph">
      Lorem ipsum dolor sit amet consecepudiandae quisquam accusantium,
      explicabo commodi labore soluta temporibus ad possimus?
    </p>
  </div>
  <div class="menu-card">
    <img src="../src/Images/image-1.jpg" alt="" />
    <h3 class="heading-3">Restaurant Menu 1</h3>
    <p class="paragraph">
      Lorem ipsum dolor sit amet nt ipsa repudiandae quisquam accusantium,
      explicabo commodi labore soluta temporibus ad possimus?
    </p>
  </div>
  <div class="menu-card">
    <img src="../src/Images/image-1.jpg" alt="" />
    <h3 class="heading-3">Restaurant Menu 1</h3>
    <p class="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
      deserunt excepturi quae! Tempore recusandae doloribus
    </p>
  </div>
  <div class="menu-card">
    <img src="../src/Images/image-1.jpg" alt="" />
    <h3 class="heading-3">Restaurant Menu 1</h3>
    <p class="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
      deserunt excepturi quae! Tempore recusandae doloribus
    </p>
  </div>`;
  content.append(menu);
}
