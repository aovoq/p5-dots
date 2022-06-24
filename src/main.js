import './style.css'
import { sketch } from 'p5js-wrapper'

let circles = []
let numCircles = 50
let maxDistance = 300

class Circle {
   constructor(x, y, dia) {
      this.x = x
      this.y = y
      this.dia = dia
   }

   update() {
      // this.x = this.x + random(-1, 1)
      // this.y = this.y + random(-1, 1)
   }

   draw() {
      noStroke()
      circle(this.x, this.y, this.dia)
   }
}

let c = new Circle()

sketch.setup = function () {
   createCanvas(window.innerWidth, window.innerHeight)
   smooth()

   // circles = new Circle[numCircles]
   for (let i = 0; i < numCircles; i++) {
      circles[i] = new Circle(random(width), random(height), random(25, 45))
   }
}

sketch.draw = function () {
   background(0, 0, 20)

   for (let i = 0; i < numCircles; i++) {
      circles[i].update()
      circles[i].draw()
   }
   stroke(255, 200)
   strokeWeight(1)

   for (let i = 0; i < numCircles; i++) {
      for (let j = i+1; j < numCircles; j++) {
         if (dist(circles[i].x, circles[i].y, circles[j].x, circles[j].y) < maxDistance) {
            line(circles[i].x, circles[i].y, circles[j].x, circles[j].y)
         }
      }
   }
}
