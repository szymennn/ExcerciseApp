using ExcerciseApp.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Interfaces
{
    public interface IBookInventoryRepository
    {
        IEnumerable<Book> GetAll();
        Book AddBook(Book book);
        Book EditBook(Book book, int bookId);
        BookDetails GetBookDetails(int bookId);
        Book GetBookById(int bookId);
    }
}
