using ExcerciseApp.Core.Entities;
using ExcerciseApp.Core.Exceptions;
using ExcerciseApp.Core.Helpers;
using ExcerciseApp.Core.Interfaces;
using ExcerciseApp.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ExcerciseApp.Infrastructure.Repositories
{
    public class BookRentalRepository : IBookRentalRepository
    {
        private readonly AppDbContext _context;

        public BookRentalRepository(AppDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Borrow> GetBookBorrowHistory(int bookId)
        {
            if (!BookExist(bookId))
            {
                throw new ResourceNotFoundException(Constants.BookNotFoundMessage);
            }
            return _context.Borrows.Where(p => p.BookId == bookId).ToList();
        }

        public IEnumerable<int> GetRentedBooksIds()
        {
            return _context.Borrows.Where(p => p.IsReturned == false).Select(p => p.BookId).ToList();
        }

        public IEnumerable<int> GetRentingUsersIds()
        {
            return _context.Borrows.Where(p => p.IsReturned == false).ToList().Select(p => p.UserId).ToList();
        }

        public IEnumerable<int> GetUserBooksIds(int userId)
        {
            return _context.Borrows.Where(p => p.UserId == userId && p.IsReturned == false).Select(p => p.BookId).ToList();
        }

        public IEnumerable<Borrow> GetUserBorrowHistory(int userId)
        {
            return _context.Borrows.Where(p => p.UserId == userId).ToList();
        }

        public bool IsRented(int bookId)
        {
            if (!BookExist(bookId))
            {
                throw new ResourceNotFoundException(Constants.BookNotFoundMessage);
            }
            return !_context.Borrows.LastOrDefault(p => p.BookId == bookId).IsReturned;
        }

        public void PassBookIn(int bookId)
        {
            if (!BookExist(bookId))
            {
                throw new ResourceNotFoundException(Constants.BookNotFoundMessage);
            }
            var book = _context.Borrows.LastOrDefault(p => p.BookId == bookId);
            book.IsReturned = true;
            _context.SaveChanges();
        }

        public Borrow RentBook(Borrow borrow)
        {
            if(!_context.Borrows.LastOrDefault(p => p.BookId == borrow.BookId).IsReturned)
            {
                throw new BookAlreadyRentedException(Constants.BookAlreadyRentedMessage);
            }

            _context.Borrows.Add(borrow);
            _context.SaveChanges();

            return borrow;
        }

        private bool BookExist(int bookId)
        {
            return _context.Borrows.Any(p => p.BookId == bookId);
        }

        private bool UserExist(int userId)
        {
            return _context.Borrows.Any(p => p.UserId == userId);
        }
    }
}