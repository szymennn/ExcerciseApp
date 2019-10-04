using ExcerciseApp.Core.Entities;
using ExcerciseApp.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        public User AddUser(User user)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> DeleteUser(int userId)
        {
            throw new NotImplementedException();
        }

        public User EditUser(User user, int userId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}
