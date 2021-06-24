import IUsuario from "../interfaces/IUsuario";

const usuarioBackend = [
    {
        email: 'pitta1881@gmail.com',
        password: '123'
    },
    {
        email: 'pitta1882@gmail.com',
        password: 'asd'
    },
    {
        email: 'test@test.com',
        password: 'asd123'
    }
]

export const authUser = (usuario: IUsuario): boolean => {
    return usuarioBackend.some(userBack => userBack.email === usuario.email && userBack.password === usuario.password);
}