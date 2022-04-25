import ManageBooks from './Book_Management.js';
import { DateTime } from "./luxon.js";
const books = new ManageBooks();
export default class Ui {

   init_ui = () => {
    books.display();
    const navListBtn = document.querySelector("#nav-list");
    const navAddNewBtn = document.querySelector("#nav-add-new");
    const remove_buttons = document.querySelectorAll('button');
    const navContactBtn = document.querySelector("#nav-contact");
    const AddBtn = document.querySelector('#add_Button');
    const listSection = document.querySelector("#list");
    const addNewSection = document.querySelector("#add-new");
    const contactSection = document.querySelector("#contact");
    const lastMod = document.querySelector('#last-modified');
    lastMod.innerHTML = DateTime.now().toLocaleString();
    navListBtn.addEventListener("click", () => {
      listSection.style.display = "block";
      addNewSection.style.display = "none";
      contactSection.style.display = "none";
    });
    navAddNewBtn.addEventListener("click", () => {
      addNewSection.style.display = "block";
      listSection.style.display = "none";
      contactSection.style.display = "none";
    });
    navContactBtn.addEventListener("click", () => {
      contactSection.style.display = "block";
      addNewSection.style.display = "none";
      listSection.style.display = "none";
    });
    AddBtn.addEventListener('click', () => {
    const name = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    books.add(name, author);
  });
  remove_buttons.forEach(btn => {
    btn.addEventListener('click', () => {
    const id = Number(btn.id);
    books.delete(id);
  });
  })
   }
  
}
