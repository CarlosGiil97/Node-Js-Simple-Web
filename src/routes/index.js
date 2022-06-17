import {Router} from 'express';
const router = Router();
//enrutamientos
router.get('/', (req, res) => res.render('index', { titulo: 'Hola !'}))
router.get('/sobre-mi', (req, res) => res.render('sobre-mi' , { titulo: 'Sobre mi',info:'Oliver Queen'}))
router.get('/contacto', (req, res) => res.render('contacto' , { titulo: 'Contacto', contenido : 'Contacto'}))

export default router;