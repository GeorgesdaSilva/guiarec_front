
import React from "react";

const Input = ({ name, type, placeholder, label }) => {
  return (
    <fieldset className="flex flex-col">
      <label htmlFor={name} className="text-sm text-gray-500 mb-2 font-bold">
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        className=" bg-slate-200 py-3 px-2  border border-gray-700 rounded-lg focus:outline focus:outline-1"
      />
    </fieldset>
  );
};

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <header className="absolute top-2">
        <img src="/logoguia.svg" className="w-32 md:w-40" />
      </header>
      <main className="container max-w-md py-16 flex flex-col items-center space-y-4 shadow-lg rounded-sm">
        <h2 className="text-3xl font-bold text-primary">Login</h2>
        <form className="w-full px-8 space-y-2">
          <Input
            label="Usuário"
            name="email"
            type="text"
            placeholder="Digite seu Email"
          />
          <Input
            label="Senha"
            name="senha"
            type="password"
            placeholder="Digite sua senha"
          />
          <div className="flex justify-center items-center pt-3">
          <a href="/dashboard" className="block w-full text-center text-white bg-primary px-6 py-3 rounded-lg">
            Entrar
          </a>
          <a href="/" className="block w-full text-center text-primary border border-primary px-6 py-3 rounded-lg">
            Cancelar
          </a>

          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
