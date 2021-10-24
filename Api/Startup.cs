using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Confitec.Dtos;
using Confitec.Entities;
using Confitec.Enums;
using Confitec.Infra;
using Confitec.Services;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace Confitec
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddControllers()
                .AddNewtonsoftJson(
                config =>
                {
                    config.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                    config.SerializerSettings.Converters.Add(new StringEnumConverter
                    {
                        NamingStrategy = new KebabCaseNamingStrategy()
                    });
                    config.SerializerSettings.ContractResolver = new DefaultContractResolver
                    {
                        NamingStrategy = new CamelCaseNamingStrategy()
                    };
                })
                .AddFluentValidation(x => x.RegisterValidatorsFromAssemblyContaining<NovoUsuarioValidator>());

            services.AddDbContext<ConfitecDbContext>();
            services.AddScoped<IUsuariosService, UsuariosService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
