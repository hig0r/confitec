using System;
using Confitec.Enums;
using FluentValidation;

namespace Confitec.Dtos
{
    public class AlterarUsuarioDto
    {
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Email { get; set; }
        public DateTime DataNascimento { get; set; }
        public Escolaridade Escolaridade { get; set; }
    }
    
    public class AlterarUsuarioValidator : AbstractValidator<AlterarUsuarioDto>
    {
        public AlterarUsuarioValidator()
        {
            RuleFor(x => x.Email).EmailAddress();
            RuleFor(x => x.Escolaridade).IsInEnum();
            RuleFor(x => x.DataNascimento.Date).LessThanOrEqualTo(DateTime.Now.Date);
        }
    }
}