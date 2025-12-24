import express from "express";

const router = express.Router();

// Base de datos falsa en memoria
const perfiles = new Map();

/**
 * Crear perfil simbólico (DEMO)
 */
router.post("/perfil", (req, res) => {
  const { alias, usuario, contraseña, ejes, etiquetas, frase, narrativa, areasConocimiento } = req.body;

  if (!alias || !usuario || !contraseña) {
    return res.status(400).json({ error: "Alias, usuario y contraseña son obligatorios" });
  }

  if (perfiles.has(alias)) {
    return res.status(409).json({ error: "Alias ya registrado (demo)" });
  }

  const perfil = {
    alias,
    usuario,
    contraseña,
    ejes: ejes || { Arte: 0.5, Tecnología: 0.5, Humanidades: 0.5 },
    etiquetas: etiquetas || [],
    frase: frase || "",
    narrativa: narrativa || "",
    areasConocimiento: areasConocimiento || [],
  };

  perfiles.set(alias, perfil);

  res.status(201).json({
    mensaje: "Perfil simbólico creado (DEMO)",
    perfil,
  });
});

/**
 * Obtener perfil por alias (DEMO)
 */
router.get("/perfil/:alias", (req, res) => {
  const perfil = perfiles.get(req.params.alias);
  if (!perfil) {
    return res.status(404).json({ error: "Perfil no encontrado (demo)" });
  }
  res.json(perfil);
});

export default router;