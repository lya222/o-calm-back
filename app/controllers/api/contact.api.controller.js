import CoreController from './core.api.controller.js';

import { contactDataMapper } from '../../datamappers/index.datamapper.js';

//20 aout Etape 4 creation du controller fini maintenant faire route
export default class ContactApiController extends CoreController {


    static entityName = "contact";
    static properDatamapper = contactDataMapper;

       /**
     * Crée une nouvelle entité.
     * @param {Object} req - Objet de requête.
     * @param {Object} res - Objet de réponse.
     * @returns {Promise<Object>} Les données créées.
     */
       static async createContact(req, res) {
        const input = req.body;
        const row = await this.properDatamapper.createContact(input);

        return res.status(201).json({ data: row });
    };


};
