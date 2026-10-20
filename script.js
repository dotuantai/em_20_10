/* ==========================================================================
   WEBSITE CHÚC MỪNG 20/10 - DÀNH RIÊNG CHO MỸ HÒA ❤️
   Công nghệ: HTML5, CSS3, JavaScript Thuần, Three.js & Canvas Confetti
   ========================================================================== */

// ==========================================================================
// 1. KHU VỰC CẤU HÌNH CÁ NHÂN HÓA (DỄ DÀNG CHỈNH SỬA TẠI ĐÂY)
// ==========================================================================
const CONFIG = {
  // Tên người nhận và người gửi
  loverName: "Mỹ Hòa",                 // Tên người yêu của bạn
  loverNickname: "Công chúa Mỹ Hòa",   // Biệt danh đáng yêu
  senderName: "Anh của em",            // Tên của bạn
  
  // Ngày kỷ niệm yêu nhau (Định dạng: YYYY-MM-DDTHH:MM:SS)
  // Bạn có thể đổi ngày bắt đầu yêu nhau ở đây
  anniversaryDate: "2026-09-03T08:00:00",

  // Lời chúc 20/10 hiển thị dạng gõ máy chữ
  wishLetter: 
`Chúc công chúa của anh một ngày 20/10 thật hạnh phúc ❤️

Cảm ơn em vì đã xuất hiện trong cuộc đời anh, mang đến cho anh những nụ cười và những khoảnh khắc thật đặc biệt.

Anh mong em luôn xinh đẹp, vui vẻ, bình an và luôn được yêu thương. Dù ngoài kia có bao nhiêu điều mệt mỏi, anh vẫn mong mình sẽ là người khiến em mỉm cười mỗi ngày.

Ngày 20/10 này, anh không có món quà gì quá lớn lao, chỉ có một trái tim luôn dành một vị trí đặc biệt cho em.

Anh yêu em nhiều lắm! 💗`,

  // Danh sách các bông hoa trong Khu Vườn Bí Mật
  flowers: [
    {
      id: "rose",
      name: "Hoa Hồng Đỏ",
      icon: "🌹",
      message: "Em là bông hoa đẹp nhất, rạng rỡ và quyến rũ nhất trong khu vườn trái tim anh. Yêu em vô bờ bến! 🌹"
    },
    {
      id: "tulip",
      name: "Hoa Tulip Hồng",
      icon: "🌷",
      message: "Hoa tulip tượng trưng cho tình yêu thuần khiết. Tình cảm anh dành cho Mỹ Hòa mãi vẹn nguyên và chân thành như ngày đầu. 🌷"
    },
    {
      id: "sunflower",
      name: "Hoa Hướng Dương",
      icon: "🌻",
      message: "Như hoa hướng dương luôn hướng về vầng thái dương, ánh mắt và trái tim anh sẽ luôn dõi theo và che chở cho em. 🌻"
    },
    {
      id: "cherry",
      name: "Hoa Anh Đào",
      icon: "🌸",
      message: "Nụ cười của Mỹ Hòa ngọt ngào và dịu dàng như những cánh hoa anh đào đầu xuân, làm bừng sáng cả thế giới của anh. 🌸"
    },
    {
      id: "bouquet",
      name: "Bó Hoa Tình Yêu",
      icon: "💐",
      message: "Dành tặng cả vườn hoa rực rỡ này cho người phụ nữ tuyệt vời nhất trong lòng anh ngày 20/10! 💐"
    }
  ],

  // Danh sách ảnh kỷ niệm (Dạng Polaroid 3D)
  // Bạn có thể thay bằng link ảnh thật của hai người
  memories: [
    {
      url: "images/photo1.jpg",
      caption: "Khoảnh khắc ngọt ngào bên em 💕",
      date: "Kỷ niệm ngày bên nhau"
    },
    {
      url: "images/photo2.jpg",
      caption: "Nụ cười của em là bình yên của anh 🌸",
      date: "Những chuyến đi đáng nhớ"
    },
    {
      url: "images/photo3.jpg",
      caption: "Nắm tay em đi qua mọi mùa yêu thương 🤝",
      date: "Hạnh phúc giản đơn"
    },
    {
      url: "images/photo4.png",
      caption: "20/10 ngập tràn niềm vui nhé công chúa 💖",
      date: "20.10.2026"
    }
  ],

  // Nhạc nền (Link dự phòng an toàn)
  musicUrl: "https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6591201e.mp3?filename=romantic-piano-111164.mp3"
};

// ==========================================================================
// 2. KHỞI TẠO DỮ LIỆU CÁ NHÂN VÀO GIAO DIỆN
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Cập nhật tên người yêu & người gửi lên giao diện
  const introTo = document.getElementById("intro-to-name");
  const mainLoverName = document.getElementById("main-lover-name");
  const mainSenderCredit = document.getElementById("main-sender-credit");
  const letterSenderName = document.getElementById("letter-sender-name");

  if (introTo) introTo.textContent = `Gửi: ${CONFIG.loverName} 💖`;
  if (mainLoverName) mainLoverName.textContent = CONFIG.loverName;
  if (mainSenderCredit) mainSenderCredit.textContent = `From ${CONFIG.senderName}, with all my love ❤️`;
  if (letterSenderName) letterSenderName.textContent = `${CONFIG.senderName} ❤️`;

  // Khởi động các module
  initBackgroundCanvas();
  initIntroEnvelope();
  initAudioPlayer();
  initLoveCounter();
  initGarden();
  initPolaroidGallery();
  initMysteryGiftBox();
  initAudioSynthesizer();
});

// ==========================================================================
// 3. SOUND SYNTHESIZER (Web Audio API - Luôn hoạt động không cần file âm thanh)
// ==========================================================================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSweetChime() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Hợp âm Đô trưởng ngọt ngào)
  
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + idx * 0.08);
    gain.gain.setValueAtTime(0.12, now + idx * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.8);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + idx * 0.08);
    osc.stop(now + idx * 0.08 + 0.85);
  });
}

function playPopSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(400, now);
  osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
  gain.gain.setValueAtTime(0.15, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.16);
}

function initAudioSynthesizer() {
  // Kích hoạt khi có tương tác đầu tiên của người dùng
  document.addEventListener("click", () => getAudioContext(), { once: true });
}

// ==========================================================================
// 4. HIỆU ỨNG NỀN CANVAS (CÁNH HOA HỒNG & SAO TRỜI & ĐOM ĐÓM)
// ==========================================================================
let bgCanvas, bgCtx;
let particles = [];
let petals = [];
let isHeartsEffectEnabled = true;

function initBackgroundCanvas() {
  bgCanvas = document.getElementById("bg-canvas");
  if (!bgCanvas) return;
  bgCtx = bgCanvas.getContext("2d");

  function resizeCanvas() {
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Tạo các ngôi sao lấp lánh & hạt đom đóm
  const particleCount = Math.min(window.innerWidth > 768 ? 60 : 35, 70);
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * bgCanvas.width,
      y: Math.random() * bgCanvas.height,
      radius: Math.random() * 2 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      color: Math.random() > 0.4 ? "#ffd166" : "#ff758c"
    });
  }

  // Tạo các cánh hoa hồng rơi (Rose Petals)
  const petalCount = window.innerWidth > 768 ? 25 : 15;
  for (let i = 0; i < petalCount; i++) {
    petals.push(createPetal());
  }

  animateBackground();

  // Nút bật/tắt hiệu ứng
  const toggleBtn = document.getElementById("hearts-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isHeartsEffectEnabled = !isHeartsEffectEnabled;
      const tooltip = toggleBtn.querySelector(".btn-tooltip");
      if (tooltip) tooltip.textContent = `Hiệu ứng: ${isHeartsEffectEnabled ? 'Bật' : 'Tắt'}`;
      toggleBtn.style.opacity = isHeartsEffectEnabled ? "1" : "0.5";
    });
  }
}

function createPetal() {
  return {
    x: Math.random() * (bgCanvas ? bgCanvas.width : window.innerWidth),
    y: Math.random() * -100,
    size: Math.random() * 12 + 10,
    speedY: Math.random() * 1.2 + 0.8,
    speedX: Math.random() * 1.5 - 0.75,
    rotation: Math.random() * 360,
    rotationSpeed: Math.random() * 2 - 1,
    sway: Math.random() * Math.PI * 2,
    swaySpeed: Math.random() * 0.03 + 0.01,
    color: Math.random() > 0.5 ? "#ff4d6d" : "#ff758c"
  };
}

function animateBackground() {
  if (!bgCtx || !bgCanvas) return;
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

  // Vẽ các hạt sao / đom đóm
  particles.forEach(p => {
    p.alpha += p.speed;
    const currentAlpha = (Math.sin(p.alpha) + 1) / 2;
    bgCtx.save();
    bgCtx.beginPath();
    bgCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    bgCtx.fillStyle = p.color;
    bgCtx.globalAlpha = currentAlpha * 0.8;
    bgCtx.shadowBlur = 8;
    bgCtx.shadowColor = p.color;
    bgCtx.fill();
    bgCtx.restore();
  });

  // Vẽ cánh hoa hồng rơi nếu được bật
  if (isHeartsEffectEnabled) {
    petals.forEach(pt => {
      pt.y += pt.speedY;
      pt.sway += pt.swaySpeed;
      pt.x += pt.speedX + Math.sin(pt.sway) * 0.8;
      pt.rotation += pt.rotationSpeed;

      if (pt.y > bgCanvas.height + 50 || pt.x < -50 || pt.x > bgCanvas.width + 50) {
        Object.assign(pt, createPetal());
      }

      bgCtx.save();
      bgCtx.translate(pt.x, pt.y);
      bgCtx.rotate((pt.rotation * Math.PI) / 180);
      bgCtx.fillStyle = pt.color;
      bgCtx.globalAlpha = 0.7;

      // Vẽ hình dạng cánh hoa hồng cong mềm
      bgCtx.beginPath();
      bgCtx.moveTo(0, 0);
      bgCtx.bezierCurveTo(-pt.size / 2, -pt.size / 2, -pt.size, pt.size / 3, 0, pt.size);
      bgCtx.bezierCurveTo(pt.size, pt.size / 3, pt.size / 2, -pt.size / 2, 0, 0);
      bgCtx.fill();

      bgCtx.restore();
    });
  }

  requestAnimationFrame(animateBackground);
}

// ==========================================================================
// 5. MÀN HÌNH MỞ ĐẦU - PHONG BÌ THƯ TÌNH
// ==========================================================================
function initIntroEnvelope() {
  const introScreen = document.getElementById("intro-screen");
  const mainContent = document.getElementById("main-content");
  const envelope = document.getElementById("envelope");
  const btnOpen = document.getElementById("btn-open-gift");
  const bgAudio = document.getElementById("bg-audio");

  let isOpened = false;

  function openGiftExperience() {
    if (isOpened) return;
    isOpened = true;

    // Âm thanh ngọt ngào
    playSweetChime();

    // Mở nhạc nền
    if (bgAudio) {
      bgAudio.volume = 0.6;
      bgAudio.play().catch(() => {
        console.log("Audio autoplay restricted, user can toggle on floating button");
      });
    }

    // Animation mở phong bì
    envelope.classList.add("open");

    // Pháo hoa trái tim bung tỏa rực rỡ
    if (window.confetti) {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff758c', '#ffd166', '#ffffff']
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 70,
          origin: { x: 0 },
          colors: ['#ff477e', '#ffd6e0']
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 70,
          origin: { x: 1 },
          colors: ['#ff477e', '#ffd6e0']
        });
      }, 300);
    }

    // Chuyển cảnh mượt mà sang màn hình chính
    setTimeout(() => {
      introScreen.classList.add("fade-out");
      mainContent.classList.remove("hidden");
      mainContent.style.opacity = "1";

      setTimeout(() => {
        introScreen.style.display = "none";
        // Khởi động Trái Tim 3D Three.js
        initThreeHeart();
        // Typewriter sẽ tự kích hoạt khi scroll đến phần thư
        initLetterScrollTrigger();
      }, 1000);
    }, 1400);
  }

  if (btnOpen) btnOpen.addEventListener("click", openGiftExperience);
  if (envelope) envelope.addEventListener("click", openGiftExperience);
}

// ==========================================================================
// 6. TRÁI TIM 3D BẰNG THREE.JS (PHẢN CHIẾU, ĐẬP THEO NHỊP, TƯƠNG TÁC)
// ==========================================================================
let scene, camera, renderer, heartMesh;
let targetRotationX = 0, targetRotationY = 0;
let isPointerDown = false;
let pointerX = 0, pointerY = 0;

function initThreeHeart() {
  const container = document.getElementById("three-canvas-holder");
  if (!container) return;

  const width = container.clientWidth || 400;
  const height = container.clientHeight || 400;

  // Khởi tạo Scene
  scene = new THREE.Scene();

  // Khởi tạo Camera
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.z = 24;

  // Khởi tạo Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.innerHTML = "";
  container.appendChild(renderer.domElement);

  // Ánh sáng tạo bóng và lấp lánh (Phong cách Valentine Ruby)
  const ambientLight = new THREE.AmbientLight(0xffb3c6, 0.9);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
  mainLight.position.set(10, 15, 20);
  scene.add(mainLight);

  const pinkPointLight = new THREE.PointLight(0xff3366, 2, 50);
  pinkPointLight.position.set(0, 0, 5);
  scene.add(pinkPointLight);

  const backLight = new THREE.DirectionalLight(0xff758c, 0.8);
  backLight.position.set(-10, -10, -10);
  scene.add(backLight);

  // Tạo hình trái tim 3D (Bezier Curve Heart Shape)
  const x = 0, y = 0;
  const heartShape = new THREE.Shape();
  heartShape.moveTo(x + 2.5, y + 2.5);
  heartShape.bezierCurveTo(x + 2.5, y + 2.5, x + 2.0, y, x, y);
  heartShape.bezierCurveTo(x - 3.0, y, x - 3.0, y + 3.5, x - 3.0, y + 3.5);
  heartShape.bezierCurveTo(x - 3.0, y + 5.5, x - 1.0, y + 7.7, x + 2.5, y + 9.5);
  heartShape.bezierCurveTo(x + 6.0, y + 7.7, x + 8.0, y + 5.5, x + 8.0, y + 3.5);
  heartShape.bezierCurveTo(x + 8.0, y + 3.5, x + 8.0, y, x + 5.0, y);
  heartShape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

  const extrudeSettings = {
    depth: 2.2,
    bevelEnabled: true,
    bevelSegments: 8,
    steps: 2,
    bevelSize: 0.8,
    bevelThickness: 0.8
  };

  const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  geometry.center();

  // Chất liệu bóng lộng lẫy màu đỏ hồng cherry lấp lánh
  const material = new THREE.MeshPhongMaterial({
    color: 0xe63946,
    emissive: 0x4a0e17,
    specular: 0xffccd8,
    shininess: 120,
    reflectivity: 0.9,
    transparent: true,
    opacity: 0.96
  });

  heartMesh = new THREE.Mesh(geometry, material);
  heartMesh.rotation.x = Math.PI; // Lật đúng chiều trái tim
  scene.add(heartMesh);

  // Animation Loop (Đập theo nhịp tim: thud-thud... pause... thud-thud)
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Nhịp tim sống động (Hearbeat curve)
    const beatFrequency = 2.4;
    const sinVal = Math.sin(elapsedTime * beatFrequency);
    const pulse = 1 + (Math.pow(Math.max(0, sinVal), 8) * 0.15) + (Math.pow(Math.max(0, Math.sin(elapsedTime * beatFrequency + 0.4)), 8) * 0.08);

    if (heartMesh) {
      heartMesh.scale.set(pulse, pulse, pulse);
      // Tự xoay chầm chậm
      if (!isPointerDown) {
        heartMesh.rotation.y += 0.008;
      } else {
        heartMesh.rotation.y += (targetRotationY - heartMesh.rotation.y) * 0.1;
        heartMesh.rotation.x += (targetRotationX - heartMesh.rotation.x) * 0.1;
      }
    }

    renderer.render(scene, camera);
  }
  animate();

  // Xử lý sự kiện kéo xoay 3D bằng chuột / ngón tay
  const heartWrapper = document.getElementById("heart-container");

  function onPointerDown(e) {
    isPointerDown = true;
    pointerX = e.clientX || (e.touches && e.touches[0].clientX);
    pointerY = e.clientY || (e.touches && e.touches[0].clientY);
  }

  function onPointerMove(e) {
    if (!isPointerDown) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX);
    const currentY = e.clientY || (e.touches && e.touches[0].clientY);
    const deltaX = currentX - pointerX;
    const deltaY = currentY - pointerY;

    targetRotationY += deltaX * 0.015;
    targetRotationX += deltaY * 0.015;

    pointerX = currentX;
    pointerY = currentY;
  }

  function onPointerUp() {
    isPointerDown = false;
  }

  // Click vào trái tim tạo đợt bùng nổ tình yêu!
  if (heartWrapper) {
    heartWrapper.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    heartWrapper.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    heartWrapper.addEventListener("click", () => {
      playPopSound();
      triggerHeartExplosion();
    });
  }

  // Tương thích khi co giãn màn hình
  window.addEventListener("resize", () => {
    if (!container || !renderer || !camera) return;
    const newWidth = container.clientWidth || 320;
    const newHeight = container.clientHeight || 320;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  });
}

// Bùng nổ trái tim khi chạm vào trái tim 3D
function triggerHeartExplosion() {
  if (window.confetti) {
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.5 },
      shapes: ['heart', 'circle'],
      colors: ['#ff4d6d', '#ff758c', '#ffffff', '#ffd166']
    });
  }

  // Tạo thêm các hiệu ứng CSS floating heart bay vút lên
  for (let i = 0; i < 15; i++) {
    createFloatingHeart();
  }
}

function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-screen-heart";
  heart.innerHTML = Math.random() > 0.5 ? "💖" : "❤️";
  heart.style.position = "fixed";
  heart.style.left = (window.innerWidth / 2 + (Math.random() * 120 - 60)) + "px";
  heart.style.top = (window.innerHeight / 2 + (Math.random() * 120 - 60)) + "px";
  heart.style.fontSize = (Math.random() * 20 + 20) + "px";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "9999";
  heart.style.transition = "all 1.6s cubic-bezier(0.25, 1, 0.5, 1)";
  heart.style.opacity = "1";
  document.body.appendChild(heart);

  requestAnimationFrame(() => {
    heart.style.transform = `translate(${Math.random() * 300 - 150}px, -${Math.random() * 350 + 150}px) scale(${Math.random() * 0.8 + 1.2})`;
    heart.style.opacity = "0";
  });

  setTimeout(() => {
    heart.remove();
  }, 1600);
}

// ==========================================================================
// 7. HIỆU ỨNG GÕ CHỮ (TYPEWRITER) CHO BỨC THƯ TÌNH
// ==========================================================================
let typewriterTimer = null;
let currentLetterIdx = 0;
let isTyping = false;
let typewriterHasStarted = false; // Đảm bảo chỉ tự động bắt đầu 1 lần khi scroll vào

function startTypewriter() {
  const textEl = document.getElementById("typewriter-text");
  if (!textEl) return;

  clearInterval(typewriterTimer);
  textEl.textContent = "";
  currentLetterIdx = 0;
  isTyping = true;
  typewriterHasStarted = true;

  const fullText = CONFIG.wishLetter;
  const speed = 40; // Tốc độ gõ mỗi ký tự (ms)

  typewriterTimer = setInterval(() => {
    if (currentLetterIdx < fullText.length) {
      textEl.textContent += fullText.charAt(currentLetterIdx);
      currentLetterIdx++;
    } else {
      clearInterval(typewriterTimer);
      isTyping = false;
    }
  }, speed);

  // Nút bấm tương tác của thư
  const btnReplay = document.getElementById("btn-replay-letter");
  const btnShowAll = document.getElementById("btn-show-full-letter");

  if (btnReplay) {
    btnReplay.onclick = () => {
      typewriterHasStarted = false; // Cho phép replay lại
      startTypewriter();
    };
  }

  if (btnShowAll) {
    btnShowAll.onclick = () => {
      clearInterval(typewriterTimer);
      textEl.textContent = CONFIG.wishLetter;
      isTyping = false;
    };
  }
}

// Kích hoạt typewriter khi scroll đến phần thư tình (IntersectionObserver)
function initLetterScrollTrigger() {
  const letterSection = document.querySelector(".letter-section");
  if (!letterSection) return;

  // Fallback nếu trình duyệt cũ không hỗ trợ IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    startTypewriter();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        // Chỉ kích hoạt lần đầu tiên khi phần thư hiển thị ít nhất 30% trên màn hình
        if (entry.isIntersecting && !typewriterHasStarted) {
          startTypewriter();
          // Sau khi đã trigger, không cần observe nữa
          observer.unobserve(letterSection);
        }
      });
    },
    {
      threshold: 0.3, // 30% phần thư phải nằm trong viewport
      rootMargin: '0px 0px -50px 0px' // Thêm khoảng trừ ở đáy để đẹp hơn
    }
  );

  observer.observe(letterSection);
}

// ==========================================================================
// 8. ĐỒNG HỒ ĐẾM NGÀY YÊU NHAU (LOVE DAYS COUNTER)
// ==========================================================================
function initLoveCounter() {
  const daysEl = document.getElementById("days-val");
  const hoursEl = document.getElementById("hours-val");
  const minutesEl = document.getElementById("minutes-val");
  const secondsEl = document.getElementById("seconds-val");

  const startDate = new Date(CONFIG.anniversaryDate).getTime();

  function updateCounter() {
    const now = new Date().getTime();
    const difference = Math.max(0, now - startDate);

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCounter();
  setInterval(updateCounter, 1000);
}

// ==========================================================================
// 9. KHU VƯỜN HOA TÌNH YÊU (INTERACTIVE SECRET GARDEN)
// ==========================================================================
function initGarden() {
  const gardenContainer = document.getElementById("flower-garden");
  const modal = document.getElementById("flower-message-modal");
  const modalIcon = document.getElementById("modal-flower-icon");
  const modalName = document.getElementById("modal-flower-name");
  const modalMsg = document.getElementById("modal-flower-text");
  const modalClose = document.getElementById("close-flower-modal");

  if (!gardenContainer) return;
  gardenContainer.innerHTML = "";

  CONFIG.flowers.forEach(flower => {
    const flowerEl = document.createElement("div");
    flowerEl.className = "flower-item";
    flowerEl.innerHTML = `
      <div class="flower-graphic">
        <div class="flower-blossom">${flower.icon}</div>
        <div class="flower-stem">
          <div class="flower-leaf-left"></div>
          <div class="flower-leaf-right"></div>
        </div>
      </div>
      <div class="flower-name-tag">${flower.name}</div>
    `;

    flowerEl.addEventListener("click", () => {
      playSweetChime();
      if (modalIcon) modalIcon.textContent = flower.icon;
      if (modalName) modalName.textContent = flower.name;
      if (modalMsg) modalMsg.textContent = flower.message;
      if (modal) modal.classList.remove("hidden");

      if (window.confetti) {
        confetti({
          particleCount: 25,
          spread: 50,
          origin: { y: 0.7 },
          colors: ['#ff758c', '#ffd6e0']
        });
      }
    });

    gardenContainer.appendChild(flowerEl);
  });

  if (modalClose && modal) {
    modalClose.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }
}

// ==========================================================================
// 10. ALBUM KỶ NIỆM POLAROID 3D
// ==========================================================================
function initPolaroidGallery() {
  const gallery = document.getElementById("polaroid-gallery");
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeLightbox = document.getElementById("close-lightbox");

  if (!gallery) return;
  gallery.innerHTML = "";

  CONFIG.memories.forEach((item) => {
    const card = document.createElement("div");
    card.className = "polaroid-card";
    card.innerHTML = `
      <div class="polaroid-img-box">
        <img src="${item.url}" alt="${item.caption}" loading="lazy">
      </div>
      <p class="polaroid-caption">${item.caption}</p>
      <p class="polaroid-date">${item.date}</p>
    `;

    card.addEventListener("click", () => {
      playPopSound();
      if (lightboxImg) lightboxImg.src = item.url;
      if (lightboxCaption) lightboxCaption.textContent = item.caption;
      if (lightbox) lightbox.classList.remove("hidden");
    });

    gallery.appendChild(card);
  });

  if (closeLightbox && lightbox) {
    closeLightbox.addEventListener("click", () => {
      lightbox.classList.add("hidden");
    });
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.classList.add("hidden");
    });
  }
}

// ==========================================================================
// 11. HỘP QUÀ BÍ MẬT & NÚT ÔM / HÔN
// ==========================================================================
function initMysteryGiftBox() {
  const giftBox = document.getElementById("mystery-gift-box");
  const giftCard = document.getElementById("gift-card");
  const statusText = document.getElementById("gift-status-text");
  const btnHug = document.getElementById("btn-hug-me");
  const btnKiss = document.getElementById("btn-kiss-me");
  const sweetToast = document.getElementById("sweet-toast");
  const toastText = document.getElementById("toast-text");

  let isOpened = false;

  if (giftBox) {
    giftBox.addEventListener("click", () => {
      if (isOpened) return;
      isOpened = true;

      playSweetChime();
      giftBox.classList.add("open");
      if (statusText) statusText.style.display = "none";
      if (giftCard) giftCard.classList.remove("hidden");

      if (window.confetti) {
        confetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 0.8 },
          colors: ['#ffd166', '#ff4d6d', '#ff758c', '#ffffff']
        });
      }
    });
  }

  function showSweetToast(message, icon = "🥰") {
    if (!sweetToast || !toastText) return;
    toastText.textContent = message;
    const toastIcon = sweetToast.querySelector(".toast-icon");
    if (toastIcon) toastIcon.textContent = icon;

    sweetToast.classList.remove("hidden");
    playPopSound();

    setTimeout(() => {
      sweetToast.classList.add("hidden");
    }, 3800);
  }

  if (btnHug) {
    btnHug.addEventListener("click", () => {
      showSweetToast(`Anh ôm ${CONFIG.loverName} thật chặt vào lòng nè! Yêu em nhất quả đất! 🥰`, "🫂");
      if (window.confetti) {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
    });
  }

  if (btnKiss) {
    btnKiss.addEventListener("click", () => {
      showSweetToast(`Chụttt! Gửi tới ${CONFIG.loverName} ngàn nụ hôn nồng cháy nhất 💋`, "😘");
      for (let i = 0; i < 20; i++) {
        createFloatingHeart();
      }
    });
  }
}

// ==========================================================================
// 12. FLOATING AUDIO PLAYER (BẬT / TẮT NHẠC)
// ==========================================================================
function initAudioPlayer() {
  const musicToggle = document.getElementById("music-toggle");
  const bgAudio = document.getElementById("bg-audio");

  if (!musicToggle || !bgAudio) return;

  const discIcon = musicToggle.querySelector("i");
  const tooltip = musicToggle.querySelector(".btn-tooltip");

  musicToggle.addEventListener("click", () => {
    if (bgAudio.paused) {
      bgAudio.play().then(() => {
        if (discIcon) discIcon.classList.remove("disc-paused");
        if (tooltip) tooltip.textContent = "Nhạc nền: Bật";
      }).catch(err => console.log("Audio play error:", err));
    } else {
      bgAudio.pause();
      if (discIcon) discIcon.classList.add("disc-paused");
      if (tooltip) tooltip.textContent = "Nhạc nền: Tắt";
    }
  });

  bgAudio.addEventListener("play", () => {
    if (discIcon) discIcon.classList.remove("disc-paused");
    if (tooltip) tooltip.textContent = "Nhạc nền: Bật";
  });

  bgAudio.addEventListener("pause", () => {
    if (discIcon) discIcon.classList.add("disc-paused");
    if (tooltip) tooltip.textContent = "Nhạc nền: Tắt";
  });
}
