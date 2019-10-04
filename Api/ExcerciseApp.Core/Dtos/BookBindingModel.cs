using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Dtos
{
    public class BookBindingModel
    {
        public string Author { get; set; }
        public string Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string ISBN { get; set; }
        public int Count { get; set; }
        public DateTime AddDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
