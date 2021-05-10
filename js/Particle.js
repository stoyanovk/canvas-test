import { ctx, canvas } from './canvas'

export const params = {
  MAX_SIZE: 16,
  MIN_SIZE: 0.2
}

export class Particle {
  constructor({ x, y, size, lineWidth }) {
    this.x = x
    this.y = y
    this.size = size
    this.lineWidth = lineWidth // circle line width
    this.speedX = Math.random() * 2 - 1 // I change x position on this number in update method
    this.speedY = Math.random() * 2 - 1 // I change x position on this number in update method
    this.particleType = Math.random() // if this number > 0.45 particle will be full if < it be empty
    this.color = Math.random() > 0.45 ? 'green' : 'red'
    this.transformValue = 'dec' //
  }

  _updateSize() {
    if (this.transformValue === 'dec') {
      this.size -= 0.07
    }
    if (this.transformValue === 'inc') {
      this.size += 0.07
    }
  }

  _changeTransformValue() {
    if (this.size <= params.MIN_SIZE) {
      this.transformValue = 'inc'
    }
    if (this.size >= params.MAX_SIZE) {
      this.transformValue = 'dec'
    }
  }

  _updatePosition() {
    if (this.x > canvas.width + 30) {
      this.x = -30
    }
    if (this.x < -30) {
      this.x = canvas.width + 30
    }
    if (this.y > canvas.height + 30) {
      this.y = -30
    }
    if (this.y < -30) {
      this.y = canvas.height + 3
    }
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    this._updateSize()
    this._updatePosition()
    this._changeTransformValue()
  }

  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 10)
    if (this.particleType > 0.45) {
      ctx.fillStyle = this.color
      ctx.fill()
    } else {
      ctx.strokeStyle = this.color
      ctx.lineWidth = this.lineWidth
      ctx.stroke()
    }
  }
}
