import Joi from 'joi';

/**
 * Schéma de validation pour les places.
 * @type {Joi.ObjectSchema}
 * @property {Joi.StringSchema} name - Le nom de la place, doit être une chaîne de caractères avec un minimum de 2 caractères.
 * @property {Joi.NumberSchema} gps_location - La position GPS de la place, doit être un nombre.
 * @property {Joi.StringSchema} image - L'URL de l'image de la place, doit être une chaîne de caractères.
 * @property {Joi.StringSchema} journey - La description du voyage associé à la place, doit être une chaîne de caractères.
 * @property {Joi.StringSchema} description - La description de la place, doit être une chaîne de caractères.
 */
export default Joi.object({
  name: Joi.string().min(2),
  gps_location: Joi.number(),
  image: Joi.string(),
  journey: Joi.string(),
  description: Joi.string(),
});
