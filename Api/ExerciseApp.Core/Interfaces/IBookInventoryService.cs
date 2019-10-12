using ExcerciseApp.Core.Entities;
using System.Collections.Generic;

namespace ExcerciseApp.Core.Interfaces
{
    public interface IBookInventoryService
    {
        IEnumerable<BookDetails> GetAll();
        IEnumerable<BookDetails> AddBook(Book book, string bookGenre);
        BookDetails EditBook(Book book, int bookId);
        BookDetails GetBookDetails(int bookId);
        Book GetBookById(int bookId);
    }
}
