using ExcerciseApp.Core.Entities;
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
        private AppDbContext _context;

        public UserRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<User> DeleteUser(int userId)
        {
            var user = _context.Users.Find(userId);
            _context.Users.Remove(user);
            _context.SaveChanges();
            return _context.Users.ToList();
        }

        public User EditUser(User user, int userId)
        {
            var userToUpdate = _context.Users.Find(userId);
            userToUpdate.BirthDate = user.BirthDate;
            userToUpdate.Email = user.Email;
            userToUpdate.FirstName = user.FirstName;
            userToUpdate.LastName = user.LastName;
            userToUpdate.ModifiedDate = DateTime.Now;
            userToUpdate.Phone = user.Phone;
            userToUpdate.Username = user.Username;
            _context.SaveChanges();
            return userToUpdate;
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users.ToList();
        }

        IEnumerable<User> IUserRepository.AddUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return _context.Users.ToList();
        }
    }
}
