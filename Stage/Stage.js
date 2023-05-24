/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Stars", "./Stage/costumes/Stars.png", { x: 480, y: 360 }),
      new Costume("TheEnd", "./Stage/costumes/TheEnd.jpg", { x: 480, y: 179 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.jugar = 0;
    this.vars.vidas = 0;
    this.vars.puntos = 125;
    this.vars.maximapuntuacion = 125;

    this.watchers.vidas = new Watcher({
      label: "Vidas",
      style: "normal",
      visible: true,
      value: () => this.vars.vidas,
      x: 240,
      y: 180
    });
    this.watchers.puntos = new Watcher({
      label: "Puntos",
      style: "normal",
      visible: true,
      value: () => this.vars.puntos,
      x: 612,
      y: 180
    });
    this.watchers.maximapuntuacion = new Watcher({
      label: "MaximaPuntuacion",
      style: "normal",
      visible: true,
      value: () => this.vars.maximapuntuacion,
      x: 399,
      y: 180
    });
  }
}
