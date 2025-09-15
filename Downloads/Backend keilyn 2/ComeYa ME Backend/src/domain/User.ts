export class User {
  constructor(
    public id: number,
    public nombre: string,
    public correo: string,
    public contraseña: string,
    public rol_id: number
  ) {}
}
