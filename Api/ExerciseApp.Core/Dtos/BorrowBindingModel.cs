using System;
using System.ComponentModel.DataAnnotations;

namespace ExcerciseApp.Core.Dtos
{
    public class BorrowBindingModel
    {
        [Required]
        public int BookId { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public DateTime FromDate { get; set; }
        [Required]
        public DateTime ToDate { get; set; }
    }
}
