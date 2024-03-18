const db = require('./connection');

const initDB = async () => {
    const createTableSQL = `
        CREATE TABLE IF NOT EXISTS Contato (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255),
            foto VARCHAR(255),
            telefone VARCHAR(255),
            endereco TEXT
        );
    `;

    try {
        await db.query(createTableSQL);
        console.log('Tabela Contato criada ou já existente');
    } catch (error) {
        console.error('Falha ao criar a tabela Contato:', error);
    }
};

module.exports = initDB;
