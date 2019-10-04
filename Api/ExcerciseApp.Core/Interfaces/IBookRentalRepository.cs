using ExcerciseApp.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Interfaces
{
    public interface IBookRentalRepository
    {
        IEnumerable<Book> GetRentedBooks();
        IEnumerable<User> GetRentingUsers();
        Borrow RentBook(Borrow borrow, int userId);
        void PassBookIn(int bookId);
        IEnumerable<Book> GetUserBooks(int userId);
    }
}
