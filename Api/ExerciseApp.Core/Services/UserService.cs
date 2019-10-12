using ExcerciseApp.Core.Entities;
using ExcerciseApp.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
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
        public IEnumerable<UserDetails> AddUser(User user)
        {
            return GetUsersDetails(_userRepository.AddUser(user));
        }

        public IEnumerable<UserDetails> DeleteUser(int userId)
        {
            return GetUsersDetails(_userRepository.DeleteUser(userId));
        }

        public UserDetails EditUser(User user, int userId)
        {
            return GetDetails(_userRepository.EditUser(user, userId).Id);
        }

        public IEnumerable<UserDetails> GetAll()
        {
            return GetUsersDetails(_userRepository.GetAll());
        }

        public UserDetails GetUserDetails(int userId)
        {
            return GetDetails(userId);
        }

        private IEnumerable<UserDetails> GetUsersDetails(IEnumerable<User> users)
        {
            return users.Select(user => GetDetails(user.Id)).ToList();
        }

        private UserDetails GetDetails(int userId)
        {
            var user = _userRepository.GetUserById(userId);
            return new UserDetails
            {
                Id = user.Id,
                AddDate = user.AddDate,
                BirthDate = user.BirthDate,
                ModifiedDate = user.ModifiedDate,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                IsActive = user.IsActive,
                Phone = user.Phone,
                Username = user.Username,
                RentedBooks = GetUserBooks(userId),
                BorrowHistory = _rentalRepository.GetUserBorrowHistory(userId)
            };
        }

        private IEnumerable<Book> GetUserBooks(int userId)
        {
            var booksIds = _rentalRepository.GetUserBooksIds(userId);
            return booksIds.Select(bookId => _inventoryRepository.GetBookById(bookId)).ToList();
        }

    }
}
