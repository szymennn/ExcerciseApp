using AutoMapper;
using ExcerciseApp.Core.Dtos;
using ExcerciseApp.Core.Entities;
using ExcerciseApp.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExcerciseApp.Api.Controllers
{
    [Route("rentals")]
    [ApiController]
    public class RentalsController : ControllerBase
    {
        private readonly IBookRentalService _rentalService;
        private readonly IMapper _mapper;

        public RentalsController(IMapper mapper, IBookRentalService rentalService)
        {
            _rentalService = rentalService;
            _mapper = mapper;
        }

        [HttpGet("books")]
        public IActionResult GetRentedBooks()
        {
            var books = _rentalService.GetRentedBooks();
            var booksModel = _mapper.Map<IEnumerable<BookApiModel>>(books);
            return Ok(booksModel);
        } 

        [HttpGet("users")]
        public IActionResult GetRentingUsers()
        {
            var users = _rentalService.GetRentingUsers();
            var usersModel = _mapper.Map<IEnumerable<UserApiModel>>(users);
            return Ok(usersModel);
        }

        [HttpPost]
        public IActionResult RentBook([FromBody] BorrowBindingModel borrowModel)
        {
            var borrow = _mapper.Map<Borrow>(borrowModel);
            var addedBorrow = _rentalService.RentBook(borrow);
            var addedBorrowModel = _mapper.Map<BorrowApiModel>(addedBorrow);
            return Ok(addedBorrowModel);
        }

        [HttpPost("{bookId}")]
        public IActionResult PassBookIn([FromRoute] int bookId)
        {
            _rentalService.PassBookIn(bookId);
            return NoContent();
        }
    }
}
