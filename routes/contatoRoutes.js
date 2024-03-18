const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// Get all contatos
router.get('/', async (req, res) => {
    try {
        const [contatos] = await db.query('SELECT * FROM Contato');
        res.status(200).json(contatos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get contato by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [contato] = await db.query('SELECT * FROM Contato WHERE id = ?', [id]);
        if (contato.length === 0) {
            return res.status(404).json({ message: 'Contato não encontrado' });
        }
        res.status(200).json(contato[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create new contato
router.post('/', async (req, res) => {
    const { nome, email, foto, telefone, endereco } = req.body;
    try {
        const [result] = await db.query('INSERT INTO Contato (nome, email, foto, telefone, endereco) VALUES (?, ?, ?, ?, ?)', [nome, email, foto, telefone, endereco]);
        res.status(201).json({ id: result.insertId, nome, email, foto, telefone, endereco });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update contato
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, foto, telefone, endereco } = req.body;
    try {
        await db.query('UPDATE Contato SET nome = ?, email = ?, foto = ?, telefone = ?, endereco = ? WHERE id = ?', [nome, email, foto, telefone, endereco, id]);
        res.status(200).json({ id, nome, email, foto, telefone, endereco });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete contato
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM Contato WHERE id = ?', [id]);
        res.status(200).json({ message: 'Contato deletado com sucesso' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
