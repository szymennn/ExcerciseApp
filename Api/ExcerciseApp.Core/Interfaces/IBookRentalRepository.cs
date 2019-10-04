using ExcerciseApp.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Interfaces
{
    public interface IBookRentalRepository
    {
        Borrow RentBook(Borrow borrow, int userId);
        void PassBookIn(int bookId);
        IEnumerable<int> GetRentedBooksIds();
        IEnumerable<int> GetUserBooksIds(int userId);
        IEnumerable<Borrow> GetUserBorrowHistory(int userId);
        IEnumerable<Borrow> GetBookBorrowHistory(int bookId);
        bool IsRented(int bookId);
    }
}
