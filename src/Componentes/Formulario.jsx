import { useState } from "react";

const Formulario = ({ setAlert }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmapassword] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();
    if (password != Confirmpassword) {
      setAlert({
        msg: "Las contraseñas no coinciden",
        color: "danger",
      });
      return;
    }
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      Confirmpassword === ""
    ) {
      setAlert({
        msg: "Completa todos los datos",
        color: "danger",
      });
      return;
    }
      setAlert ({
        msg: "Cuenta creada exitosamente",
        color: "success",
       });
    setName("");
    setEmail("");
    setPassword("");
    setConfirmapassword("");

  };

  return (
    <>
      <form onSubmit={validarDatos}>
        <div className="formu1">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formu2">
          <input
            type="text"
            name="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formu3">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="formu4">
          <input
            type="password"
            name="Confirmpassword"
            placeholder="Confirmar contraseña"
            value={Confirmpassword}
            onChange={(e) => setConfirmapassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Registrarse</button>
        </div>
  
      </form>
    </>
  );
};

export default Formulario;