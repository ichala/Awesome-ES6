import SingleBook from './Book.js';
export default class ManageBooks {
    constructor() {
      this.book_list = localStorage.getItem('save')
        ? JSON.parse(localStorage.getItem('save')) : [];
    }
  
    display = ()=> {
      const BookList = document.querySelector('#book-list');
      if (this.book_list) {
        this.book_list.forEach((book) => {
          const NewBook = ` 
         <p>"${book.name}" by ${book.author}</p>
         <button type="button" id=${book.id} >Remove</button>
         `;
          const Singlebook = document.createElement('div');
          Singlebook.classList.add('single-book');
          Singlebook.innerHTML = NewBook;
          BookList.appendChild(Singlebook);
        });
      }
    }
  
    add = (name, author) => {
      let id = 0;
      if (this.book_list.length > 0) {
        id = this.book_list[this.book_list.length - 1].id + 1;
      }
      const NewBook = new SingleBook(id, name, author);
      this.book_list.push(NewBook);
      this.LocalSave(this.book_list);
    }
  
    LocalSave = (arr) => {
      localStorage.setItem('save', JSON.stringify(arr));
      location.reload();
    }
  
    delete = (id) => {
      this.book_list = this.book_list.filter((book) => {
        if (id === book.id) {
          return false;
        }
        return true;
      });
      this.LocalSave(this.book_list);
    }
  }