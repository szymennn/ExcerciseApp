using ExcerciseApp.Core.Helpers;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Exceptions
{
    public class BookAlreadyRentedException : Exception
    {
        public int StatusCode { get; }
        public string ReasonPhrase { get; }
        
        public BookAlreadyRentedException()
        {
            StatusCode = StatusCodes.Status400BadRequest;
            ReasonPhrase = Constants.BadRequest;
        }
        
        public BookAlreadyRentedException(string message)
            : base(message)
        {
            StatusCode = StatusCodes.Status400BadRequest;
            ReasonPhrase = Constants.BadRequest;
        }
        
        public BookAlreadyRentedException(string message, Exception inner)
            : base(message, inner)
        {
            StatusCode = StatusCodes.Status400BadRequest;
            ReasonPhrase = Constants.BadRequest;
        }
    }
}
