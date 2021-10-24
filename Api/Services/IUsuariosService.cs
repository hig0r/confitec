using System.Collections.Generic;
using System.Threading.Tasks;
using Confitec.Dtos;
using Confitec.Entities;

namespace Confitec.Services
{
    public interface IUsuariosService
    {
        Task<ICollection<Usuario>> Listar();
        Task<Usuario> Obter(int id);
        Task<Usuario> Adicionar(NovoUsuarioDto dto);
        Task<Usuario> Alterar(int id, AlterarUsuarioDto dto);
        Task Excluir(int id);
        Task<bool> Exists(int id);
    }
}