using ExcerciseApp.Core.Entities;
using System.Collections.Generic;

namespace ExcerciseApp.Core.Interfaces
{
    public interface IBookInventoryService
    {
        IEnumerable<Book> GetAll();
        IEnumerable<Book> AddBook(Book book);
        Book EditBook(Book book, int bookId);
        BookDetails GetBookDetails(int bookId);
        Book GetBookById(int bookId);
    }
}
