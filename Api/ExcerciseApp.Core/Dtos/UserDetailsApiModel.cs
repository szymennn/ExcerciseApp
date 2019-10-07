using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Dtos
{
    public class UserDetailsApiModel
    {
        public IEnumerable<BookApiModel> RentedBooks { get; set; }
        public IEnumerable<BorrowApiModel> BorrowHistory { get; set; }
    }
}
