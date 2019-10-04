using ExcerciseApp.Core.Entities;
using ExcerciseApp.Core.Interfaces;
using ExcerciseApp.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ExcerciseApp.Infrastructure.Repositories
{
    public class BookInventoryRepository : IBookInventoryRepository
    {
        private AppDbContext _context;
        public BookInventoryRepository(AppDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Book> AddBook(Book book)
        {
            _context.Books.Add(book);
            _context.SaveChanges();
            return _context.Books.ToList();
        }

        public Book EditBook(Book book, int bookId)
        {
            var bookToEdit = _context.Books.Find(bookId);
            bookToEdit.Author = book.Author;
            bookToEdit.Count = book.Count;
            bookToEdit.ISBN = book.ISBN;
            bookToEdit.ModifiedDate = DateTime.Now;
            bookToEdit.ReleaseDate = book.ReleaseDate;
            bookToEdit.Title = book.Title;
            bookToEdit.BookGenreId = book.BookGenreId;
            return bookToEdit;
        }

        public IEnumerable<Book> GetAll()
        {
            return _context.Books.ToList();
        }

        public Book GetBookById(int bookId)
        {
            return _context.Books.Find(bookId);
        }
    }
}
