using ExcerciseApp.Core.Entities;
using System.Collections.Generic;

namespace ExcerciseApp.Core.Interfaces
{
    public interface IBookRentalService
    {
        IEnumerable<Book> GetRentedBooks();
        IEnumerable<User> GetRentingUsers();
        Borrow RentBook(Borrow borrow);
        void PassBookIn(int bookId);
    }
}
