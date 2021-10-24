using System.Collections.Generic;
using System.Threading.Tasks;
using Confitec.Dtos;
using Confitec.Entities;
using Confitec.Infra;
using Mapster;
using Microsoft.EntityFrameworkCore;

namespace Confitec.Services
{
    public class UsuariosService : IUsuariosService
    {
        private readonly ConfitecDbContext _dbContext;

        public UsuariosService(ConfitecDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<ICollection<Usuario>> Listar()
        {
            return await _dbContext.Usuarios.ToListAsync();
        }

        public async Task<Usuario> Obter(int id)
        {
            return await _dbContext.Usuarios.FindAsync(id);
        }

        public async Task<Usuario> Adicionar(NovoUsuarioDto dto)
        {
            var usuario = dto.Adapt<Usuario>();
            _dbContext.Add(usuario);
            await _dbContext.SaveChangesAsync();
            return usuario;
        }

        public async Task<Usuario> Alterar(int id, AlterarUsuarioDto dto)
        {
            var usuario = await _dbContext.Usuarios.FindAsync(id);
            usuario = dto.Adapt(usuario);
            _dbContext.Update(usuario);
            await _dbContext.SaveChangesAsync();
            return usuario;
        }

        public async Task Excluir(int id)
        {
            var usuario = await _dbContext.Usuarios.FindAsync(id);
            _dbContext.Remove(usuario);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<bool> Exists(int id)
        {
            return await _dbContext.Usuarios.FindAsync(id) != null;
        }
    }
}