
    function createBubble() {
      const bubble = document.createElement('div');
      const size = Math.random() * 20 + 10;
      const duration = Math.random() * 5 + 4;
      const left = Math.random() * window.innerWidth;

      bubble.classList.add('bubble');
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}px`;
      bubble.style.animationDuration = `${duration}s`;

      document.body.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, duration * 1000);
    }

    setInterval(createBubble, 200);
