const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Sending details of all Promotions...');
    })
    .post((req, res, next) => {
        res.write('Adding Promotions...' + '\n');
        res.end('Promotion Name : ' + req.body.name + '\n' + 'Description : ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Sowrie, PUT operation not Supported on all Promotions...');
    })
    .delete((req, res, next) => {
        res.end('Deleting all Promotions...');
    });

promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Sending details of Promotion Number: ' + req.params.promoId);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Sowrie, POST operation not Supported on Promotion Number : ' + req.params.promoId);
    })
    .put((req, res, next) => {
        res.write('Updating Promotion Number: ' + req.params.promoId + '\n');
        res.end('Promotion Name : ' + req.body.name + '\n' + 'Description : ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting Promotion Number : ' + req.params.promoId);
    });

module.exports = promoRouter;
