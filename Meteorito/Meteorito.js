/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Meteorito extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "meteorito-gif-1",
        "./Meteorito/costumes/meteorito-gif-1.png",
        { x: 303, y: 331 }
      ),
      new Costume(
        "meteorito-gif-12",
        "./Meteorito/costumes/meteorito-gif-12.png",
        { x: 303, y: 331 }
      ),
      new Costume(
        "meteorito-gif-13",
        "./Meteorito/costumes/meteorito-gif-13.png",
        { x: 303, y: 331 }
      ),
      new Costume(
        "meteorito-gif-14",
        "./Meteorito/costumes/meteorito-gif-14.png",
        { x: 303, y: 331 }
      ),
      new Costume(
        "meteorito-gif-15",
        "./Meteorito/costumes/meteorito-gif-15.png",
        { x: 303, y: 331 }
      ),
      new Costume(
        "meteorito-gif-16",
        "./Meteorito/costumes/meteorito-gif-16.png",
        { x: 303, y: 331 }
      ),
      new Costume(
        "meteorito-gif-17",
        "./Meteorito/costumes/meteorito-gif-17.png",
        { x: 303, y: 331 }
      ),
      new Costume(
        "meteorito-gif-18",
        "./Meteorito/costumes/meteorito-gif-18.png",
        { x: 303, y: 331 }
      ),
      new Costume(
        "meteorito-gif-19",
        "./Meteorito/costumes/meteorito-gif-19.png",
        { x: 303, y: 331 }
      ),
      new Costume(
        "meteorito-gif-110",
        "./Meteorito/costumes/meteorito-gif-110.png",
        { x: 303, y: 331 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "naveAlcanzada" },
        this.whenIReceiveNavealcanzada
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      while (!(this.toNumber(this.stage.vars.jugar) === 0)) {
        this.createClone();
        yield* this.wait(this.random(0.2, 0.6));
        yield;
      }
      yield;
    }
  }

  *startAsClone() {
    this.visible = true;
    this.size = this.random(5, 20);
    this.goto(this.random(-230, 230), 200);
    this.direction = 53;
    while (!(this.compare(this.y, -170) < 0)) {
      this.costumeNumber++;
      this.y -= 5;
      yield;
    }
    this.visible = false;
    this.deleteThisClone();
  }

  *whenIReceiveNavealcanzada() {
    this.deleteThisClone();
  }
}
