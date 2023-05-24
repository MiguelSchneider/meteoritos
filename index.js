import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Nave from "./Nave/Nave.js";
import Laser from "./Laser/Laser.js";
import Ovni from "./Ovni/Ovni.js";
import Explosion from "./Explosion/Explosion.js";
import Meteorito from "./Meteorito/Meteorito.js";
import NaveCompleta from "./NaveCompleta/NaveCompleta.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Nave: new Nave({
    x: 15,
    y: -120,
    direction: 0,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 5
  }),
  Laser: new Laser({
    x: 15,
    y: 170,
    direction: 0,
    costumeNumber: 1,
    size: 10,
    visible: false,
    layerOrder: 1
  }),
  Ovni: new Ovni({
    x: 30,
    y: 131,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 4
  }),
  Explosion: new Explosion({
    x: 15,
    y: -120,
    direction: 90,
    costumeNumber: 5,
    size: 25,
    visible: false,
    layerOrder: 2
  }),
  Meteorito: new Meteorito({
    x: 230,
    y: -198,
    direction: 53,
    costumeNumber: 5,
    size: 15,
    visible: false,
    layerOrder: 3
  }),
  NaveCompleta: new NaveCompleta({
    x: 76,
    y: 162,
    direction: -88.03405154037858,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 6
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
