/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Nave extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("clipart4227203", "./Nave/costumes/clipart4227203.svg", {
        x: 154.12965999999997,
        y: 120.80623000000001
      })
    ];

    this.sounds = [
      new Sound("Laser1", "./Nave/sounds/Laser1.wav"),
      new Sound("Explosion", "./Nave/sounds/Explosion.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "naveAlcanzada" },
        this.whenIReceiveNavealcanzada
      )
    ];

    this.vars.angulo = 0;
  }

  *whenGreenFlagClicked() {
    this.stage.costume = "Stars";
    this.stage.vars.vidas = 3;
    this.stage.vars.puntos = 0;
    while (!(this.toNumber(this.stage.vars.vidas) === 0)) {
      this.stage.vars.jugar = 1;
      this.visible = true;
      this.goto(0, -120);
      this.direction = 0;
      this.vars.angulo = 0;
      while (
        !(
          this.touching(this.sprites["Meteorito"].andClones()) ||
          this.touching(this.sprites["NaveCompleta"].andClones()) ||
          this.touching(this.sprites["Ovni"].andClones())
        )
      ) {
        if (this.keyPressed("left arrow")) {
          if (this.compare(this.x, -215) > 0) {
            this.x -= 5;
          }
        }
        if (this.keyPressed("right arrow")) {
          if (this.compare(this.x, 215) < 0) {
            this.x += 5;
          }
        }
        yield;
      }
      this.broadcast("naveAlcanzada");
      yield* this.wait(2);
      yield;
    }
    this.stage.costume = "TheEnd";
    if (
      this.compare(this.stage.vars.puntos, this.stage.vars.maximapuntuacion) > 0
    ) {
      this.stage.vars.maximapuntuacion = this.stage.vars.puntos;
      /* TODO: Implement stop all */ null;
    }
  }

  *whenIReceiveNavealcanzada() {
    this.visible = false;
    yield* this.startSound("Explosion");
    this.stage.vars.jugar = 0;
    this.stage.vars.vidas--;
  }
}
