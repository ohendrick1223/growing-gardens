'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.post("/", (req, res, next) => {
  const { produce_name, produce_image_url, color } = req.body;
  const newProduce = { produce_name, produce_image_url, color };
  knex('produce')
    .where('produce.produce_name', produce_name)
    .first()
    .then(result => {
      if (!result) {
        return knex("produce")
          .insert(newProduce)
          .then(success => {
            return knex('produce')
              .where('produce.produce_name', produce_name)
              .then(result => {
                return res.status(200).send(result);
              })
              .catch(err => {
                next(err);
              });
          })
          .catch(err => {
            next(err);
          });
      } else {
        return res.status(400).send({
          success: false,
          message: 'Produce already exists.'
        });
      }
    });
});

router.use((req, res, next) => {
  // decode token
  if (req.decoded.is_admin) {
    next();
  } else {
    // if there is no token
    // return an error
    return res.status(401).send({
      success: false,
      message: 'Unauthorized.'
    });
  }
});

router.get("/", (req, res, next) => {
  knex("produce")
    .then(results => {
      if (results.length === 0) {
        return res.send(404);
      }
      return res.status(200).send(results);
    })
    .catch(err => {
      next(err);
    });
});


router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const { produce_name, produce_image_url, color } = req.body;
  const updatedProduce = { produce_name, color };

  knex("produce")
    .where("produce.id", id)
    .update(updatedProduce, "*")
    .then(success => {
      knex("produce")
        .where("produce.id", id)
        .first()
        .then(result => {
          res.status(200).send(result);
        })
        .catch(err => {
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
    .catch(err => {
      next(err);
    });
});

module.exports = router;
