using ExcerciseApp.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Interfaces
{
    public interface IReportService
    {
        IEnumerable<BookDetails> GetAllBooksDetails();
        IEnumerable<User> GetMostRentingUsers();
    }
}
