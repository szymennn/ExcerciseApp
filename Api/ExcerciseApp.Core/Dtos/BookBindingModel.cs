using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ExcerciseApp.Core.Dtos
{
    public class BookBindingModel
    {
        [Required]
        public string Author { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public DateTime ReleaseDate { get; set; }
        [Required]
        public string ISBN { get; set; }
        [Required]
        public int Count { get; set; }
        [Required]
        public DateTime AddDate { get; set; }
        [Required]
        public DateTime ModifiedDate { get; set; }
        [Required]
        [Range(1, 5)]
        public int BookGenreId { get; set; }
    }
}
