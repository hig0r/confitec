using System;
using System.ComponentModel.DataAnnotations.Schema;
using Confitec.Enums;
using Microsoft.EntityFrameworkCore;

namespace Confitec.Entities
{
    public class Usuario
    {
        
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Email { get; set; }
        private DateTime _dataNascimento;
        
        [Column(TypeName = "date")]
        public DateTime DataNascimento
        {
            get => _dataNascimento.Date;
            set => _dataNascimento = value;
        }

        public Escolaridade Escolaridade { get; set; }
    }
}