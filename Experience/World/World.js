import * as THREE from "three";
import Experience from "../Experience.js";
import Object from "./Object.js";
import Environment from "./Environment.js";

import Resources from "../Utils/Resources.js";
import Floor from "./Floor.js";
import EventEmitter from "events";


export default class World extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = new Resources();

        this.resources.on("ready", () => {
            // console.log("ready receive");
            this.environment = new Environment();
            this.floor = new Floor();
            this.object = new Object();
            this.emit("worldready");
        });

    }


    resize() {
    }

    update() {

    }
}