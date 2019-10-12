using System;
using System.Collections.Generic;
using System.Text;
using ExcerciseApp.Core.Dtos;

namespace ExcerciseApp.Core.Dtos
{
    public class UserDetailsApiModel
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public DateTime AddDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public IEnumerable<BookApiModel> RentedBooks { get; set; }
        public IEnumerable<BorrowApiModel> BorrowHistory { get; set; }
    }
}
