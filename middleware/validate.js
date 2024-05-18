const { body, validationResult } = require('express-validator');



const validate =[
    body('name_user').notEmpty().withMessage('Este campo no puede estar vacío'),
  body('email').notEmpty().withMessage('Este campo no puede estar vacío').isEmail().withMessage('Debe ser un correo electrónico válido'),
  body('telefono').notEmpty().withMessage('Este campo no puede estar vacío'),
    body('mensaje').notEmpty().withMessage('Este campo no puede estar vacío'),
    (req, res, next) => {
        const errors = validationResult(req);
        console.log(req.body)
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.render("contacto", {
                errors: errors.array(),
            });
        }
        next()
    }
]

module.exports = validate