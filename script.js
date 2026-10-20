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
        // Typewriter sẽ tự kích hoạt khi scroll đến phần thư
        initLetterScrollTrigger();
      }, 1000);
    }, 1400);
  }

  if (btnOpen) btnOpen.addEventListener("click", openGiftExperience);
  if (envelope) envelope.addEventListener("click", openGiftExperience);
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
      rootMargin: '0px 0px -50px 0px' // Thêm khoảng trễ ở đáy để đẹp hơn
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
// 11. HỘP QUÀ BÍ MẬT & THÔNG ĐIỆP ANH YÊU EM
// ==========================================================================
function initMysteryGiftBox() {
  const giftBox = document.getElementById("mystery-gift-box");
  const giftCard = document.getElementById("gift-card");
  const statusText = document.getElementById("gift-status-text");
  const giftLoveText = document.getElementById("gift-love-text");

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

  if (giftLoveText) {
    giftLoveText.addEventListener("click", () => {
      playPopSound();
      if (window.confetti) {
        confetti({
          particleCount: 60,
          spread: 80,
          origin: { y: 0.7 },
          colors: ['#ff4d6d', '#ff758c', '#ffd166', '#ffffff']
        });
      }
      for (let i = 0; i < 15; i++) {
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

// ==========================================================================
// 13. FLOATING HEARTS (Trái tim bay khi nhấn nút hôn)
// ==========================================================================
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.style.cssText = `
    position: fixed;
    font-size: ${Math.random() * 20 + 16}px;
    left: ${Math.random() * 100}vw;
    bottom: 0;
    pointer-events: none;
    z-index: 9999;
    animation: floatUp ${Math.random() * 2 + 2}s ease-out forwards;
    opacity: 1;
  `;
  heart.textContent = ["❤️", "💕", "💖", "💗", "💓"][Math.floor(Math.random() * 5)];
  document.body.appendChild(heart);

  // Tự xóa sau khi animation kết thúc
  setTimeout(() => heart.remove(), 4000);
}

// Thêm keyframes floatUp vào document nếu chưa có
(function injectFloatUpKeyframe() {
  if (document.getElementById("floatup-style")) return;
  const style = document.createElement("style");
  style.id = "floatup-style";
  style.textContent = `
    @keyframes floatUp {
      0%   { transform: translateY(0) scale(1); opacity: 1; }
      100% { transform: translateY(-80vh) scale(0.5); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
})();
