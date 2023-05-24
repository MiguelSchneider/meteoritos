/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Laser extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "blue-laser-beam-png-png-image-916530",
        "./Laser/costumes/blue-laser-beam-png-png-image-916530.svg",
        { x: 134, y: 21 }
      )
    ];

    this.sounds = [
      new Sound("Teleport2", "./Laser/sounds/Teleport2.wav"),
      new Sound("Laser", "./Laser/sounds/Laser.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ovniAlcanzado" },
        this.whenIReceiveOvnialcanzado
      )
    ];

    this.vars.angulo = 0;
  }

  *whenKeySpacePressed() {
    yield* this.playSoundUntilDone("Laser");
    this.createClone();
    if (this.compare(this.stage.vars.puntos, 0) > 0) {
      this.stage.vars.puntos--;
    }
  }

  *startAsClone() {
    this.goto(this.sprites["Nave"].x, this.sprites["Nave"].y);
    this.direction = this.toNumber(this.vars.angulo);
    this.visible = true;
    while (!this.touching("edge")) {
      this.move(10);
      yield;
    }
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveOvnialcanzado() {
    this.deleteThisClone();
  }
}
