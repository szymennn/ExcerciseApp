using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Helpers
{
    public static class Constants
    {
        public const string ConnectionString = "AppDbConnectionString";
        public const string MigrationsAssembly = "ExcerciseApp.Infrastructure";
        public const string NotFound = "Not Found";
        public const string InternalServerError = "Internal Server Error";
        public const string InterServerErrorDetail = "An unexcpected error occured";
        public const string UserNotFoundMessage = "There's no user with that id";
        public const string BookNotFoundMessage = "There's no book with that id";
        public const string BadRequest = "Bad Request";
        public const string BookAlreadyRentedMessage = "That book is already rented";
    }
}
