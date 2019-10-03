using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Interfaces
{
    interface IBookInventoryService
    {
        IEnumerable<Book> GetAll();
        IEnumerable<Book> AddBook(Book book);
        Book EditBook(Book book, int bookId);
        BookDetails GetBookDetails(int bookId);

    }
}
