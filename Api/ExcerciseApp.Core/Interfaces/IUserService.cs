using ExcerciseApp.Core.Entities;
using System.Collections.Generic;

namespace ExcerciseApp.Core.Interfaces
{
    public interface IUserService
    {
        IEnumerable<User> GetAll();
        User AddUser(User user);
        User EditUser(User user, int userId);
        IEnumerable<User> DeleteUser(int userId);
        UserDetails GetUserDetails(int userId);
    }
}
