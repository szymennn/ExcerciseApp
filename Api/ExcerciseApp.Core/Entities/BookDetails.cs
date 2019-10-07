using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Entities
{
    public class BookDetails
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public string Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string ISBN { get; set; }
        public int Count { get; set; }
        public DateTime AddDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public bool IsRented { get; set; }
        public IEnumerable<Borrow> BorrowHistory { get; set; }
    }
}
