using ExcerciseApp.Core.Entities;
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
        private AppDbContext _context;

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
            return _context.Borrows.Where(p => p.IsReturned == false).Select(p => p.BookId).ToList();
        }

        public IEnumerable<User> GetRentingUsers()
        {
            throw new NotImplementedException();
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
            return !_context.Borrows.Find(bookId).IsReturned;
        }

        public void PassBookIn(int bookId)
        {
            var book = _context.Borrows.Find(bookId);
            book.IsReturned = true;
            _context.SaveChanges();
        }

        public Borrow RentBook(Borrow borrow, int userId)
        {
            throw new NotImplementedException();
        }
    }
}