using Confitec.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Confitec.Infra
{
    public class ConfitecDbContext : DbContext
    {
        private readonly IConfiguration _configuration;
        public DbSet<Usuario> Usuarios { get; set; }

        public ConfitecDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_configuration.GetConnectionString("Confitec"));
            base.OnConfiguring(optionsBuilder);
        }
    }
}