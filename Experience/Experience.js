import * as THREE from 'three';

import Sizes from './Utils/Sizes.js';
import Time from './Utils/Time.js';
import Resources from './Utils/Resources.js';

import Camera from './Camera.js';
import Renderer from './Renderer.js';

import World from './World/World.js';
import Animation from './World/Animation.js';
import Helpers from './Utils/Helpers.js';
import assets from "./Utils/assets.js"

export default class Experience {
    constructor(canvas) {
        if (Experience.instance) {
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();

        
        this.resources = new Resources(assets);

        this.world = new World();
        this.animation = new Animation();

        this.helpers = new Helpers();


        this.sizes.on("resize", () => { this.resize() })
        this.time.on("update", () => { this.update() });

    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }

    update() {
        this.camera.update();
        this.renderer.update();
        this.animation.update();
        // this.world.object.update();
    }
}