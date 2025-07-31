import express from 'express';
import * as controller from '../Controllers/task.controller';

const router = express.Router();

router.get('/', controller.getAll);
router.post('/', controller.create);
router.delete('/:id', controller.remove);
router.patch('/:id', controller.updateStatus);

export default router;