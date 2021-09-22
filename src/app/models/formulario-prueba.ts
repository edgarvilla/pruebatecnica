export class FormularioPrueba{
   constructor(
    public id: number,
    public titulo: string,
    public description: string,
    public autor: string,
    public email: string,
    public palabras_claves: string,
    public created_at: Date,
    public updated_at: Date){}

}