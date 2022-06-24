import './style.css'
import {sketch} from 'p5js-wrapper'


sketch.setup = function () {
  createCanvas (1000, 1000)
}

sketch.draw = function () {
  background(0, 0, 20)
}

sketch.mousePressed = function () {
  console.log('hello')
}
