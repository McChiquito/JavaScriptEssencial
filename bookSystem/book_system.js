let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value); 
    
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Por favor, completr todos los campos correctamente');
    }
}

function showbooks() {
    const booksDiv  = books.map((book, index) => `<h1> Numero de libro: ${index + 1}</h1>
        <p><strong>Nombre del libro: </strong> ${book.name}</p>
        <p><strong>Nombre del autor: </strong> ${book.authorName}</p>
        <p><strong>Descripcion del libro: </strong> ${book.bookDescription}</p>
        <p><strong>Numero de paginas: </strong> ${book.pagesNumber} pagina(s)</p>
        <button onclick="editbook(${index})">Editar</button>
        <button onclick="deleteBook(${index})">Eliminar</button> `

    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    
    books.splice(index, 1); // Elimina las estradas antiguas
    showbooks(); // Actualiza la lista
}

function deleteBook(index) {
    // Elimina el esntrada del libro dado en el Index
    books.splice(index, 1);
    showbooks(); // Actualiza la lista de libros despues de realizar la eliminacion del libro
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

