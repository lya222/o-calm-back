import express from 'express';
import controller from '../../controllers/api/contact.api.controller.js';
import wrapper from '../../middlewares/wrapper.middlewares.js';

const router = express.Router();

router.route('/')
    .post(wrapper(controller.createContact.bind(controller)));

export default router;
