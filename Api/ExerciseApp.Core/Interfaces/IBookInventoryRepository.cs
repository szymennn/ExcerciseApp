using ExcerciseApp.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Interfaces
{
    public interface IBookInventoryRepository
    {
        IEnumerable<Book> GetAll();
        IEnumerable<Book> AddBook(Book book, string bookGenre);
        Book EditBook(Book book, int bookId);
        Book GetBookById(int bookId);
    }
}
