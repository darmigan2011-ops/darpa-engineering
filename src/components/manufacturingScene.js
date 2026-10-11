import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

// Concept geometry only. These are not dimensions or models of company tools.
export function createManufacturingScene(host) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6))
  renderer.setClearColor('#142725')
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.25
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  const canvas = renderer.domElement
  canvas.tabIndex = 0
  canvas.setAttribute('role', 'img')
  canvas.setAttribute(
    'aria-label',
    'Interactive illustrative manufacturing model. Arrow keys rotate the view. Text explanations follow.',
  )
  host.appendChild(canvas)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 80)
  const target = new THREE.Vector3(0, 0.3, 0)
  let azimuth = 0.65
  let elevation = 0.36
  function positionCamera() {
    camera.position.set(
      Math.sin(azimuth) * Math.cos(elevation) * 11,
      Math.sin(elevation) * 11 + 0.3,
      Math.cos(azimuth) * Math.cos(elevation) * 11,
    )
    camera.lookAt(target)
  }
  positionCamera()
  const pmrem = new THREE.PMREMGenerator(renderer)
  const room = new RoomEnvironment()
  const environment = pmrem.fromScene(room, 0.04)
  scene.environment = environment.texture
  room.dispose()
  pmrem.dispose()
  scene.add(new THREE.HemisphereLight('#dff4e5', '#122021', 2.2))
  const light = new THREE.DirectionalLight('#fff0d7', 4)
  light.position.set(4, 8, 5)
  light.castShadow = true
  light.shadow.mapSize.set(1024, 1024)
  light.shadow.camera.left = -6
  light.shadow.camera.right = 6
  light.shadow.camera.top = 6
  light.shadow.camera.bottom = -6
  scene.add(light)
  const rim = new THREE.DirectionalLight('#91b8aa', 2)
  rim.position.set(-5, 3, -4)
  scene.add(rim)
  const metal = new THREE.MeshStandardMaterial({
    color: '#a5b5b2',
    metalness: 0.78,
    roughness: 0.27,
  })
  const darkMetal = new THREE.MeshStandardMaterial({
    color: '#4f6863',
    metalness: 0.7,
    roughness: 0.35,
  })
  const copper = new THREE.MeshStandardMaterial({
    color: '#ca733f',
    metalness: 0.7,
    roughness: 0.3,
  })
  const molten = new THREE.MeshStandardMaterial({
    color: '#eb8539',
    metalness: 0.25,
    roughness: 0.4,
    emissive: '#b93605',
    emissiveIntensity: 0.45,
  })
  const edgeMaterial = new THREE.LineBasicMaterial({
    color: '#d0ddd3',
    transparent: true,
    opacity: 0.2,
  })
  function box(parent, size, position, material = metal) {
    const geometry = new RoundedBoxGeometry(
      ...size,
      2,
      Math.min(0.035, size[1] / 4),
    )
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(...position)
    mesh.castShadow = true
    mesh.receiveShadow = true
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry, 35),
      edgeMaterial,
    )
    mesh.add(edges)
    parent.add(mesh)
    return mesh
  }
  function bracket(parent, material = copper) {
    const group = new THREE.Group()
    box(group, [1.8, 0.09, 1.4], [0, 0, 0], material)
    box(group, [0.09, 0.75, 1.4], [-0.855, 0.38, 0], material)
    box(group, [0.09, 0.75, 1.4], [0.855, 0.38, 0], material)
    parent.add(group)
    return group
  }
  const tool = new THREE.Group()
  scene.add(tool)
  box(tool, [3.5, 0.35, 2.7], [0, -1.5, 0], darkMetal)
  const die = new THREE.Group()
  box(die, [2.8, 0.35, 2.2], [0, 0, 0])
  box(die, [0.4, 0.45, 1.6], [-1.03, 0.37, 0], darkMetal)
  box(die, [0.4, 0.45, 1.6], [1.03, 0.37, 0], darkMetal)
  die.position.y = -0.9
  tool.add(die)
  const blank = box(tool, [2.2, 0.075, 1.5], [0, -0.2, 0], copper)
  const formed = bracket(tool)
  formed.position.y = -0.65
  formed.visible = false
  const punch = new THREE.Group()
  box(punch, [3.3, 0.35, 2.55], [0, 0, 0])
  box(punch, [1.4, 0.8, 1.35], [0, -0.55, 0], darkMetal)
  punch.position.y = 1.35
  tool.add(punch)
  const guides = []
  for (const x of [-1.35, 1.35])
    for (const z of [-0.96, 0.96]) {
      const post = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 2.8, 20),
        metal,
      )
      post.position.set(x, -0.1, z)
      post.castShadow = true
      tool.add(post)
      guides.push(post)
      const bolt = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.12, 0.08, 6),
        darkMetal,
      )
      bolt.position.set(x, 0.225, z)
      punch.add(bolt)
    }

  const labelTextures = []
  function label(text) {
    const sheet = document.createElement('canvas')
    sheet.width = 512
    sheet.height = 96
    const context = sheet.getContext('2d')
    context.fillStyle = '#142725'
    context.fillRect(0, 0, 512, 96)
    context.strokeStyle = '#7a9783'
    context.lineWidth = 3
    context.strokeRect(2, 2, 508, 92)
    context.font = '34px monospace'
    context.fillStyle = '#eef0e8'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText(text, 256, 48)
    const texture = new THREE.CanvasTexture(sheet)
    texture.colorSpace = THREE.SRGBColorSpace
    labelTextures.push(texture)
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: texture,
        depthTest: false,
        transparent: true,
      }),
    )
    sprite.scale.set(1.3, 0.245, 1)
    tool.add(sprite)
    return sprite
  }
  const labels = {
    upper: label('UPPER SHOE'),
    blank: label('BLANK'),
    die: label('LOWER DIE'),
    base: label('BASE'),
  }

  const casting = new THREE.Group()
  scene.add(casting)
  const mouldLeft = new THREE.Group()
  const mouldRight = new THREE.Group()
  // Split frames expose the cavity instead of representing a verified production die.
  for (const side of [mouldLeft, mouldRight]) {
    box(side, [0.55, 2.25, 2.15], [0, 0, 0], darkMetal)
    box(side, [0.45, 0.4, 2.15], [0.45, 0.92, 0])
    box(side, [0.45, 0.4, 2.15], [0.45, -0.92, 0])
  }
  mouldRight.rotation.y = Math.PI
  casting.add(mouldLeft, mouldRight)
  const castPart = bracket(casting, molten)
  castPart.position.y = -0.4
  const sprue = new THREE.Mesh(
    new THREE.CylinderGeometry(0.09, 0.13, 1.2, 16),
    molten,
  )
  sprue.position.set(0, 1, 0)
  casting.add(sprue)

  const machining = new THREE.Group()
  scene.add(machining)
  const workpiece = box(machining, [2.8, 0.65, 2.1], [0, -0.75, 0], darkMetal)
  box(machining, [3.6, 0.2, 2.7], [0, -1.2, 0])
  const spindle = new THREE.Group()
  const housing = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 1.2, 32),
    metal,
  )
  housing.position.y = 0.4
  spindle.add(housing)
  const cutter = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.18, 0.75, 16),
    copper,
  )
  cutter.position.y = -0.55
  spindle.add(cutter)
  spindle.position.y = 1.2
  machining.add(spindle)

  const finished = new THREE.Group()
  const finalPart = bracket(finished, metal)
  finalPart.scale.setScalar(1.5)
  finalPart.position.y = -0.25
  scene.add(finished)

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30),
    new THREE.ShadowMaterial({ opacity: 0.2 }),
  )
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -1.85
  ground.receiveShadow = true
  scene.add(ground)
  const grid = new THREE.GridHelper(18, 24, '#536d63', '#29433c')
  grid.position.y = -1.84
  scene.add(grid)

  let stage = 0
  let exploded = true
  let reduced = false
  let visible = false
  let frame = 0
  let settled = 0
  let disposed = false
  let pressPhase = 0
  function render() {
    frame = 0
    if (!visible || disposed) return
    const rate = reduced ? 1 : 0.075
    const separation = exploded ? 1 : 0
    const targets = [
      {
        punch: 1.25 + separation * 1.3,
        die: -0.9 + separation * 0.3,
        blank: -0.1 + separation * 0.75,
      },
      { punch: 1.5, die: -0.95, blank: -0.18 },
      { punch: -0.1, die: -0.95, blank: -0.2 },
    ]
    const next = targets[Math.min(stage, 2)]
    tool.visible = stage < 3
    casting.visible = stage === 3
    machining.visible = stage === 4
    finished.visible = stage === 5
    blank.visible = stage !== 2
    formed.visible = stage === 2
    punch.position.y = THREE.MathUtils.lerp(punch.position.y, next.punch, rate)
    die.position.y = THREE.MathUtils.lerp(die.position.y, next.die, rate)
    blank.position.y = THREE.MathUtils.lerp(blank.position.y, next.blank, rate)
    for (const item of Object.values(labels))
      item.visible = stage === 0 && exploded
    labels.upper.position.set(2.4, punch.position.y, 0)
    labels.blank.position.set(2.4, blank.position.y, 0)
    labels.die.position.set(2.4, die.position.y, 0)
    labels.base.position.set(2.4, -1.5, 0)
    guides.forEach((post) => {
      post.position.y = THREE.MathUtils.lerp(
        post.position.y,
        -0.1 + (stage === 0 ? separation * 0.25 : 0),
        rate,
      )
    })
    mouldLeft.position.x = THREE.MathUtils.lerp(
      mouldLeft.position.x,
      exploded ? -1.85 : -0.7,
      rate,
    )
    mouldRight.position.x = THREE.MathUtils.lerp(
      mouldRight.position.x,
      exploded ? 1.85 : 0.7,
      rate,
    )
    spindle.position.y = THREE.MathUtils.lerp(
      spindle.position.y,
      exploded ? 1.65 : 0.75,
      rate,
    )
    workpiece.position.y = THREE.MathUtils.lerp(
      workpiece.position.y,
      exploded ? -0.6 : -0.75,
      rate,
    )
    if (stage === 2 && !reduced && settled < 70) {
      pressPhase += 0.028
      formed.scale.y = THREE.MathUtils.lerp(0.15, 1, Math.min(pressPhase, 1))
    } else formed.scale.y = 1
    renderer.render(scene, camera)
    canvas.dataset.stage = String(stage)
    canvas.dataset.exploded = String(exploded)
    settled++
    if (!reduced && settled < 100) frame = requestAnimationFrame(render)
  }
  function invalidate() {
    settled = 0
    if (!frame && visible && !disposed) frame = requestAnimationFrame(render)
  }
  function resize() {
    const { width, height } = host.getBoundingClientRect()
    if (!width || !height) return
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
    invalidate()
  }
  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(host)
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible) invalidate()
    else {
      cancelAnimationFrame(frame)
      frame = 0
    }
  })
  visibilityObserver.observe(host)
  let drag = null
  function pointerDown(event) {
    if (event.pointerType === 'touch') return
    drag = [event.clientX, event.clientY]
    canvas.setPointerCapture(event.pointerId)
  }
  function pointerMove(event) {
    if (!drag) return
    azimuth -= (event.clientX - drag[0]) * 0.007
    elevation = THREE.MathUtils.clamp(
      elevation + (event.clientY - drag[1]) * 0.005,
      -0.1,
      1.2,
    )
    drag = [event.clientX, event.clientY]
    positionCamera()
    invalidate()
  }
  function pointerUp() {
    drag = null
  }
  function keyDown(event) {
    if (
      !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)
    )
      return
    event.preventDefault()
    azimuth +=
      event.key === 'ArrowLeft' ? 0.12 : event.key === 'ArrowRight' ? -0.12 : 0
    elevation = THREE.MathUtils.clamp(
      elevation +
        (event.key === 'ArrowUp' ? 0.1 : event.key === 'ArrowDown' ? -0.1 : 0),
      -0.1,
      1.2,
    )
    positionCamera()
    invalidate()
  }
  canvas.addEventListener('pointerdown', pointerDown)
  canvas.addEventListener('pointermove', pointerMove)
  canvas.addEventListener('pointerup', pointerUp)
  canvas.addEventListener('pointercancel', pointerUp)
  canvas.addEventListener('keydown', keyDown)
  resize()
  return {
    setStage(value) {
      if (value !== stage) {
        stage = value
        pressPhase = 0
        invalidate()
      }
    },
    setExploded(value) {
      exploded = value
      invalidate()
    },
    setReducedMotion(value) {
      reduced = value
      invalidate()
    },
    resetView() {
      azimuth = 0.65
      elevation = 0.36
      positionCamera()
      invalidate()
    },
    rotate(direction) {
      azimuth += direction === 'left' ? 0.2 : -0.2
      positionCamera()
      invalidate()
    },
    dispose() {
      disposed = true
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
      canvas.removeEventListener('pointerdown', pointerDown)
      canvas.removeEventListener('pointermove', pointerMove)
      canvas.removeEventListener('pointerup', pointerUp)
      canvas.removeEventListener('pointercancel', pointerUp)
      canvas.removeEventListener('keydown', keyDown)
      const geometries = new Set()
      const materials = new Set()
      scene.traverse((object) => {
        if (object.geometry) geometries.add(object.geometry)
        if (object.material)
          (Array.isArray(object.material)
            ? object.material
            : [object.material]
          ).forEach((material) => materials.add(material))
      })
      geometries.forEach((geometry) => geometry.dispose())
      materials.forEach((material) => material.dispose())
      labelTextures.forEach((texture) => texture.dispose())
      environment.dispose()
      renderer.dispose()
      canvas.remove()
    },
  }
}
