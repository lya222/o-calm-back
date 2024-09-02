import CoreDatamapper from './core.datamappers.js';

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



    async createContact(name, email, message) {
        const data = await this.client.query({
        text: `INSERT INTO "${this.constructor.writeTableName}" (name, email, message) VALUES ($1, $2, $3)`,
        values: [name, email, message],
        });
        return data.rows;

};
};

