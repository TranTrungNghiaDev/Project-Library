const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayAllBook() {
    let count = 0;

    myLibrary.forEach(book => {
        let tableRow = document.createElement("tr");

        let idCell = document.createElement("td");
        idCell.textContent = count;
        let titleCell = document.createElement("td");
        titleCell.textContent = book.title;
        let authorCell = document.createElement("td");
        authorCell.textContent = book.author;
        let pagesCell = document.createElement("td");
        pagesCell.textContent = book.pages;
        let isReadCell = document.createElement("td");
        isReadCell.textContent = book.isRead;

        let changeStateCell = document.createElement("td");
        let changeStateBtn = document.createElement("button");
        changeStateBtn.textContent = "Change State";
        changeStateCell.appendChild(changeStateBtn);

        let deteleCell = document.createElement("td");
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deteleCell.appendChild(deleteBtn);

        tableRow.appendChild(idCell);
        tableRow.appendChild(titleCell);
        tableRow.appendChild(authorCell);
        tableRow.appendChild(pagesCell);
        tableRow.appendChild(isReadCell);
        tableRow.appendChild(changeStateCell);
        tableRow.appendChild(deteleCell);

        booklist.appendChild(tableRow);
        count++;
    });
}

let booklist = document.querySelector("#books-list");
let harryPotter = new Book("Harry Potter", "J. K. Rowling", 1300, "Not yet");
let onePiece = new Book("One Piece", "Oda", 10000, "readed");

addBookToLibrary(harryPotter);
addBookToLibrary(onePiece);
displayAllBook();