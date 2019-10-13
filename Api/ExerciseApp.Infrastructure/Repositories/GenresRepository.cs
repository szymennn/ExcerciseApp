using ExcerciseApp.Core.Interfaces;
using ExcerciseApp.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Infrastructure.Repositories
{
    public class GenresRepository : IGenresRepository
    {
        private readonly AppDbContext _context;

        public GenresRepository(AppDbContext context)
        {
            _context = context;
        }

        public string GetGenreName(int genreId)
        {
            var genre = _context.Genres.Find(genreId).Name;
            return _context.Genres.Find(genreId).Name;
        }
    }
}
