import mongoose from 'mongoose';
import { stringify } from 'querystring';
const Schema = mongoose.Schema;

const medicoSchema = new Schema({
  nombre: {type: String, required: [true, 'Nombre obligatorio']},
  rut: {type: String, requiered: [true, 'Rut Obligatorio']},
  especialidad: String,
  numero: String,
  fecha:{type: Date, default: Date.now},
  email: String
});

// Convertir a modelo
const Medico = mongoose.model('Medico', medicoSchema);

export default Medico;
