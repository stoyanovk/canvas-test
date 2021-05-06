import '../style/style.css'

const canvas = document.getElementById('canvas-1')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

function canvasDraw(x, y) {
  console.log(ctx)

  ctx.fillStyle = 'red'
  ctx.strokeStyle = 'green'
  ctx.lineWidth = '4'
  ctx.beginPath()
  ctx.arc(x, y, 40, 0, Math.PI * 5)
  ctx.fill()
}
canvas.addEventListener('click', function (e) {
  canvasDraw(e.x, e.y)
})
canvas.addEventListener('mousemove', function (e) {
  canvasDraw(e.x, e.y)
})
// window.addEventListener('resize', canvasDraw)
document.addEventListener('DOMContentLoaded', canvasDraw)
