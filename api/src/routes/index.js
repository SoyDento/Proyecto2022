const { Router } = require('express');

const router = Router();

// const checkAuth = require("../middlewares/checkAuth");

// const { playersGet,
//   playerIDget,
//   courtsGet,
//   categoriesGet,
//   playerIDremove,
//   playerPost,
//   tournamentPost,
//   tournamentsGet,
//   tournamentIDget,
//   altAttribute,
//   categoriesPost,
//   playersGet,
//   tournamentAlt,
//   tournamentIDremove,
//   playerIDremove,
//   mailPost,
//   mailGet,} = require('../controllers');

// const checkoutControllers = require('../utils/CheckOut/checkoutControllers');


// const {
//   playerRegist,
//   playerLogin,
// } = require("../controllers/authControllers.js");





// //---------------GET

// router.get('/players', playersGet); 

// router.get('/players/:id', playerIDget);   

// router.get('/courts', courtsGet);

// router.get('/categories', categoriesGet)

// router.get('/tournaments', tournamentsGet);

// router.get('/tournaments/:id', tournamentIDget);

// router.get('/newsletter', mailGet);


// //---------------DELETE

// router.delete('/players/remove', playerIDremove);

// router.delete('/tournaments/remove', tournamentIDremove);


// //---------------POST

// router.post('/players', playerPost);

// router.post("/tournaments", tournamentPost);

// router.post('/categories', categoriesPost);

// router.post("/checkout", checkoutControllers.pago); // MercadoLibre

// router.post('/newsletter', mailPost);

// router.post("/nodemailer", nodemailerPost);


// //---------------PUT

// router.put('/players/:attribute', altAttribute);

// router.put('/tournaments/:attribute', tournamentAlt);


// /* -------------- Auth ---------------------*/

// router.post('/players/registration', playerRegist);

// router.post('/players/login', playerLogin);

// router.get("/players/confirm/:token", confirm);




module.exports = router;