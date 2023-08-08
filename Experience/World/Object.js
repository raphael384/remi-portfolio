import * as THREE from "three";
import Experience from "../Experience.js";
import EventEmitter from "events";

export default class Object extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.resources = this.experience.resources;


        this.time = this.experience.time;

        this.object = this.resources.object;
        this.actualObject = this.object.scene;

        this.setModel();





    }

    setModel() {
        this.scene.add(this.actualObject);

        this.actualObject.children.forEach(element => {
            element.castShadow = true;
            element.receiveShadow = true;

            if (element instanceof THREE.Group) {
                element.children.forEach((groupchild) => {
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }
        });

        this.actualObject.position.y = 1;
        this.actualObject.position.z = 1.5;

        this.actualObject.rotation.x = -Math.PI / 2;
        this.actualObject.rotation.z = Math.PI / 1.5;


    }

    resize() {
    }

    update() {
    }
}
