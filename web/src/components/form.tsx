import { FormEvent } from "react";
import { api } from "../lib/api";

export function FormLogin(){
    function submitForm(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        api.post('/create', {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }).then((data) => {
            console.log(data)
        })
    }

    return (
        <form onSubmit={submitForm} className="bg-slate-900 flex flex-col items-center gap-3 p-6 shadow-sm shadow-white ">
                <label className="text-left text-amber-700 font-bold">Nome: </label>
                <input name="name" className="bg-gray-800 rounded-md text-gray-100 py-1 px-3" type="text" />
                <label className="text-base text-amber-700 font-bold">Email: </label>
                <input name="email" className="bg-gray-800 rounded-md text-gray-100 py-1 px-3" type="text" />
                <label className="text-base text-amber-700 font-bold">Senha: </label>
                <input name="password" className="bg-gray-800 rounded-md text-gray-100 py-1 px-3" type="text" />

            <button type="submit" className="bg-green-500 text-white uppercase text-center px-3 py-2 rounded-sm font-extrabold hover:bg-green-600 transition-colors">Criar Usuário</button>
        </form>
    )
}