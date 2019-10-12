using AutoMapper;
using ExcerciseApp.Core.Entities;
using ExcerciseApp.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using ExcerciseApp.Core.Dtos;

namespace ExcerciseApp.Api.Controllers
{
    [Route("books")]
    [ApiController]
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
            var booksModel = _mapper.Map<IEnumerable<BookDetailsApiModel>>(books);
            return Ok(booksModel);
        }

        [HttpPost]
        public IActionResult AddBook(BookBindingModel bookModel)
        {
            var book = _mapper.Map<Book>(bookModel);
            var books = _bookInventory.AddBook(book, bookModel.BookGenre);
            var addedBookModel = _mapper.Map<IEnumerable<BookDetailsApiModel>>(books);
            return Ok(addedBookModel);
        }

        [HttpPut("{bookId}")]
        public IActionResult EditBook(BookBindingModel bookModel, [FromRoute] int bookId)
        {
            var book = _mapper.Map<Book>(bookModel);
            var updatedBook = _bookInventory.EditBook(book, bookId);
            var updatedBookModel = _mapper.Map<BookDetailsApiModel>(updatedBook);
            return Ok(updatedBookModel);
        }

        [HttpGet("details/{bookId}")]
        public IActionResult GetBookDetails([FromRoute] int bookId)
        {
            var bookDetails = _bookInventory.GetBookDetails(bookId);
            var bookDetailsModel = _mapper.Map<BookDetailsApiModel>(bookDetails);
            return Ok(bookDetailsModel);
        }
    }
}
