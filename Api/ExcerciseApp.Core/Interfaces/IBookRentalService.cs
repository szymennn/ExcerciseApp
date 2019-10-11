using ExcerciseApp.Core.Entities;
using System.Collections.Generic;

namespace ExcerciseApp.Core.Interfaces
{
    public interface IBookRentalService
    {
        IEnumerable<Book> GetRentedBooks();
        IEnumerable<User> GetRentingUsers();
        Book RentBook(Borrow borrow);
        IEnumerable<Book> PassBookIn(int bookId);
    }
}
