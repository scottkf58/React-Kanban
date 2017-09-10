const express = require('express');
const app = express();
const bp = require('body-parser');
const { Card } = require('../models');
const db = require('../models');


const PORT = process.env.PORT || 3001;

app.use(bp.urlencoded());


app.get('/cards', (req, res)=> {
  Card.findAll()
    .then( (cards) => {
      res.json(cards);
    });
});

app.post('/cards', (req, res) => {
  Card.create({
    title: req.body.title,
    priority: req.body.priority,
    assignedTo: req.body.assignedTo,
    createdBy: req.body.createdBy,
    status: req.body.status
  })
  .then( (card) => {
    return Card.findAll();
  })
  .then( (cards) => {
    res.json(cards);
  })
  .catch( (err) => {
    console.log(err);
  });
});

app.delete('/cards/:id', (req, res) => {
  Card.destroy({
    where: {
      id: req.params.id
    }
  })
  .then( (card) => {
    return Card.findAll();
  })
  .then( (cards) => {
    res.json(cards);
  })
  .catch( (err) => {
    console.log(err);
  });
});


app.put('/cards/:id/edit', (req, res) => {
  Card.findById(req.params.id)
    .then( (card) => {
      card.update(req.body)
        .then( () => {
          return Card.findAll();
        })
        .then( (cards) => {
          res.json(cards);
        });
    });
});



const server = app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`Server running on ${PORT}`);
});

