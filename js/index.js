import { ctx, canvas } from './canvas'
import ParticlesFactory from './ParticlesFactory'
import '../style/style.css'

function init() {
  const particles = new ParticlesFactory({
    amount: 100,
    maxPosition: canvas.width,
    minPosition: canvas.height
  })

  for (let ind in particles) {
    particles[ind].draw(ctx)
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let ind in particles) {
      particles[ind].update()
      particles[ind].draw()
    }
    requestAnimationFrame(animate)
  }
  animate()
}

document.addEventListener('DOMContentLoaded', init)
