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
            //TODO: implement that
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetRentingUsers()
        {
            //TODO: AMD THAT
            throw new NotImplementedException();
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
