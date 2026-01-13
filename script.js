const envelope = document.getElementById('envelope');
const letterContainer = document.getElementById('letter');

envelope.addEventListener('click', () => {
    // 1. Hide the envelope (or animate it opening)
    // For simplicity, we fade it out and show the letter
    gsap.to(envelope, {
        scale: 1.5,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            envelope.style.display = 'none';
            
            // 2. Show the letter
            letterContainer.classList.remove('hidden');
            // Small timeout to allow CSS transition to catch the class change
            setTimeout(() => {
                letterContainer.classList.add('visible');
            }, 10);
        }
    });
});

// Since we are using GSAP for smooth animation again, make sure to include it!
// Or, if you want to do it without GSAP (Pure JS), use this below:

/* // PURE JS VERSION (If you don't want to load GSAP)
envelope.addEventListener('click', () => {
    envelope.style.transition = "transform 0.5s, opacity 0.5s";
    envelope.style.transform = "scale(1.5)";
    envelope.style.opacity = "0";
    
    setTimeout(() => {
        envelope.style.display = 'none';
        letterContainer.classList.remove('hidden');
        setTimeout(() => {
            letterContainer.classList.add('visible');
        }, 50);
    }, 500);
});
*/