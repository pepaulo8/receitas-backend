export class CreateRecipeDto {
    id_usuarios: number;  // Foreign key for User, required
  
    id_categorias?: number;  // Foreign key for Category, optional
  
    nome?: string;  // Optional field
  
    tempo_preparo_minutos?: number;  // Optional field
  
    porcoes?: number;  // Optional field
  
    modo_preparo: string;  // Required field
  
    ingredientes?: string;  // Optional field
  
    criado_em: Date;  // Required field
  
    alterado_em: Date;  // Required field
  }
  