/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from "express";

const app = express();

//  app.get("/reviewer", (req, res) => {
//    let a= req.get('url');
//   console.log(a);
//   res.send('YA')
//  });


const dirUrl = '/Users/lalame888/projects/gainhow-review/dist/apps/';
app.use('/reviewer',express.static(dirUrl+'reviewer'));
app.use('/RA',express.static(dirUrl+'RA'));
//app.use('/',express.static(dirUrl+'reviewer'));
app.use('/SQL', express.static(dirUrl+'phpMyAdmin'));


const port = process.env.port || 4300;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/reviewer`);
});
server.on("error", console.error);
