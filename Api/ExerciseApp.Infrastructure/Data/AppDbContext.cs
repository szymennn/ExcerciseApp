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


        public DbSet<Book> Books { get; set; }
        public DbSet<Borrow> Borrows { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<DictBookGenre> Genres { get; set; }
    }
}
