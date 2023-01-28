import EventEmitter from "eventemitter3";
import anime from "animejs";
export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.init();
    this.emit(Application.events.READY);
  }
  init() {

    
    // const collection = document.getElementsByClassName("article");
    // collection.style.color="red";
    // collection.addEventListener("click", () => {
    //   collection.style.color="red";
    //   console.log("2")}

    var Animation= anime({
      targets:".article",
      translateX: 250,
      direction: 'alternate',
      loop: true,
      easing: 'spring(1, 80, 10, 0)'
    })



    const collection = document.querySelector(".article");
    collection.addEventListener("click", () => {
      anime({
        targets:collection,
        translateX: 250,
        direction: 'alternate',
        loop: true,
        easing: 'spring(1, 80, 10, 0)'
      })
      
    }
    );

  // document.querySelector('.play-Animation').onclick = Animation.restart;

    

  //   myScript() {
  //   console.log(collection);
  // }
}}
