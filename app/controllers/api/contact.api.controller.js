import CoreController from './core.api.controller.js';

import { contactDataMapper } from '../../datamappers/index.datamapper.js';

export default class ContactApiController extends CoreController {


    static entityName = "contact";
    static properDatamapper = contactDataMapper;

       static async createContact(req, res) {
        const {name, email, message} = req.body;
         const row = await this.properDatamapper.createContact(name, email, message);
         return res.status(201).json({data: row});
      
      }
    };




