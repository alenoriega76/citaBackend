const {body, validationResult}=require('express-validator');

const validatePedido=[
    body('nombre').notEmpty().withMessage('Este Campo no puede estar vacio'),
    body('email').notEmpty().withMessage('Ingrese su email'),
    body('telefono').notEmpty().withMessage('Ingrese un número telefónico'),
    body('pedido').notEmpty().withMessage('Este Campo no puede estar vacio'),

    (req, res, next) => {
        const errors = validationResult(req);
        console.log(req.body)
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.render("motivoOracion", {
                errors: errors.array(),
            });
        }
        next()
    }

]
module.exports = validatePedido