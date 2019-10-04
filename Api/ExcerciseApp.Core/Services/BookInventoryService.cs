using ExcerciseApp.Core.Entities;
using ExcerciseApp.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Services
{
    public class BookInventoryService : IBookInventoryService
    {
        private readonly IBookInventoryRepository _inventoryRepository;
        private readonly IBookRentalRepository _rentalRepository;

        public BookInventoryService(IBookInventoryRepository booksRepository, IBookRentalRepository rentalRepository)
        {
            _inventoryRepository = booksRepository;
            _rentalRepository = rentalRepository;
        }

        public IEnumerable<Book> AddBook(Book book)
        {
            return _inventoryRepository.AddBook(book);
        }

        public Book EditBook(Book book, int bookId)
        {
            return _inventoryRepository.EditBook(book, bookId);
        }

        public IEnumerable<Book> GetAll()
        {
            return _inventoryRepository.GetAll();
        }

        public Book GetBookById(int bookId)
        {
            return _inventoryRepository.GetBookById(bookId);
        }

        public BookDetails GetBookDetails(int bookId)
        {
            var book = _inventoryRepository.GetBookById(bookId);
            return new BookDetails
            {
                Author = book.Author,
                Title = book.Title,
                ReleaseDate = book.ReleaseDate,
                ISBN = book.ISBN,
                Count = book.Count,
                AddDate = book.AddDate,
                ModifiedDate = book.ModifiedDate,
                IsRented = _rentalRepository.IsRented(bookId)
            };
        }

        
    }
}
