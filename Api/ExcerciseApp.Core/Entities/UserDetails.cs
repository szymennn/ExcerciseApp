using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Entities
{
    public class UserDetails
    {
        IEnumerable<Book> RentedBooks { get; set; }
        Borrow BorrowHistory { get; set; }
    }
}
