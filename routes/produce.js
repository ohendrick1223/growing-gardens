'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get("/", (req, res, next) => {
  knex("produce")
  .then (results => {
    if (results.length === 0) {
      return res.send (404);
    }
    return res.status(200).send(results);
  });
  .catch(err => {
    next(err);
  })
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;

  knex ("produce")
  .where("produce.id", id)
  .first()
  .then(result => {
    if (!result) {
      return res.send(404);
    }
    return res.send(200).send(result);
  })
  .catch (err => {
    next(err);
  });
});

router.post("/", (req, res, next) => {
  const newProduce = req.body.name;
  knex ("produce")
  .insert(newProduce)
  .then(result => {
    res.status(200).send(newProduce);
  })
  .catch(err =>{
    next(err);
  });
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const name = req.params.name;
  const updatedProduce = name;

  knex("produce")
  .where("produce.id", id)
  .update(updatedProduce, "*")
  .then(success => {
    knex("produce")
    .where("produce.id")
    .first()
    .then(result => {
      res.status(200).send(result);
    })
    .catch (err => {
      next(err);
    });
  })
  .catch(err => {
    next(err);
  });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  knex("produce")
  .where("produce.id", id)
  .del()
  .then(result => {
    res.send(200);
  })
  .catch (err => {
    next(err);
  });
});

module.exports = router;
