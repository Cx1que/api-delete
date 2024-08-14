// helpers/fileHelper.js
const fs = require('fs').promises;
const path = require('path');

const baseStoragePath = path.join(__dirname, '..', 'storage');

async function deleteFileByName(tipoTreinamento, fileName) {
  const storagePath = path.join(baseStoragePath, tipoTreinamento);
  const filePath = path.join(storagePath, fileName);

  console.log(`Tentando acessar o arquivo: ${filePath}`);

  try {
    await fs.access(filePath); // Verifica se o arquivo existe
  } catch (err) {
    throw new Error('Arquivo não encontrado na pasta storage');
  }

  try {
    await fs.unlink(filePath); // Deleta o arquivo
  } catch (err) {
    throw new Error('Erro ao deletar o arquivo');
  }
}

module.exports = {
  deleteFileByName,
};
