using ExcerciseApp.Core.Entities;
using ExcerciseApp.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ExcerciseApp.Core.Services
{
    public class BookRentalService : IBookRentalService
    {
        private readonly IBookRentalRepository _rentalRepository;
        private readonly IBookInventoryRepository _inventoryRepository;
        private readonly IUserRepository _userRepository;

        public BookRentalService(IBookRentalRepository rentalRepository, IBookInventoryRepository inventoryRepository, IUserRepository userRepository)
        {
            _rentalRepository = rentalRepository;
            _inventoryRepository = inventoryRepository;
            _userRepository = userRepository;
        }

        public IEnumerable<Book> GetRentedBooks()
        {
            var rentedBooksIds = _rentalRepository.GetRentedBooksIds();
            return GetBooksByIds(rentedBooksIds);
        }

        public IEnumerable<User> GetRentingUsers()
        {
            var usersIds = _rentalRepository.GetRentingUsersIds();
            return GetUsersByIds(usersIds);
        }

        public Book RentBook(Borrow borrow)
        {
            _rentalRepository.RentBook(borrow);
            return _inventoryRepository.GetBookById(borrow.BookId);
        }
        public IEnumerable<Book> PassBookIn(int bookId)
        {
            return GetBooksByIds(_rentalRepository.PassBookIn(bookId));
        }

        private IEnumerable<Book> GetBooksByIds(IEnumerable<int> booksIds)
        {
            return booksIds.Select(bookId => _inventoryRepository.GetBookById(bookId)).ToList();
        }

        private IEnumerable<User> GetUsersByIds(IEnumerable<int> usersIds)
        {
            return usersIds.Select(userId => _userRepository.GetUserById(userId)).ToList();
        }


    }
}
