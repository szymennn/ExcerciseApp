using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Interfaces
{
    interface IUserRepository
    {
        IEnumerable<User> GetAll();
        User AddUser(User user);
        User EditUser(User user, int userId);
    }
}
