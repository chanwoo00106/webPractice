const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7

class Sprite {
  constructor({ position, velocity }) {
    this.position = position
    this.velocity = velocity
    this.height = 150
    this.lastKey
  }

  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, 50, this.height)
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0
    } else this.velocity.y += gravity
  }
}

const player = new Sprite({
  position: {
    x: 0,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 10
  }
})

const enemy = new Sprite({
  position: {
    x: 400,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 10
  }
})

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  w: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  },
}

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0
  enemy.velocity.x = 0

  // player movement
  if (keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5
  }

  // enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5
  }
}

animate()

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case 'd':
    case 'a':
      keys[e.key].pressed = true
      player.lastKey = e.key
    break;

    case 'w':
      player.velocity.y = -20
    break;

    case 'ArrowRight':
    case 'ArrowLeft':
      keys[e.key].pressed = true
      enemy.lastKey = e.key
      break;
    case 'ArrowUp':
      enemy.velocity.y = -20
  }
})

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case 'd':
    case 'a':
      keys[e.key].pressed = false
    break;

    case 'ArrowRight':
    case 'ArrowLeft':
      keys[e.key].pressed = false
  }
})
