using AutoMapper;
using ExcerciseApp.Core.Dtos;
using ExcerciseApp.Core.Entities;
using ExcerciseApp.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ExcerciseApp.Api.Controllers
{
    [Route("books")]
    public class BooksController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IBookInventoryService _bookInventory;

        public BooksController(IMapper mapper, IBookInventoryService bookInventory)
        {
            _mapper = mapper;
            _bookInventory = bookInventory;
        }

        [HttpGet]
        public IActionResult GetAllBooks()
        {
            var books = _bookInventory.GetAll();
            var booksModel = _mapper.Map<IEnumerable<BookApiModel>>(books);
            return Ok(booksModel);
        }

        [HttpPost]
        public IActionResult AddBook([FromBody] BookBindingModel bookModel)
        {
            var book = _mapper.Map<Book>(bookModel);
            var addedBook = _bookInventory.AddBook(book);
            var addedBookModel = _mapper.Map<BookApiModel>(addedBook);
            return Ok(addedBookModel);
        }

        [HttpPut("{bookId}")]
        public IActionResult EditBook([FromBody] BookBindingModel bookModel, [FromRoute] int bookId)
        {
            var book = _mapper.Map<Book>(bookModel);
            var updatedBook = _bookInventory.EditBook(book, bookId);
            var updatedBookModel = _mapper.Map<BookApiModel>(updatedBook);
            return Ok(updatedBookModel);
        }

        [HttpGet("{bookId}")]
        public IActionResult GetBookDetails([FromRoute] int bookId)
        {
            var bookDetails = _bookInventory.GetBookDetails(bookId);
            var bookDetailsModel = _mapper.Map<BookDetailsApiModel>(bookDetails);
            return Ok(bookDetailsModel);
        }

    }
}
