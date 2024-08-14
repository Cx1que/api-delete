// helpers/dataHelpers.js
const fs = require('fs').promises;
const path = require('path');

// Caminho para o arquivo JSON
const dataPath = path.join(__dirname, '..', 'data', 'trainings.json');

// Função para ler dados do arquivo JSON
async function readData() {
  try {
    const rawData = await fs.readFile(dataPath, 'utf8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Erro ao ler dados:', error);
    throw new Error('Erro ao ler dados');
  }
}

// Função para escrever dados no arquivo JSON
async function writeData(data) {
  try {
    await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Erro ao escrever dados:', error);
    throw new Error('Erro ao escrever dados');
  }
}

module.exports = {
  readData,
  writeData
};
