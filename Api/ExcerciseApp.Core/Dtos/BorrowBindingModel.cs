using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Dtos
{
    public class BorrowBindingModel
    {
        public int Id { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public bool IsReturned { get; set; }
    }
}
