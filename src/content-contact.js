let content = document.querySelector("#content");

export default function loadContentContact() {
  console.log("Content Contact is fully loaded!!");
  content.innerHTML = "";
  let contact = document.createElement("div");
  contact.classList.add("content-home");
  contact.innerHTML = `
  <h2 class="heading-2">Contact Us!!</h2>
  <p class="paragraph">📞 +1234 56 789</p>
  <p class="paragraph">🏠 Hollywood Boulevard 4444</p>
  <img src="../src/Images/image-1.jpg" alt="" />`;
  content.append(contact);
}
