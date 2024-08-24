import express from 'express';
import controller from '../../controllers/api/contact.api.controller.js';
import wrapper from '../../middlewares/wrapper.middlewares.js';

//creation du router pour la page contact 20 aout etape 5
const router = express.Router();

router.route('/')
    /**
      * POST /contact
        * Route pour contacter le support.
        * @summary Contact support.
        * @tags contact
        * @return {user} 200 - success response - application/json
        * @return {ApiError} 400 - Bad request response - application/json
        * @return {ApiError} 404 - Category not found - application/json
    */
    .post(wrapper(controller.createContact.bind(controller)));

export default router;
