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
            return _context.Borrows.Where(p => p.BookId == bookId).ToList();
        }

        public IEnumerable<int> GetRentedBooksIds()
        {
            return GetRentedIds();
        }

        public IEnumerable<int> GetRentingUsersIds()
        {
            var userIds = _context.Borrows.Where(p => p.IsReturned == false).ToList().Select(p => p.UserId).ToList();
            var activeUserIds = new List<int>();
            foreach(var userId in userIds)
            {
                if (_context.Users.Find(userId).IsActive && activeUserIds.All(p => p != userId))
                {
                    activeUserIds.Add(userId);
                }
            }
            return activeUserIds;
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
            if(_context.Borrows.Where(p => p.BookId == bookId).ToList().Count == 0)
            {
                return false;
            }
            return !_context.Borrows.LastOrDefault(p => p.BookId == bookId).IsReturned;
        }

        public IEnumerable<int> PassBookIn(int bookId)
        {
            if (!BookExist(bookId))
            {
                throw new ResourceNotFoundException(Constants.BookNotFoundMessage);
            }
            var borrow = _context.Borrows.LastOrDefault(p => p.BookId == bookId && !p.IsReturned);
            var book = _context.Books.Find(bookId);
            book.Count++;
            borrow.IsReturned = true;
            _context.SaveChanges();
            return GetRentedIds();
        }

        public void RentBook(Borrow borrow)
        {
            if(!CanRent(borrow))
            {
                RentExceptionsCheck(borrow);
            }
            var book = _context.Books.Find(borrow.BookId);
            book.Count--;
            _context.Borrows.Add(borrow);
            _context.SaveChanges();
        }

        private void RentExceptionsCheck(Borrow borrow)
        {
            if (!_context.Users.Any(p => p.Id == borrow.UserId))
            {
                throw new ResourceNotFoundException(Constants.UserNotFoundMessage);
            }
            if (!_context.Users.Find(borrow.UserId).IsActive)
            {
                throw new UserNotActiveException(Constants.UserNotActiveMessage);
            }
            if(_context.Books.Find(borrow.BookId).Count == 0)
            {
                throw new NotImplementedException("Custom exception here");
            }
        }

        private bool CanRent(Borrow borrow)
        {
            if (_context.Borrows.Where(p => p.BookId == borrow.BookId).ToList().Count == 0
                || _context.Borrows.LastOrDefault
                (p => p.BookId == borrow.BookId).IsReturned
                && _context.Users.Any(p => p.Id == borrow.UserId)
                && _context.Users.Find(borrow.UserId).IsActive
                && BookExist(borrow.BookId)
                && _context.Books.Find(borrow.BookId).Count > 0)
            {
                return true;
            }
            return false;
        }

        private bool BookExist(int bookId)
        {
            return _context.Books.Any(p => p.Id == bookId);
        }

        private IEnumerable<int> GetRentedIds()
        {
            return _context.Borrows.Where(p => p.IsReturned == false).Select(p => p.BookId).ToList();
        }
    }
}