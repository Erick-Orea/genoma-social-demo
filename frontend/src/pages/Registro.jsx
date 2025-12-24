import React, { useState } from "react";

function Registro() {
  const [formData, setFormData] = useState({
    alias: "",
    usuario: "",
    contraseña: "",
    ejes: { Arte: 0.5, Tecnología: 0.5, Humanidades: 0.5 },
    etiquetas: [],
    frase: "",
    narrativa: "",
    areasConocimiento: [],
  });

  const etiquetasDisponibles = [
    "Plasticidad simbólica",
    "Codificación multisensorial",
    "Ritmo theta colaborativo",
    "Memoria episódica simbólica",
    "Conectoma emergente",
  ];

  const sugerenciasAreas = [
    "Tecnología", "Arte", "Filosofía", "Biología", "Matemáticas",
    "Psicología", "Historia", "Sociología", "Música", "Literatura",
    "Antropología", "Neurociencia", "Ingeniería", "Diseño", "Comunicación"
  ];

  const [inputArea, setInputArea] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEjeChange = (eje, valor) => {
    setFormData({
      ...formData,
      ejes: { ...formData.ejes, [eje]: parseFloat(valor) },
    });
  };

  const toggleEtiqueta = (etiqueta) => {
    const etiquetas = formData.etiquetas.includes(etiqueta)
      ? formData.etiquetas.filter((t) => t !== etiqueta)
      : [...formData.etiquetas, etiqueta];

    setFormData({ ...formData, etiquetas });
  };

  const filtrarSugerencias = (texto) =>
    sugerenciasAreas.filter((s) =>
      s.toLowerCase().includes(texto.toLowerCase())
    );

  const agregarArea = (area) => {
    if (!formData.areasConocimiento.includes(area)) {
      setFormData({
        ...formData,
        areasConocimiento: [...formData.areasConocimiento, area],
      });
    }
    setInputArea("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Este es un formulario DEMO para portafolio.\nNo envía datos reales.");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 border border-cyan-400 rounded-xl p-6 w-full max-w-lg shadow-lg"
      >
        <h1 className="text-cyan-400 text-2xl mb-4">🌌 Registro simbólico (Demo)</h1>

        {/* Alias */}
        <label className="block mb-2">Alias ritual</label>
        <input
          type="text"
          name="alias"
          value={formData.alias}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-800 text-white border border-cyan-400 rounded"
          required
        />

        {/* Usuario */}
        <label className="block mb-2">Usuario</label>
        <input
          type="text"
          name="usuario"
          value={formData.usuario}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-800 text-white border border-cyan-400 rounded"
          required
        />

        {/* Contraseña */}
        <label className="block mb-2">Contraseña</label>
        <input
          type="password"
          name="contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-800 text-white border border-cyan-400 rounded"
          required
        />

        {/* Ejes */}
        <h2 className="text-cyan-300 text-lg mb-2">Ejes simbólicos</h2>
        {Object.entries(formData.ejes).map(([eje, valor]) => (
          <div key={eje} className="mb-3">
            <label className="block text-sm mb-1">{eje}</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={valor}
              onChange={(e) => handleEjeChange(eje, e.target.value)}
              className="w-full accent-cyan-400"
            />
          </div>
        ))}

        {/* Etiquetas */}
        <h2 className="text-cyan-300 text-lg mb-2">Etiquetas rituales</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {etiquetasDisponibles.map((tag) => (
            <button
              type="button"
              key={tag}
              onClick={() => toggleEtiqueta(tag)}
              className={`px-2 py-1 rounded-full text-xs ${
                formData.etiquetas.includes(tag)
                  ? "bg-cyan-500 text-black"
                  : "bg-zinc-800 text-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Frase ritual */}
        <label className="block mb-2">Frase ritual</label>
        <textarea
          name="frase"
          value={formData.frase}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-800 text-white border border-cyan-400 rounded"
        />

        {/* Narrativa */}
        <label className="block mb-2">Narrativa simbólica</label>
        <textarea
          name="narrativa"
          value={formData.narrativa}
          onChange={handleChange}
          className="w-full p-2 mb-4 bg-gray-800 text-white border border-cyan-400 rounded h-24"
        />

        {/* Áreas */}
        <label className="block mb-2">Áreas de conocimiento</label>
        <input
          type="text"
          value={inputArea}
          onChange={(e) => setInputArea(e.target.value)}
          className="w-full p-2 mb-2 bg-gray-800 text-white border border-cyan-400 rounded"
          placeholder="Escribe un área..."
        />

        <div className="flex flex-wrap gap-2 mb-4">
          {filtrarSugerencias(inputArea).map((s, i) => (
            <button
              type="button"
              key={i}
              onClick={() => agregarArea(s)}
              className="bg-gray-800 text-white px-2 py-1 rounded"
            >
              {s}
            </button>
          ))}
        </div>

        <div className="mt-2 mb-4">
          {formData.areasConocimiento.map((a, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-cyan-500 text-black rounded mr-2"
            >
              {a}
            </span>
          ))}
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-cyan-500 text-black py-2 rounded hover:bg-cyan-400 transition"
        >
          Crear perfil simbólico (Demo)
        </button>
      </form>
    </div>
  );
}

export default Registro;