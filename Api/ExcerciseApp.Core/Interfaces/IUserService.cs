using ExcerciseApp.Core.Entities;
using System.Collections.Generic;

namespace ExcerciseApp.Core.Interfaces
{
    public interface IUserService
    {
        IEnumerable<UserDetails> GetAll();
        IEnumerable<UserDetails> AddUser(User user);
        UserDetails EditUser(User user, int userId);
        IEnumerable<UserDetails> DeleteUser(int userId);
        UserDetails GetUserDetails(int userId);
    }
}
