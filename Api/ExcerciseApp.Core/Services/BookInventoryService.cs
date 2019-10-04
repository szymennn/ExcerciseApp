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

        public BookInventoryService(IBookInventoryRepository booksRepository)
        {
            _inventoryRepository = booksRepository;
        }

        public Book AddBook(Book book)
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
            return _inventoryRepository.GetBookDetails(bookId);
        }
    }
}
