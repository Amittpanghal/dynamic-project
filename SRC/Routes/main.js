const express  = require("express");

const Detail = require("../models/user");

const routes = express.Router();

// routes.get('/home', (request, response) =>{
//     response.render("index");
// })



// Route to retrieve an item by _id
routes.get('/home', async (req, res) => {
    try {
    //   const itemId = req.params.itemId; // Get the itemId from the route parameter
      const Details = await Detail.findById("64db1437d715e435da176e6a"); // Use the Mongoose "findById" method to retrieve the item
      if (!Details) {
        return res.status(404).json({ message: 'Detail not found' });
      }
    //   console.log(Details)
    res.render("index", {details : Details});
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving item', error: error.message });
    }
  });
  routes.get('/gallery',async (request, response) =>{
    try {
      //   const itemId = req.params.itemId; // Get the itemId from the route parameter
        const Details = await Detail.findById("64db1437d715e435da176e6a"); // Use the Mongoose "findById" method to retrieve the item
        if (!Details) {
          return res.status(404).json({ message: 'Detail not found' });
        }
      //   console.log(Details)
      response.render("gallery", {details : Details});
      } catch (error) {
        res.status(500).json({ message: 'Error retrieving item', error: error.message });
      }
})


module.exports = routes;

