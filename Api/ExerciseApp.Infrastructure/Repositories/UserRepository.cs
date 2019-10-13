using ExcerciseApp.Core.Entities;
using ExcerciseApp.Core.Exceptions;
using ExcerciseApp.Core.Helpers;
using ExcerciseApp.Core.Interfaces;
using ExcerciseApp.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ExcerciseApp.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<User> DeleteUser(int userId)
        {
            if (!Exist(userId))
            {
                throw new ResourceNotFoundException(Constants.UserNotFoundMessage);
            }
            var user = _context.Users.Find(userId);
            user.IsActive = false;
            _context.SaveChanges();
            return GetAllUsers();
        }

        public User EditUser(User user, int userId)
        {
            if (!Exist(userId))
            {
                throw new ResourceNotFoundException(Constants.UserNotFoundMessage);
            }
            return Edit(user, userId); 
        }

        public IEnumerable<User> GetAll()
        {
            return GetAllUsers();
        }

        public User GetUserById(int userId)
        {
            if (!Exist(userId))
            {
                throw new ResourceNotFoundException(Constants.UserNotFoundMessage);
            }
            return _context.Users.Find(userId);
        }

        public IEnumerable<User> AddUser(User user)
        {
            user.IsActive = true;
            _context.Users.Add(user);
            _context.SaveChanges();
            return GetAllUsers();
        }

        private IEnumerable<User> GetAllUsers()
        {
            return _context.Users.Where(p => p.IsActive).ToList();
        }

        private bool Exist(int userId)
        {
            return _context.Users.Any(p => p.Id == userId) && _context.Users.Find(userId).IsActive;
        }

        private User Edit(User userToEdit, int userId)
        {
            var user = _context.Users.Find(userId);
            user.BirthDate = userToEdit.BirthDate;
            user.Email = userToEdit.Email;
            user.FirstName = userToEdit.FirstName;
            user.LastName = userToEdit.LastName;
            user.ModifiedDate = userToEdit.ModifiedDate;
            user.Phone = userToEdit.Phone;
            user.Username = userToEdit.Username;
            _context.SaveChanges();
            return user;
        }
    }
}
