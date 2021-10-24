export interface Usuario {
  nome: string;
  sobrenome: string;
  email: string;
  dataNascimento: Date;
  escolaridade: Escolaridade;
}

export const escolaridades = [
  'infantil',
  'fundamental',
  'medio',
  'superior',
] as const;

export const escolaridadesNomes = [
  'Infantil',
  'Fundamental',
  'Médio',
  'Superior',
] as const;

export type Escolaridade = typeof escolaridades[number];
