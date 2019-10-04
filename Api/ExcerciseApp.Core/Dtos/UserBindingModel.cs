using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Dtos
{
    public class UserBindingModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public DateTime AddDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
