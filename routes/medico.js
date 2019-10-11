import express from 'express';
const router = express.Router();

// importar el modelo medico
import Medico from '../models/medico';

// Agregar un medico
router.post('/nuevo-medico', async(req, res) => {
  const body = req.body;  
  try {
    const notaDB = await Medico.create(body);
    res.status(200).json(notaDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con parámetros
router.get('/medico/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const notaDB = await Medico.findOne({_id});
      res.json(notaDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

// Get con todos los documentos
router.get('/medico', async(req, res) => {
  try {
    const notaDb = await Medico.find();
    res.json(notaDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Delete eliminar un medico
router.delete('/medico/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const notaDb = await Medico.findByIdAndDelete({_id});
    if(!notaDb){
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(notaDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Put actualizar un medico
router.put('/medico/:id', async(req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const notaDb = await Medico.findByIdAndUpdate(
      _id,
      body,
      {new: true});
    res.json(notaDb);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

  
// Exportamos la configuración de express app
module.exports = router;
