using ExcerciseApp.Core.Entities;
using ExcerciseApp.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Services
{
    public class BookRentalService : IBookRentalService
    {
        private IBookRentalRepository _rentalRepository;

        public BookRentalService(IBookRentalRepository rentalRepository)
        {
            _rentalRepository = rentalRepository;
        }

        public IEnumerable<Book> GetRentedBooks()
        {
            return _rentalRepository.GetRentedBooks();
        }

        public IEnumerable<User> GetRentingUsers()
        {
            return _rentalRepository.GetRentingUsers();
        }

        public void PassBookIn(int bookId)
        {
            _rentalRepository.PassBookIn(bookId);
        }

        public Borrow RentBook(Borrow borrow, int userId)
        {
            return _rentalRepository.RentBook(borrow, userId);
        }
    }
}
