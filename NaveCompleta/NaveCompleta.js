/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NaveCompleta extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "nave_completa",
        "./NaveCompleta/costumes/nave_completa.svg",
        { x: 56, y: 82 }
      ),
      new Costume(
        "nave_completa2",
        "./NaveCompleta/costumes/nave_completa2.svg",
        { x: 57, y: 82 }
      ),
      new Costume(
        "nave_completa3",
        "./NaveCompleta/costumes/nave_completa3.svg",
        { x: 61, y: 79 }
      ),
      new Costume(
        "nave_completa4",
        "./NaveCompleta/costumes/nave_completa4.svg",
        { x: 59, y: 79 }
      ),
      new Costume(
        "nave_completa5",
        "./NaveCompleta/costumes/nave_completa5.svg",
        { x: 59, y: 91 }
      ),
      new Costume(
        "nave_completa6",
        "./NaveCompleta/costumes/nave_completa6.png",
        { x: 160, y: 200 }
      ),
      new Costume(
        "nave_completa7",
        "./NaveCompleta/costumes/nave_completa7.png",
        { x: 160, y: 200 }
      )
    ];

    this.sounds = [
      new Sound("Teleport2", "./NaveCompleta/sounds/Teleport2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costume = "nave_completa";
      yield* this.wait(0.1);
      this.costume = "nave_completa2";
      if (this.touching(this.sprites["Laser"].andClones())) {
        yield* this.startSound("Teleport2");
        this.stage.vars.puntos += 20;
        this.costume = "nave_completa3";
        for (let i = 0; i < 4; i++) {
          yield* this.wait(0.2);
          this.costumeNumber++;
          yield;
        }
        this.visible = false;
        this.goto(this.random(-150, 150), 240);
        yield* this.wait(this.random(3, 7));
        this.visible = true;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.goto(this.random(-150, 150), 162);
      this.visible = true;
      while (!(this.toNumber(this.stage.vars.jugar) === 0)) {
        if (this.compare(this.y, -160) > 0) {
          this.y -= 3;
        } else {
          this.visible = false;
          this.goto(this.random(-150, 150), 240);
          yield* this.wait(this.random(3, 7));
          this.visible = true;
        }
        yield;
      }
      this.visible = false;
      yield;
    }
  }
}
