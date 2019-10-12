using ExcerciseApp.Core.Helpers;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Exceptions
{
    public class UserNotActiveException : Exception
    {
        public int StatusCode { get; }
        public string ReasonPhrase { get; }

        public UserNotActiveException()
        {
            StatusCode = StatusCodes.Status404NotFound;
            ReasonPhrase = Constants.NotFound;
        }

        public UserNotActiveException(string message)
            : base(message)
        {
            StatusCode = StatusCodes.Status404NotFound;
            ReasonPhrase = Constants.NotFound;
        }

        public UserNotActiveException(string message, Exception inner)
            : base(message, inner)
        {
            StatusCode = StatusCodes.Status404NotFound;
            ReasonPhrase = Constants.NotFound;
        }
    }
}
