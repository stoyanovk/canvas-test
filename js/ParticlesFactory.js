import { Particle, params } from './Particle'

export default class ParticlesFactory {
  constructor({ amount, maxPosition, minPosition }) {
    const particles = Array.from({ length: amount }, () => {
      return new Particle({
        x: Math.random() * maxPosition,
        y: Math.random() * minPosition,
        size: Math.random() * params.MAX_SIZE,
        lineWidth: Math.random() * 4
      })
    })
    return particles
  }
}
