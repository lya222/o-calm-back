import CoreController from '../api/core.controller.js';
import { placeDatamapper } from '../../datamappers/index.datamapper.js';

export default class PlacesController extends CoreController {

    static entityName = "place";
    static properDatamapper = placeDatamapper;

}
