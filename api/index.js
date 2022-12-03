const server = require('./src/app.js');
const { conn, PORT } = require('./src/db.js');

// const  pushCourts  = require('./src/utils/pushDatabase/pushCourts.js');
// const  pushLevels  = require('./src/utils/pushDatabase/pushLevels.js');
// const  pushTournaments  = require('./src/utils/pushDatabase/pushTournaments.js');
// const  pushPlayers = require('./src/utils/pushDatabase/pushPlayers.js');



// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  // pushPlayers();
  // pushLevels();
  // pushCourts();
  // pushTournaments();    

  
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); 
  });
});
