/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ovni extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ovni", "./Ovni/costumes/ovni.png", { x: 256, y: 256 })
    ];

    this.sounds = [
      new Sound("Laser2", "./Ovni/sounds/Laser2.wav"),
      new Sound("Coin", "./Ovni/sounds/Coin.wav"),
      new Sound("Explosion", "./Ovni/sounds/Explosion.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ovniAlcanzado" },
        this.whenIReceiveOvnialcanzado
      )
    ];

    this.audioEffects.volume = 5;
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(-250, this.random(0, 150));
      this.direction = 90;
      this.visible = true;
      while (!(this.toNumber(this.stage.vars.jugar) === 0)) {
        if (this.touching(this.sprites["Laser"].andClones())) {
          yield* this.startSound("Coin");
          this.stage.vars.puntos += 10;
          this.broadcast("ovniAlcanzado");
        }
        if (this.compare(this.x, 200) > 0) {
          this.goto(-250, this.random(0, 150));
        }
        if (this.touching(this.sprites["Meteorito"].andClones())) {
          this.audioEffects.volume = 5;
          yield* this.startSound("Explosion");
          yield* this.broadcastAndWait("ovniAlcanzado");
        }
        this.move(5);
        yield;
      }
      this.visible = false;
      yield;
    }
  }

  *whenIReceiveOvnialcanzado() {
    this.visible = false;
    yield* this.wait(3);
    this.goto(-250, this.random(0, 150));
    this.visible = true;
    this.audioEffects.volume = 100;
  }
}
