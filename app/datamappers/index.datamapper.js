import client from '../config/pg.client.js';

//Ce fichier sert à la création d'une instance pour utiliser les dataMappers ensuite.
import AuthenticationDatamapper from './user.datamapper.js';
import PlacesDatamapper from './place.datamapper.js';

/**
 * Instance du datamapper pour les utilisateurs.
 * @type {Object}
 */
export const userDatamapper = new AuthenticationDatamapper(client);
/**
 * Instance du datamapper pour les lieux.
 * @type {Object}
 */
export const placeDatamapper = new PlacesDatamapper(client);





// 20 AOUT POUR CP
// Début de la création des controllers pour la table contact 20 aôut 
// Ceci est l'étape 1
import ContactDataMapper from './contact.datamapper.js';

/**
 * Instance du datamapper pour la page contact 
 * @type {Object}
 */
export const contactDataMapper = new ContactDataMapper(client);