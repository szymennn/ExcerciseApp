﻿using ExcerciseApp.Core.Entities;
using System.Collections.Generic;

namespace ExcerciseApp.Core.Interfaces
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();
        User AddUser(User user);
        User EditUser(User user, int userId);
        IEnumerable<User> DeleteUser(int userId);
    }
}
