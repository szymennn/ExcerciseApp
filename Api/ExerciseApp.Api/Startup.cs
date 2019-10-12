using AutoMapper;
using ExcerciseApp.Api.Extensions;
using ExcerciseApp.Api.MapperConfig;
using ExcerciseApp.Core.Helpers;
using ExcerciseApp.Core.Interfaces;
using ExcerciseApp.Core.Services;
using ExcerciseApp.Infrastructure.Data;
using ExcerciseApp.Infrastructure.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ExcerciseApp.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AppDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString(Constants.ConnectionString), b => b.MigrationsAssembly(Constants.MigrationsAssembly)));

            var mappingConfig = new MapperConfiguration(config =>
            {
                config.AddProfile<MappingProfile>();
            });

            var mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);

            services.AddScoped<IBookInventoryRepository, BookInventoryRepository>();
            services.AddScoped<IBookRentalRepository, BookRentalRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IBookRentalService, BookRentalService>();
            services.AddScoped<IBookInventoryService, BookInventoryService>();
            services.AddScoped<IGenresRepository, GenresRepository>();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
                app.UseCustomExceptionHandler();
            }
            app.UseCors(config =>
            {
                config.AllowAnyHeader()
                    .AllowAnyMethod()
                    .SetIsOriginAllowed((host) => true)
                    .AllowCredentials();
            });
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
