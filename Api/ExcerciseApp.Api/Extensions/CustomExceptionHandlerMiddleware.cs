using ExcerciseApp.Core.Exceptions;
using ExcerciseApp.Core.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExcerciseApp.Api.Extensions
{
    public class CustomExceptionHandlerMiddleware
    {
        private readonly RequestDelegate _next;

        public CustomExceptionHandlerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            var problemDetails = new ProblemDetails
            {
                Instance = $"urn:excerciseapp:{Guid.NewGuid()}"
            };
            try
            {
                await _next(context);
            }
            catch (ResourceNotFoundException notFoundException)
            {
                problemDetails.Status = notFoundException.StatusCode;
                problemDetails.Title = notFoundException.ReasonPhrase;
                problemDetails.Detail = notFoundException.Message;
                context.Response.StatusCode = problemDetails.Status.Value;
                context.Response.WriteJson(problemDetails);
            }
            catch(BookAlreadyRentedException bookAlreadyRentedException)
            {
                problemDetails.Status = bookAlreadyRentedException.StatusCode;
                problemDetails.Title = bookAlreadyRentedException.ReasonPhrase;
                problemDetails.Detail = bookAlreadyRentedException.Message;
                context.Response.StatusCode = problemDetails.Status.Value;
                context.Response.WriteJson(problemDetails);
            }
            catch (Exception)
            {
                problemDetails.Status = StatusCodes.Status500InternalServerError;
                problemDetails.Title = Constants.InternalServerError;
                problemDetails.Detail = Constants.InterServerErrorDetail;
                context.Response.StatusCode = problemDetails.Status.Value;
                context.Response.WriteJson(problemDetails);
            }
        }
    }
}
