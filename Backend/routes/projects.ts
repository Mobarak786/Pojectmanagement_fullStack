import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/projects', (req, res) => {
  try {
    const projectData = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../data/projectData.json'), 'utf-8')
    );
    res.status(200).json(projectData.projects);
  } catch (error) {
    console.error('Error reading project data:', error);
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

export default router;
