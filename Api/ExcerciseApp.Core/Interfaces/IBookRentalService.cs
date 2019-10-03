using ExcerciseApp.Core.Entities;
using System.Collections.Generic;

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
