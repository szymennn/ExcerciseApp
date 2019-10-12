using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Interfaces
{
    public interface IGenresRepository
    {
        string GetGenreName(int genreId);
    }
}
