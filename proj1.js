//Book Class- represents book object
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UT class: UI Tasks
class UI{
    static displayBooks(){
        const StoredBooks =[{
        title: 'Book One',
        author: ' Marinara Jun',
        isbn: '3434434'

    },
    {   title: 'Book Two',
        author: 'Jane Doe',
        isbn: '45545'

    },
    ]
    const books = StoredBooks;
    books.forEach((book)=>UI.addBookToList(book))
}
static addBookToList(book){
    const list = document.getElementById('book-list');

    const row = document.createElement('tr');
    row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn-btn-danger btn-sm delete">X</a></td>`

    list.appendChild(row)}
}
//Store CLass: Storage JSON

//Events: Diplay Book, Add Book

document.addEventListener('DOMContentLoaded', UI.displayBooks)

document.querySelector('#book-form').addEventListener('submit',(e)=>{ e.preventDefault()
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    const book = new Book(title, author, isbn);
    console.log(book)
})
//Remove book;

let num1 = 23
let  num2 = 44
num3 = num1 + num2

console.log(num3)