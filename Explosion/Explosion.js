/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Explosion extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1547594_a9905", "./Explosion/costumes/1547594_a9905.png", {
        x: 200,
        y: 200
      }),
      new Costume("1547594_a99052", "./Explosion/costumes/1547594_a99052.png", {
        x: 200,
        y: 200
      }),
      new Costume("1547594_a99053", "./Explosion/costumes/1547594_a99053.png", {
        x: 200,
        y: 200
      }),
      new Costume("1547594_a99054", "./Explosion/costumes/1547594_a99054.png", {
        x: 200,
        y: 200
      }),
      new Costume("1547594_a99055", "./Explosion/costumes/1547594_a99055.png", {
        x: 200,
        y: 200
      }),
      new Costume("1547594_a99056", "./Explosion/costumes/1547594_a99056.png", {
        x: 200,
        y: 200
      }),
      new Costume("1547594_a99057", "./Explosion/costumes/1547594_a99057.png", {
        x: 200,
        y: 200
      }),
      new Costume("1547594_a99058", "./Explosion/costumes/1547594_a99058.png", {
        x: 200,
        y: 200
      }),
      new Costume("1547594_a99059", "./Explosion/costumes/1547594_a99059.png", {
        x: 200,
        y: 200
      }),
      new Costume(
        "1547594_a990510",
        "./Explosion/costumes/1547594_a990510.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990511",
        "./Explosion/costumes/1547594_a990511.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990512",
        "./Explosion/costumes/1547594_a990512.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990513",
        "./Explosion/costumes/1547594_a990513.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990514",
        "./Explosion/costumes/1547594_a990514.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990515",
        "./Explosion/costumes/1547594_a990515.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990516",
        "./Explosion/costumes/1547594_a990516.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990517",
        "./Explosion/costumes/1547594_a990517.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990518",
        "./Explosion/costumes/1547594_a990518.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990519",
        "./Explosion/costumes/1547594_a990519.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990520",
        "./Explosion/costumes/1547594_a990520.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990521",
        "./Explosion/costumes/1547594_a990521.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990522",
        "./Explosion/costumes/1547594_a990522.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990523",
        "./Explosion/costumes/1547594_a990523.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990524",
        "./Explosion/costumes/1547594_a990524.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990525",
        "./Explosion/costumes/1547594_a990525.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1547594_a990526",
        "./Explosion/costumes/1547594_a990526.png",
        { x: 200, y: 200 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ovniAlcanzado" },
        this.whenIReceiveOvnialcanzado
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "naveAlcanzada" },
        this.whenIReceiveNavealcanzada
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveOvnialcanzado() {
    this.goto(this.sprites["Ovni"].x, this.sprites["Ovni"].y);
    this.visible = true;
    for (let i = 0; i < 25; i++) {
      this.costumeNumber++;
      yield;
    }
    this.visible = false;
  }

  *whenIReceiveNavealcanzada() {
    this.goto(this.sprites["Nave"].x, this.sprites["Nave"].y);
    this.visible = true;
    for (let i = 0; i < 25; i++) {
      this.costumeNumber++;
      yield;
    }
    this.visible = false;
  }
}
