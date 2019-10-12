using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Entities
{
    public class UserDetails
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime BirthDate { get; set; }
        public string Phone { get; set; }
        public DateTime AddDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public bool IsActive { get; set; }
        public IEnumerable<Book> RentedBooks { get; set; }
        public IEnumerable<Borrow> BorrowHistory { get; set; }
    }
}
