import express from 'express';
import registerRouter from './register.api.router.js';
import userRouter from './user.api.router.js';
import placeRouter from './place.api.router.js';
import loginRouter from './login.api.router.js';
import contactRouter from './contact.api.router.js';

const router = express.Router();
// Ce middleware sert à définir le format par défaut des réponses, ici du json.
router.use((_, res, next) => {
    res.returnFormat = 'json';
    next();
});
/**
 * Routeur pour les utilisateurs.
 * @name /user
 * @function
 * @memberof module:routers - ce routeur découle du router principal
 */
router.use('/user', userRouter);

/**
 * Routeur pour l'inscription.
 * @name /register
 * @function
 * @memberof module:routers - ce routeur découle du router principal
 */
router.use('/register', registerRouter);

/**
 * Routeur pour les lieux.
 * @name /places
 * @function
 * @memberof module:routers - ce routeur découle du router principal
 */
router.use('/places', placeRouter);

/**
 * Routeur pour les connexions.
 * @name /places
 * @function
 * @memberof module:routers - ce routeur découle du router principal
 */
router.use('/login', loginRouter);


//20 aout ajout de page contact pour CP
/**
 * Routeur pour page contact.
 * @name /contact
 * @function
 * @memberof module:routers - ce routeur découle du router principal
 */
router.use('/contact', contactRouter);



export default router;
