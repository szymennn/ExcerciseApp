using System;

namespace ExcerciseApp.Core.Dtos
{
    public class BorrowApiModel
    {
        public int BookId { get; set; }
        public int UserId { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public bool IsReturned { get; set; }
    }
}
