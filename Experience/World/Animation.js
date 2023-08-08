import * as THREE from "three";
import Experience from "../Experience.js";

import Environment from "./Environment.js";

import Resources from "../Utils/Resources.js";
import Floor from "./Floor.js";

import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import EventEmitter from "events";


export default class Animation extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.world = this.experience.world;

        this.experience.world.on("worldready", () => {
            this.object = this.experience.world.object.actualObject;
            this.float();
            this.setFirstSectionAnimation();
            this.setSecondSectionAnimation();
            this.blob();
            this.setCardsAnimation();

        });


        GSAP.registerPlugin(ScrollTrigger);
    }

    float() {

        this.floatingEffect = GSAP.to(this.object.rotation, {
            duration: "random(3.0,4.0)",
            y: "+= random(-3.10,3.10)",
            x: "+= random(-3.10,3.10)",
            z: "+= random(-3.10,3.10)",
            ease: "Power3.easeInOut",
            onComplete: () => {
                this.float();
            },
        });
    }

    setFirstSectionAnimation() {

        
    }

    setSecondSectionAnimation() {
        this.secondTimeline = GSAP.timeline({
            scrollTrigger: {
                trigger: ".second-section",
                start: "top center",
                end: "bottom bottom",
                scrub: 1,
                markers: false,
            },



        }).to(this.object.scale, {
            x: 0.8,
            y: 0.8,
            z: 0.8,
        }).to(this.object.position, {
            x: 0,
        })
    }

    blob() {
        GSAP.timeline({
            scrollTrigger: {
                trigger: ".second-section",
                start: "bottom bottom",
                end: "bottom bottom",
                scrub: false,
                onEnter: () => {
                    // document.querySelector(".second-section").style.overflow = "hidden";

                    document.querySelector(".blob").classList.add("blob-complete")
                    // this.floatingEffect.pause();
                    GSAP.to(".cards-wrapper", {
                        opacity: 1,
                        delay: 1,

                    });
                },
                onEnterBack: () => {
                    // document.querySelector(".second-section").style.overflow = "visible";
                    GSAP.to(".cards-wrapper", {
                        opacity: 0,
                        delay: 0,
                        duration: 0.1

                    });
                    this.floatingEffect.play();
                    document.querySelector(".blob").classList.remove("blob-complete")
                },

            }
        })
    }

    setCardsAnimation() {

        ScrollTrigger.matchMedia({
            // Desktop
            "(min-width: 969px)": () => {
                console.log("fired desktop");

                this.container = document.querySelector(".second-section");
                this.cards = GSAP.utils.toArray(".cards-wrapper div.card");

                this.scrollTween = GSAP.to(this.cards, {
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".second-section",
                        end: "+=2200",
                        pin: true,
                        scrub: 0.1,
                        onLeave: () => {
                            document.querySelector(".cards-wrapper").style.overflow = "visible";
                        }
                    }
                })

                this.deltaTrigger = 800;
                this.deltaPosition = 5;
                this.deltaRotation = 7;

                this.cards.forEach((card) => {
                    this.cardAnimation = GSAP.to(card, {
                        scrollTrigger: {
                            trigger: ".cards-wrapper",
                            start: `+=${this.deltaTrigger}`,
                            end: "+=300",
                            markers: false,
                            scrub: 1,
                            

                        },
                        xPercent: -55 + this.deltaPosition,
                        yPercent: -85 + this.deltaPosition,
                        opacity: 1,
                        rotate: this.deltaRotation
                    })


                    this.deltaTrigger += 400;
                    this.deltaPosition += 5;
                    this.deltaRotation -= 5;
                })

            },
            // Mobile
            "(max-width: 968px)": () => {
                // console.log("fired mobile");
                this.cards = GSAP.utils.toArray(".cards-wrapper div.card");

                this.scrollTween = GSAP.to(this.cards, {
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".second-section",
                        end: "+=2200",
                        pin: true,
                        scrub: 0.1,
                        onLeave: () => {
                            document.querySelector(".cards-wrapper").style.overflow = "visible";
                        }
                    }
                });

                this.deltaTrigger = 800;
                this.deltaPosition = 5;
                this.deltaScale = 1

                this.cards.forEach((card) => {
                    this.cardAnimation = GSAP.to(card, {
                        ease: "back.in(1.7)",
                        scrollTrigger: {
                            trigger: ".cards-wrapper",
                            start: `+=${this.deltaTrigger}`,
                            end: "+=300",
                            markers: false,
                            scrub: 1,
                            
                            

                        },
                        yPercent: -160 + this.deltaPosition,
                        opacity: 1,
                        scale: this.deltaScale,
                    })

                    this.deltaScale += 0.1;
                    this.deltaTrigger += 400;
                    this.deltaPosition += 15;
                })
                
            }
        });


    }

    resize() {
    }

    update() {

    }


}







