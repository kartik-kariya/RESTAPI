const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Sending details of all Leaders...');
    })
    .post((req, res, next) => {
        res.write('Adding Leaders...' + '\n');
        res.end('Leader Name : ' + req.body.name + '\n' + 'Description : ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Sowrie, PUT operation not Supported on all Leaders...');
    })
    .delete((req, res, next) => {
        res.end('Deleting all Leaders...');
    });

leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Sending details of Leader : ' + req.params.leaderId);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Sowrie, POST operation not Supported on Leader : ' + req.params.leaderId);
    })
    .put((req, res, next) => {
        res.write('Updating Leader Id: ' + req.params.leaderId + '\n');
        res.end('Leader Name : ' + req.body.name + '\n' + 'Description : ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting Leader : ' + req.params.leaderId);
    });

module.exports = leaderRouter;
