import express from "express";
import cors from "cors";
import perfilRoutes from "./routes/perfil.demo.js";

const app = express();

app.use(cors());
app.use(express.json());

// Rutas demo
app.use("/api", perfilRoutes);

// Healthcheck
app.get("/health", (req, res) => {
  res.json({ status: "ok", demo: true });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Backend DEMO corriendo en puerto ${PORT}`);
});