import * as THREE from "three";
import Experience from "./Experience.js";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import GUI from "lil-gui";


export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        // this.gui = new GUI({ container: document.querySelector(".page") });
        this.obj = {
            x: 0,
            y: 0,
            z: 0,
            d: 0
        }

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        // this.setControls();

        // this.setGui();

    }

    setGui() {
        this.gui.add(this.obj, "x", 0, 20).onChange(() => {
            this.orthographicCamera.position.x = this.obj.x;
        })
        this.gui.add(this.obj, "y", 0, 20).onChange(() => {
            this.orthographicCamera.position.y = this.obj.y;
        })
        this.gui.add(this.obj, "z", 0, 20).onChange(() => {
            this.orthographicCamera.position.z = this.obj.z;
        })
        this.gui.add(this.obj, "d", 0, 20).onChange(() => {
            this.orthographicCamera.rotation.z = this.obj.z;
        })
    }

    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 100);
        // this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.set(-0.40410149705875004, 11.559919925207533, 12.048067689654232);

    }

    createOrthographicCamera() {
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum / 2,
            -this.sizes.frustrum / 2,
            -100,
            100
        );
        // this.orthographicCamera.position.set(-3.0099185998088394, 6.530571182030227, 9.534533696852433);

        this.orthographicCamera.position.y = 5.65;
        this.orthographicCamera.position.z = 10;
        this.orthographicCamera.rotation.x = -Math.PI / 100;

        this.orthographicCamera.lookAt(0, 0, 0)

        // this.orthographicCamera.position.z = 5;

        this.scene.add(this.orthographicCamera);

    }

    setControls() {
        this.controls = new OrbitControls(this.orthographicCamera, this.canvas);
        this.controls.enableDamping = false;
        this.controls.enableZoom = false;
    }

    resize() {
        // update cameras on resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;

        this.orthographicCamera.updateProjectionMatrix();
    }

    update () {
        // this.controls.update();
        // console.log(`(${this.orthographicCamera.position.x}, ${this.orthographicCamera.position.y}, ${this.orthographicCamera.position.z})`);
    }
}