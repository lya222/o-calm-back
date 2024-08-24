// Ceci est l'étape 2 dans la création du controller pour contact 
import CoreDatamapper from './core.datamappers.js';

/**
 * Datamapper pour les entités "place".
 * Hérite des méthodes de base du CoreDatamapper.
 */
export default class ContactDataMapper extends CoreDatamapper {
    /**
     * Nom de la table en lecture.
     * @type {string}
     */
    static readTableName = 'contact';

    /**
     * Nom de la table en écriture.
     * @type {string}
     */
    static writeTableName = 'contact';



    async createContact(input) {
        const columnNames = Object.keys(input);
        // values = valeurs des colonnes
        const values = Object.values(input);
        // on créé les $1, $2, $3, etc.
        const valuesPosition = columnNames.map((_, index) => `$${index + 1}`).join(', ');

        const message = await this.client.query(`
        INSERT INTO "${this.constructor.writeTableName}" (${[...columnNames]})
        VALUES (${valuesPosition})
        RETURNING *`,
        values);


        return message.rows;




    };
};

//continuer la suite apres avoir crée les tables