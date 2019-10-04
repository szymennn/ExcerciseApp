using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Entities
{
    public class UserDetails
    {
        public IEnumerable<Book> RentedBooks { get; set; }
        public IEnumerable<Borrow> BorrowHistory { get; set; }
    }
}
