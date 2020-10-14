import express from "express";
import { getRepository } from "typeorm";

import Orphanage from "./models/Orphanage";

import "./database/conection";

const app = express();

app.use(express.json());

app.post("/orphanages", async (req, res) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_on_weekends,
    opening_hours,
  } = req.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_on_weekends,
    opening_hours,
  });

  await orphanagesRepository.save(orphanage);

  return res.json(orphanage);
});

app.listen(3333);
