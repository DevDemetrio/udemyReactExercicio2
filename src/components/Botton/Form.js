import "./Form.css";
import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, address);
    console.log("Enviar");
  };
  return (
    <form onSubmit={handleSubmit} className="background">
      <div>
        <label>
          <span>Digite seu nome</span>
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={handleName}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Digite seu email</span>
          <input
            type="text"
            placeholder="Digite seu email"
            onChange={handleEmail}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Endereço</span>
          <input
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </label>
      </div>
      <input type="Submit" value="Envia" />
    </form>
  );
};

export default Form;
