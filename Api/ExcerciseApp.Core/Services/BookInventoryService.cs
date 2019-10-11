using ExcerciseApp.Core.Entities;
using ExcerciseApp.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace ExcerciseApp.Core.Services
{
    public class BookInventoryService : IBookInventoryService
    {
        private readonly IBookInventoryRepository _inventoryRepository;
        private readonly IBookRentalRepository _rentalRepository;
        private readonly IGenresRepository _genresRepository;

        public BookInventoryService(IBookInventoryRepository booksRepository, IBookRentalRepository rentalRepository, IGenresRepository genresRepository)
        {
            _inventoryRepository = booksRepository;
            _rentalRepository = rentalRepository;
            _genresRepository = genresRepository;
        }

        public IEnumerable<BookDetails> AddBook(Book book, string bookGenre)
        {
            return GetBooksDetails(_inventoryRepository.AddBook(book, bookGenre));
        }

        public BookDetails EditBook(Book book, int bookId)
        {
            return GetDetails(_inventoryRepository.EditBook(book, bookId).Id);
        }

        public IEnumerable<BookDetails> GetAll()
        {
            return GetBooksDetails(_inventoryRepository.GetAll().ToList());
        }

        public Book GetBookById(int bookId)
        {
            return _inventoryRepository.GetBookById(bookId);
        }

        public BookDetails GetBookDetails(int bookId)
        {
            return GetDetails(bookId);
        }

        private IEnumerable<BookDetails> GetBooksDetails(IEnumerable<Book> books)
        {
            var booksDetails = new List<BookDetails>();
            foreach (var book in books)
            {
                booksDetails.Add(GetDetails(book.Id));
            }
            return booksDetails;
        }

        private BookDetails GetDetails(int bookId)
        {
            var book = _inventoryRepository.GetBookById(bookId);
            return new BookDetails
            {
                Id = book.Id,
                Author = book.Author,
                Title = book.Title,
                ReleaseDate = book.ReleaseDate,
                ISBN = book.ISBN,
                Count = book.Count,
                AddDate = book.AddDate,
                ModifiedDate = book.ModifiedDate,
                BookGenre = _genresRepository.GetGenreName(book.BookGenreId),
                IsRented = _rentalRepository.IsRented(bookId),
                BorrowHistory = _rentalRepository.GetBookBorrowHistory(bookId)
            };
        }

    }
}
