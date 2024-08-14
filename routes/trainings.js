// routes/trainings.js
const express = require('express');
const { deleteFileByName } = require('../helpers/fileHelper');
const router = express.Router();

// Rota para deletar um arquivo pelo tipo e nome do treinamento
router.delete('/:tipoTreinamento', async (req, res) => {
  const { tipoTreinamento } = req.params;
  const { nomeTreinamento } = req.body;

  console.log(`Tipo de treinamento: ${tipoTreinamento}`);
  console.log(`Nome do treinamento: ${nomeTreinamento}`);

  if (!nomeTreinamento) {
    return res.status(400).json({ error: 'O nome do treinamento é necessário' });
  }

  try {
    await deleteFileByName(tipoTreinamento, nomeTreinamento);
    res.status(200).json({ message: 'Arquivo deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar arquivo:', error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
