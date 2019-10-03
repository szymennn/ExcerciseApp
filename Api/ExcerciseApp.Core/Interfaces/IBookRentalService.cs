using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Interfaces
{
    interface IBookRentalService
    {
        IEnumerable<Book> GetRentedBooks();
        IEnumerable<User> GetRentingUsers();
        void BorrowBook(int bookId, int userId);
        void PassBookIn(int bookId);
    }
}
