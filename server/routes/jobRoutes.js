import express from 'express';
import { getJobId, getJobs } from '../controllers/jobController.js';


const router = express.Router();

router.get('/', getJobs);

router.get('/:id', getJobId);



export default router;