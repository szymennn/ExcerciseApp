using Microsoft.EntityFrameworkCore;
using ExcerciseApp.Core.Entities;

namespace ExcerciseApp.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {

        }

    }
}
