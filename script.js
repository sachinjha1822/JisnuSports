let slideIndex = 0;
function moveSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}vw)`;
}

document.addEventListener("DOMContentLoaded", function () {
    setInterval(() => moveSlide(1), 4000);
});

let touchStartX = 0;
let touchEndX = 0;
let currentIndex = 0;
const slider = document.querySelector('.video-slider');

document.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
});

document.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold && currentIndex === 0) {
        currentIndex = 1;
    } else if (touchEndX - touchStartX > swipeThreshold && currentIndex === 1) {
        currentIndex = 0;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

function countdownTimer() {
    const launchDate = new Date("April 15, 2025 00:00:00").getTime();
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = launchDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Registration Open!";
        }
    }, 1000);
}
countdownTimer();

function notifyUser() {
    const button = document.getElementById("notifyBtn");
    button.innerText = "You are notified!";
    button.disabled = true;
    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);
}

function openModal(mediaSrc, type) {
    const videoModal = document.getElementById('modalVideo');
    const imageModal = document.getElementById('modalImage');
    if (type === 'video') {
        videoModal.src = `assets/${mediaSrc}.mp4`;
        videoModal.style.display = 'block';
        imageModal.style.display = 'none';
    } else {
        imageModal.src = mediaSrc;
        imageModal.style.display = 'block';
        videoModal.style.display = 'none';
    }
    document.getElementById('mediaModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('mediaModal').style.display = 'none';
    document.getElementById('modalVideo').pause();
}

function showQRCode(amount) {
    document.getElementById('qr-section').style.display = 'block';
    let qrCodeMap = {
        50: 'qr_code/50.jpeg',
        100: 'qr_code/100.jpeg',
        150: 'qr_code/150.jpeg',
        200: 'qr_code/200.jpeg'
    };
    document.getElementById('qr-code').src = qrCodeMap[amount];
    const downloadLink = document.getElementById('download-link');
    downloadLink.href = qrCodeMap[amount];
    downloadLink.download = `donation_qrcode_${amount}.jpeg`;
    alert('Scan the QR code to donate ₹' + amount);
}

function paymentSuccess() {
    alert("Payment Successfully Made!");
}

function openForm(tier) {
    document.getElementById("sponsorForm").style.display = "block";
    document.getElementById("formTitle").innerText = "Apply for " + tier;
    document.getElementById("userTier").innerText = tier;
}

function closeForm() {
    document.getElementById("sponsorForm").style.display = "none";
}

function showDummyCard(event) {
    event.preventDefault();
    document.getElementById("sponsorForm").style.display = "none";
    document.getElementById("dummyCard").style.display = "block";
    document.getElementById("userName").innerText = document.getElementById("inputName").value;
    document.getElementById("applyDate").innerText = new Date().toLocaleDateString();
    const tier = document.getElementById("userTier").innerText;
    const dummyCard = document.getElementById("dummyCard");
    if (tier === "Gold Sponsor") {
        dummyCard.style.background = "linear-gradient(135deg, #FFD700, #DAA520)";
    } else if (tier === "Silver Sponsor") {
        dummyCard.style.background = "linear-gradient(135deg, #A7C7E7, #5B92E5)";
    } else if (tier === "Bronze Sponsor") {
        dummyCard.style.background = "linear-gradient(135deg, #D2A679, #8B5A2B)";
    }
}
