using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Dtos
{
    public class BorrowApiModel
    {
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public bool IsReturned { get; set; }
    }
}
