using System;
using System.Collections.Generic;

namespace ExcerciseApp.Core.Dtos
{
    public class BookDetailsApiModel
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
        public string BookGenre { get; set; }
        public IEnumerable<BorrowApiModel> BorrowHistory { get; set; }
    }
}
