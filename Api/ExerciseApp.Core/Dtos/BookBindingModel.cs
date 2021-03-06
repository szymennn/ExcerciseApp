﻿using System;
using System.ComponentModel.DataAnnotations;

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
        public string BookGenre { get; set; }
    }
}
