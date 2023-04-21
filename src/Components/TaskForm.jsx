import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  const handlesumit = (e) => {
    e.preventDefault();

    createTask({ titulo, descripcion });
    setTitulo("");
    setdescripcion("");
  };

  return (
<div className=" max-w-md mx-auto">
<form onSubmit={handlesumit} className=" bg-slate-800 p-10 mb-4" >
  <h1 className=" text-3xl text-white font-bold mb-3">Añadir Modulo</h1>
      <input
        placeholder="Nombre del Modulo"
        onChange={(e) => setTitulo(e.target.value)}
        value={titulo}
        className=" bg-slate-300 p-3 w-full mb-2"
        autoFocus
      />
      <textarea
        placeholder="Descripcion del Modulo "
        onChange={(e) => setdescripcion(e.target.value)}
        value={descripcion}
        className=" bg-slate-300 p-3 w-full mb-2"
      ></textarea>
      <button
      className=" bg-indigo-500  px-3 py-1 text-white rounded-md"
      >guardar</button>
    </form>
</div>
   
  );
}

export default TaskForm;
