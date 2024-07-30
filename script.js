// Display and add book logics
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
        tableRow.setAttribute("class", "book-item");

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
        changeStateBtn.addEventListener("click", () => {
          let index= idCell.textContent;
          if (myLibrary[index].isRead === "yes") {
            myLibrary[index].isRead = "no";
          }
          else {
            myLibrary[index].isRead = "yes";
          }
          resetBookListDisplayed();
          displayAllBook();
        })
        changeStateCell.appendChild(changeStateBtn);

        let deteleCell = document.createElement("td");
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        // Delete book from myLibrary array by index
        // Remove all book on page
        // Display book in myLibrary again
        deleteBtn.addEventListener("click", () => {
          let index = myLibrary.textContent;
          myLibrary.splice(index, 1);
          resetBookListDisplayed();
          displayAllBook();
        })
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

function resetBookListDisplayed() {
  booklist.innerHTML = "";
}

let booklist = document.querySelector("#books-list");
let harryPotter = new Book("Harry Potter", "J. K. Rowling", 1300, "yes");
let onePiece = new Book("One Piece", "Oda", 10000, "no");

addBookToLibrary(harryPotter);
addBookToLibrary(onePiece);
displayAllBook();

// Dialog logic
let newBookBtn = document.querySelector("#show-dialog");
let submitBtn = document.querySelector("#submit-btn");
let cancelBtn = document.querySelector("#cancel-btn");
let formDialog = document.querySelector("#form-dialog");

// Get value form input then add it to myLibrary array
// Reset Books displayed to prevent display book has been displayed
// After reset display all book in library again
submitBtn.addEventListener("click", (e) => {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let isRead = document.querySelector("input[name='isRead']:checked").value;

  let newBook = new Book(title, author, pages, isRead);
  console.log(title, author, pages, isRead);

  addBookToLibrary(newBook);
  resetBookListDisplayed();
  displayAllBook();
})

// Open dialog when add new book
newBookBtn.addEventListener("click", () => {
  formDialog.showModal();
})

// Close dialog when don't want add book anymore
cancelBtn.addEventListener("click", () => {
  formDialog.close();
})