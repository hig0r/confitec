using System;
using System.Threading.Tasks;
using Confitec.Dtos;
using Confitec.Services;
using Microsoft.AspNetCore.Mvc;

namespace Confitec.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly IUsuariosService _usuariosService;

        public UsuariosController(IUsuariosService usuariosService)
        {
            _usuariosService = usuariosService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var usuarios = await _usuariosService.Listar();
            return Ok(usuarios);
        }

        [HttpPost]
        public async Task<IActionResult> Post(NovoUsuarioDto dto)
        {
            var usuario = await _usuariosService.Adicionar(dto);
            return CreatedAtAction(nameof(Get), new { id = usuario.Id }, usuario);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Put(int id, AlterarUsuarioDto dto)
        {
            if (!await _usuariosService.Exists(id)) return NotFound();
            var usuario = await _usuariosService.Alterar(id, dto);
            return Ok(usuario);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (!await _usuariosService.Exists(id)) return NotFound();
            await _usuariosService.Excluir(id);
            return NoContent();
        }
    }
}