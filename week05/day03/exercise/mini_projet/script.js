// Star background
    const canvas = document.querySelector('.stars');
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createStars() {
      stars = [];
      for (let i = 0; i < 180; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.3,
          o: Math.random() * 0.6 + 0.4
        });
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255,255,255,${star.o})`;
        ctx.fill();
      }
    }

    function animateStars() {
      for (const star of stars) {
        star.y += 0.08 + star.r * 0.08;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      }
      drawStars();
      requestAnimationFrame(animateStars);
    }

    function initStars() {
      resizeCanvas();
      createStars();
      drawStars();
      animateStars();
    }

    window.addEventListener('resize', () => {
      resizeCanvas();
      createStars();
    });

    initStars();

    // DOM elements
    const fetchBtn = document.getElementById("fetch-btn");
    const loadingEl = document.getElementById("loading");
    const errorEl = document.getElementById("error");
    const infoEl = document.getElementById("character-info");

    // Event listener
    fetchBtn.addEventListener("click", fetchCharacter);

    async function fetchCharacter() {
      const randomId = Math.floor(Math.random() * 83) + 1;
      const url = `https://www.swapi.tech/api/people/${randomId}`;

      // Reset UI
      loadingEl.style.display = "flex";
      errorEl.style.display = "none";
      infoEl.innerHTML = "";

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        const char = data.result.properties;
        const homeworld = await getHomeworld(char.homeworld);

        infoEl.innerHTML = `
          <p><strong>${char.name}</strong></p>
          <p><strong>Height:</strong> ${char.height} cm</p>
          <p><strong>Gender:</strong> ${capitalize(char.gender)}</p>
          <p><strong>Birth Year:</strong> ${char.birth_year}</p>
          <p><strong>Homeworld:</strong> ${homeworld}</p>
        `;
        loadingEl.style.display = "none";
      } catch (err) {
        loadingEl.style.display = "none";
        errorEl.style.display = "block";
      }
    }

    async function getHomeworld(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data.result.properties.name;
      } catch {
        return "Unknown";
      }
    }

    function capitalize(str) {
      if (!str) return "";
      return str.charAt(0).toUpperCase() + str.slice(1);
    }