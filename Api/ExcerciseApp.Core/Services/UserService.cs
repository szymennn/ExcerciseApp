using ExcerciseApp.Core.Entities;
using ExcerciseApp.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IBookRentalRepository _rentalRepository;
        private readonly IBookInventoryRepository _inventoryRepository;

        public UserService(IUserRepository userRepository, IBookInventoryRepository inventoryRepository, IBookRentalRepository rentalRepository)
        {
            _userRepository = userRepository;
            _rentalRepository = rentalRepository;
            _inventoryRepository = inventoryRepository;
        }
        public IEnumerable<User> AddUser(User user)
        {
            return _userRepository.AddUser(user);
        }

        public IEnumerable<User> DeleteUser(int userId)
        {
            return _userRepository.DeleteUser(userId);
        }

        public User EditUser(User user, int userId)
        {
            return _userRepository.EditUser(user, userId);
        }

        public IEnumerable<User> GetAll()
        {
            return _userRepository.GetAll();
        }

        public UserDetails GetUserDetails(int userId)
        {
            return new UserDetails
            {
                RentedBooks = GetUserBooks(userId),
                BorrowHistory = _rentalRepository.GetUserBorrowHistory(userId)
            };
        }


        private IEnumerable<Book> GetUserBooks(int userId)
        {
            var booksIds = _rentalRepository.GetUserBooksIds(userId);
            var books = new List<Book>();
            foreach(var bookId in booksIds)
            {
                books.Add(_inventoryRepository.GetBookById(bookId));
            }
            return books;
        }

    }
}
