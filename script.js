/* ==========================================================================
   WEBSITE CHÃšC Má»ªNG 20/10 - DÃ€NH RIÃŠNG CHO Má»¸ HÃ’A â¤ï¸
   CÃ´ng nghá»‡: HTML5, CSS3, JavaScript Thuáº§n, Three.js & Canvas Confetti
   ========================================================================== */

// ==========================================================================
// 1. KHU Vá»°C Cáº¤U HÃŒNH CÃ NHÃ‚N HÃ“A (Dá»„ DÃ€NG CHá»ˆNH Sá»¬A Táº I ÄÃ‚Y)
// ==========================================================================
const CONFIG = {
  // TÃªn ngÆ°á»i nháº­n vÃ  ngÆ°á»i gá»­i
  loverName: "Má»¹ HÃ²a",                 // TÃªn ngÆ°á»i yÃªu cá»§a báº¡n
  loverNickname: "CÃ´ng chÃºa Má»¹ HÃ²a",   // Biá»‡t danh Ä‘Ã¡ng yÃªu
  senderName: "Anh cá»§a em",            // TÃªn cá»§a báº¡n
  
  // NgÃ y ká»· niá»‡m yÃªu nhau (Äá»‹nh dáº¡ng: YYYY-MM-DDTHH:MM:SS)
  // Báº¡n cÃ³ thá»ƒ Ä‘á»•i ngÃ y báº¯t Ä‘áº§u yÃªu nhau á»Ÿ Ä‘Ã¢y
  anniversaryDate: "2026-09-03T08:00:00",

  // Lá»i chÃºc 20/10 hiá»ƒn thá»‹ dáº¡ng gÃµ mÃ¡y chá»¯
  wishLetter: 
`ChÃºc cÃ´ng chÃºa cá»§a anh má»™t ngÃ y 20/10 tháº­t háº¡nh phÃºc â¤ï¸

Cáº£m Æ¡n em vÃ¬ Ä‘Ã£ xuáº¥t hiá»‡n trong cuá»™c Ä‘á»i anh, mang Ä‘áº¿n cho anh nhá»¯ng ná»¥ cÆ°á»i vÃ  nhá»¯ng khoáº£nh kháº¯c tháº­t Ä‘áº·c biá»‡t.

Anh mong em luÃ´n xinh Ä‘áº¹p, vui váº», bÃ¬nh an vÃ  luÃ´n Ä‘Æ°á»£c yÃªu thÆ°Æ¡ng. DÃ¹ ngoÃ i kia cÃ³ bao nhiÃªu Ä‘iá»u má»‡t má»i, anh váº«n mong mÃ¬nh sáº½ lÃ  ngÆ°á»i khiáº¿n em má»‰m cÆ°á»i má»—i ngÃ y.

NgÃ y 20/10 nÃ y, anh khÃ´ng cÃ³ mÃ³n quÃ  gÃ¬ quÃ¡ lá»›n lao, chá»‰ cÃ³ má»™t trÃ¡i tim luÃ´n dÃ nh má»™t vá»‹ trÃ­ Ä‘áº·c biá»‡t cho em.

Anh yÃªu em nhiá»u láº¯m! ðŸ’—`,

  // Danh sÃ¡ch cÃ¡c bÃ´ng hoa trong Khu VÆ°á»n BÃ­ Máº­t
  flowers: [
    {
      id: "rose",
      name: "Hoa Há»“ng Äá»",
      icon: "ðŸŒ¹",
      message: "Em lÃ  bÃ´ng hoa Ä‘áº¹p nháº¥t, ráº¡ng rá»¡ vÃ  quyáº¿n rÅ© nháº¥t trong khu vÆ°á»n trÃ¡i tim anh. YÃªu em vÃ´ bá» báº¿n! ðŸŒ¹"
    },
    {
      id: "tulip",
      name: "Hoa Tulip Há»“ng",
      icon: "ðŸŒ·",
      message: "Hoa tulip tÆ°á»£ng trÆ°ng cho tÃ¬nh yÃªu thuáº§n khiáº¿t. TÃ¬nh cáº£m anh dÃ nh cho Má»¹ HÃ²a mÃ£i váº¹n nguyÃªn vÃ  chÃ¢n thÃ nh nhÆ° ngÃ y Ä‘áº§u. ðŸŒ·"
    },
    {
      id: "sunflower",
      name: "Hoa HÆ°á»›ng DÆ°Æ¡ng",
      icon: "ðŸŒ»",
      message: "NhÆ° hoa hÆ°á»›ng dÆ°Æ¡ng luÃ´n hÆ°á»›ng vá» váº§ng thÃ¡i dÆ°Æ¡ng, Ã¡nh máº¯t vÃ  trÃ¡i tim anh sáº½ luÃ´n dÃµi theo vÃ  che chá»Ÿ cho em. ðŸŒ»"
    },
    {
      id: "cherry",
      name: "Hoa Anh ÄÃ o",
      icon: "ðŸŒ¸",
      message: "Ná»¥ cÆ°á»i cá»§a Má»¹ HÃ²a ngá»t ngÃ o vÃ  dá»‹u dÃ ng nhÆ° nhá»¯ng cÃ¡nh hoa anh Ä‘Ã o Ä‘áº§u xuÃ¢n, lÃ m bá»«ng sÃ¡ng cáº£ tháº¿ giá»›i cá»§a anh. ðŸŒ¸"
    },
    {
      id: "bouquet",
      name: "BÃ³ Hoa TÃ¬nh YÃªu",
      icon: "ðŸ’",
      message: "DÃ nh táº·ng cáº£ vÆ°á»n hoa rá»±c rá»¡ nÃ y cho ngÆ°á»i phá»¥ ná»¯ tuyá»‡t vá»i nháº¥t trong lÃ²ng anh ngÃ y 20/10! ðŸ’"
    }
  ],

  // Danh sÃ¡ch áº£nh ká»· niá»‡m (Dáº¡ng Polaroid 3D)
  // Báº¡n cÃ³ thá»ƒ thay báº±ng link áº£nh tháº­t cá»§a hai ngÆ°á»i
  memories: [
    {
      url: "images/photo1.jpg",
      caption: "Khoáº£nh kháº¯c ngá»t ngÃ o bÃªn em ðŸ’•",
      date: "Ká»· niá»‡m ngÃ y bÃªn nhau"
    },
    {
      url: "images/photo2.jpg",
      caption: "Ná»¥ cÆ°á»i cá»§a em lÃ  bÃ¬nh yÃªn cá»§a anh ðŸŒ¸",
      date: "Nhá»¯ng chuyáº¿n Ä‘i Ä‘Ã¡ng nhá»›"
    },
    {
      url: "images/photo3.jpg",
      caption: "Náº¯m tay em Ä‘i qua má»i mÃ¹a yÃªu thÆ°Æ¡ng ðŸ¤",
      date: "Háº¡nh phÃºc giáº£n Ä‘Æ¡n"
    },
    {
      url: "images/photo4.png",
      caption: "20/10 ngáº­p trÃ n niá»m vui nhÃ© cÃ´ng chÃºa ðŸ’–",
      date: "20.10.2026"
    }
  ],

  // Nháº¡c ná»n (Link dá»± phÃ²ng an toÃ n)
  musicUrl: "https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6591201e.mp3?filename=romantic-piano-111164.mp3"
};

// ==========================================================================
// 2. KHá»žI Táº O Dá»® LIá»†U CÃ NHÃ‚N VÃ€O GIAO DIá»†N
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Cáº­p nháº­t tÃªn ngÆ°á»i yÃªu & ngÆ°á»i gá»­i lÃªn giao diá»‡n
  const introTo = document.getElementById("intro-to-name");
  const mainLoverName = document.getElementById("main-lover-name");
  const mainSenderCredit = document.getElementById("main-sender-credit");
  const letterSenderName = document.getElementById("letter-sender-name");

  if (introTo) introTo.textContent = `Gá»­i: ${CONFIG.loverName} ðŸ’–`;
  if (mainLoverName) mainLoverName.textContent = CONFIG.loverName;
  if (mainSenderCredit) mainSenderCredit.textContent = `From ${CONFIG.senderName}, with all my love â¤ï¸`;
  if (letterSenderName) letterSenderName.textContent = `${CONFIG.senderName} â¤ï¸`;

  // Khá»Ÿi Ä‘á»™ng cÃ¡c module
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
// 3. SOUND SYNTHESIZER (Web Audio API - LuÃ´n hoáº¡t Ä‘á»™ng khÃ´ng cáº§n file Ã¢m thanh)
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
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Há»£p Ã¢m ÄÃ´ trÆ°á»Ÿng ngá»t ngÃ o)
  
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
  // KÃ­ch hoáº¡t khi cÃ³ tÆ°Æ¡ng tÃ¡c Ä‘áº§u tiÃªn cá»§a ngÆ°á»i dÃ¹ng
  document.addEventListener("click", () => getAudioContext(), { once: true });
}

// ==========================================================================
// 4. HIá»†U á»¨NG Ná»€N CANVAS (CÃNH HOA Há»’NG & SAO TRá»œI & ÄOM ÄÃ“M)
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

  // Táº¡o cÃ¡c ngÃ´i sao láº¥p lÃ¡nh & háº¡t Ä‘om Ä‘Ã³m
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

  // Táº¡o cÃ¡c cÃ¡nh hoa há»“ng rÆ¡i (Rose Petals)
  const petalCount = window.innerWidth > 768 ? 25 : 15;
  for (let i = 0; i < petalCount; i++) {
    petals.push(createPetal());
  }

  animateBackground();

  // NÃºt báº­t/táº¯t hiá»‡u á»©ng
  const toggleBtn = document.getElementById("hearts-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isHeartsEffectEnabled = !isHeartsEffectEnabled;
      const tooltip = toggleBtn.querySelector(".btn-tooltip");
      if (tooltip) tooltip.textContent = `Hiá»‡u á»©ng: ${isHeartsEffectEnabled ? 'Báº­t' : 'Táº¯t'}`;
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

  // Váº½ cÃ¡c háº¡t sao / Ä‘om Ä‘Ã³m
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

  // Váº½ cÃ¡nh hoa há»“ng rÆ¡i náº¿u Ä‘Æ°á»£c báº­t
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

      // Váº½ hÃ¬nh dáº¡ng cÃ¡nh hoa há»“ng cong má»m
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
// 5. MÃ€N HÃŒNH Má»ž Äáº¦U - PHONG BÃŒ THÆ¯ TÃŒNH
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

    // Ã‚m thanh ngá»t ngÃ o
    playSweetChime();

    // Má»Ÿ nháº¡c ná»n
    if (bgAudio) {
      bgAudio.volume = 0.6;
      bgAudio.play().catch(() => {
        console.log("Audio autoplay restricted, user can toggle on floating button");
      });
    }

    // Animation má»Ÿ phong bÃ¬
    envelope.classList.add("open");

    // PhÃ¡o hoa trÃ¡i tim bung tá»a rá»±c rá»¡
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

    // Chuyá»ƒn cáº£nh mÆ°á»£t mÃ  sang mÃ n hÃ¬nh chÃ­nh
    setTimeout(() => {
      introScreen.classList.add("fade-out");
      mainContent.classList.remove("hidden");
      mainContent.style.opacity = "1";

      setTimeout(() => {
        introScreen.style.display = "none";
        // Typewriter sáº½ tá»± kÃ­ch hoáº¡t khi scroll Ä‘áº¿n pháº§n thÆ°
        initLetterScrollTrigger();
      }, 1000);
    }, 1400);
  }

  if (btnOpen) btnOpen.addEventListener("click", openGiftExperience);
  if (envelope) envelope.addEventListener("click", openGiftExperience);
}

// ==========================================================================
// 7. HIá»†U á»¨NG GÃ• CHá»® (TYPEWRITER) CHO Bá»¨C THÆ¯ TÃŒNH
// ==========================================================================
let typewriterTimer = null;
let currentLetterIdx = 0;
let isTyping = false;
let typewriterHasStarted = false; // Äáº£m báº£o chá»‰ tá»± Ä‘á»™ng báº¯t Ä‘áº§u 1 láº§n khi scroll vÃ o

function startTypewriter() {
  const textEl = document.getElementById("typewriter-text");
  if (!textEl) return;

  clearInterval(typewriterTimer);
  textEl.textContent = "";
  currentLetterIdx = 0;
  isTyping = true;
  typewriterHasStarted = true;

  const fullText = CONFIG.wishLetter;
  const speed = 40; // Tá»‘c Ä‘á»™ gÃµ má»—i kÃ½ tá»± (ms)

  typewriterTimer = setInterval(() => {
    if (currentLetterIdx < fullText.length) {
      textEl.textContent += fullText.charAt(currentLetterIdx);
      currentLetterIdx++;
    } else {
      clearInterval(typewriterTimer);
      isTyping = false;
    }
  }, speed);

  // NÃºt báº¥m tÆ°Æ¡ng tÃ¡c cá»§a thÆ°
  const btnReplay = document.getElementById("btn-replay-letter");
  const btnShowAll = document.getElementById("btn-show-full-letter");

  if (btnReplay) {
    btnReplay.onclick = () => {
      typewriterHasStarted = false; // Cho phÃ©p replay láº¡i
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

// KÃ­ch hoáº¡t typewriter khi scroll Ä‘áº¿n pháº§n thÆ° tÃ¬nh (IntersectionObserver)
function initLetterScrollTrigger() {
  const letterSection = document.querySelector(".letter-section");
  if (!letterSection) return;

  // Fallback náº¿u trÃ¬nh duyá»‡t cÅ© khÃ´ng há»— trá»£ IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    startTypewriter();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        // Chá»‰ kÃ­ch hoáº¡t láº§n Ä‘áº§u tiÃªn khi pháº§n thÆ° hiá»ƒn thá»‹ Ã­t nháº¥t 30% trÃªn mÃ n hÃ¬nh
        if (entry.isIntersecting && !typewriterHasStarted) {
          startTypewriter();
          // Sau khi Ä‘Ã£ trigger, khÃ´ng cáº§n observe ná»¯a
          observer.unobserve(letterSection);
        }
      });
    },
    {
      threshold: 0.3, // 30% pháº§n thÆ° pháº£i náº±m trong viewport
      rootMargin: '0px 0px -50px 0px' // ThÃªm khoáº£ng trá»« á»Ÿ Ä‘Ã¡y Ä‘á»ƒ Ä‘áº¹p hÆ¡n
    }
  );

  observer.observe(letterSection);
}

// ==========================================================================
// 8. Äá»’NG Há»’ Äáº¾M NGÃ€Y YÃŠU NHAU (LOVE DAYS COUNTER)
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
// 9. KHU VÆ¯á»œN HOA TÃŒNH YÃŠU (INTERACTIVE SECRET GARDEN)
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
// 10. ALBUM Ká»¶ NIá»†M POLAROID 3D
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
// 11. Há»˜P QUÃ€ BÃ Máº¬T & NÃšT Ã”M / HÃ”N
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

  function showSweetToast(message, icon = "ðŸ¥°") {
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
      showSweetToast(`Anh Ã´m ${CONFIG.loverName} tháº­t cháº·t vÃ o lÃ²ng nÃ¨! YÃªu em nháº¥t quáº£ Ä‘áº¥t! ðŸ¥°`, "ðŸ«‚");
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
      showSweetToast(`Chá»¥ttt! Gá»­i tá»›i ${CONFIG.loverName} ngÃ n ná»¥ hÃ´n ná»“ng chÃ¡y nháº¥t ðŸ’‹`, "ðŸ˜˜");
      for (let i = 0; i < 20; i++) {
        createFloatingHeart();
      }
    });
  }
}

// ==========================================================================
// 12. FLOATING AUDIO PLAYER (Báº¬T / Táº®T NHáº C)
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
        if (tooltip) tooltip.textContent = "Nháº¡c ná»n: Báº­t";
      }).catch(err => console.log("Audio play error:", err));
    } else {
      bgAudio.pause();
      if (discIcon) discIcon.classList.add("disc-paused");
      if (tooltip) tooltip.textContent = "Nháº¡c ná»n: Táº¯t";
    }
  });

  bgAudio.addEventListener("play", () => {
    if (discIcon) discIcon.classList.remove("disc-paused");
    if (tooltip) tooltip.textContent = "Nháº¡c ná»n: Báº­t";
  });

  bgAudio.addEventListener("pause", () => {
    if (discIcon) discIcon.classList.add("disc-paused");
    if (tooltip) tooltip.textContent = "Nháº¡c ná»n: Táº¯t";
  });
}
