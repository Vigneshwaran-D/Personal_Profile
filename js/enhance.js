/* ============================================================
   Personal Profile - UI/UX Enhancements
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 0. Theme toggle (light / dark, default dark) ---------- */
  var root = document.documentElement;
  var saved;
  try { saved = localStorage.getItem("vd-theme"); } catch (e) {}
  var theme = saved === "light" || saved === "dark" ? saved : "dark";
  root.setAttribute("data-theme", theme);
  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("vd-theme", next); } catch (e) {}
    });
  }

  /* ---------- 1. Typing effect (hero) ---------- */
  var typedEl = document.getElementById("typed-roles");
  if (typedEl) {
    var roles = JSON.parse(typedEl.getAttribute("data-roles") || "[]");
    var cursor = document.createElement("span");
    cursor.className = "typed-cursor";
    var ri = 0,
      ci = 0,
      deleting = false;

    function type() {
      var word = roles[ri] || "";
      typedEl.textContent = word.substring(0, ci);
      typedEl.appendChild(cursor);
      if (!deleting) {
        if (ci < word.length) { ci++; setTimeout(type, 65); }
        else { deleting = true; setTimeout(type, 1800); }
      } else {
        if (ci > 0) { ci--; setTimeout(type, 34); }
        else {
          deleting = false;
          ri = (ri + 1) % roles.length;
          setTimeout(type, 350);
        }
      }
    }
    type();
  }

  /* ---------- 2. Floating particles (hero) ---------- */
  var canvas = document.getElementById("particle-canvas");
  if (canvas) {
    var ctx = canvas.getContext("2d");
    var W, H, parts = [];
    var colors = ["255,189,57", "249,109,0", "255,255,255"];

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      var count = Math.min(70, Math.floor((W * H) / 18000));
      parts = [];
      for (var i = 0; i < count; i++) {
        parts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 2.6 + 0.8,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.28,
          c: colors[Math.floor(Math.random() * colors.length)],
          a: Math.random() * 0.5 + 0.2
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + p.c + "," + p.a + ")";
        ctx.fill();
        for (var j = i + 1; j < parts.length; j++) {
          var q = parts[j],
            dx = p.x - q.x,
            dy = p.y - q.y,
            d = dx * dx + dy * dy;
          if (d < 120 * 120) {
            ctx.strokeStyle = "rgba(255,189,57," + ((120 * 120 - d) / (120 * 120)) * 0.22 + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    resize();
    draw();
    window.addEventListener("resize", resize);
  }

  /* ---------- 3. Scroll progress bar ---------- */
  var bar = document.getElementById("scroll-progress");
  if (bar) {
    window.addEventListener("scroll", function () {
      var h = document.documentElement,
        max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    }, { passive: true });
  }

  /* ---------- 4. Scrollspy (navbar active state) ---------- */
  var navLinks = document.querySelectorAll("#ftco-nav a[href^='#']");
  var sections = [];
  navLinks.forEach(function (a) {
    var s = document.querySelector(a.getAttribute("href"));
    if (s) sections.push({ link: a, sec: s });
  });
  if (sections.length) {
    window.addEventListener("scroll", function () {
      var pos = window.scrollY + 140;
      var current = null;
      sections.forEach(function (item) {
        if (item.sec.offsetTop <= pos) current = item;
      });
      sections.forEach(function (item) {
        item.link.closest(".nav-item").classList.toggle("active", item === current);
      });
    }, { passive: true });
  }

  /* ---------- 5. Back to top ---------- */
  var btn = document.getElementById("back-to-top");
  if (btn) {
    window.addEventListener("scroll", function () {
      btn.classList.toggle("show", window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 6. Reveal on scroll (IntersectionObserver) ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el, i) {
      el.style.setProperty("--i", i % 6);
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("revealed"); });
  }

  /* ---------- 7. Tech marquee: duplicate track for seamless loop ---------- */
  document.querySelectorAll(".marquee-track").forEach(function (track) {
    track.innerHTML += track.innerHTML;
  });

  /* ---------- 8. Contact form (Formspree first, mailto fallback) ---------- */
  var FORMSPREE_ID = "mzepvryy";
  var form = document.getElementById("contactForm");
  if (form) {
    var msg = document.getElementById("form-msg");
    var submitBtn = form.querySelector("button[type='submit'], input[type='submit']");

    function showMsg(ok, text) {
      msg.className = "form-msg " + (ok ? "ok" : "err");
      msg.textContent = text;
      msg.scrollIntoView({ block: "nearest", behavior: "smooth" });
      setTimeout(function () { msg.className = "form-msg"; }, 9000);
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = form.name.value.trim(),
        email = form.email.value.trim(),
        subject = form.subject.value.trim(),
        message = form.message.value.trim();

      if (!name || !email || !message) {
        showMsg(false, "Please fill in your name, email and message.");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showMsg(false, "Please enter a valid email address.");
        return;
      }

      var original = submitBtn ? submitBtn.value : "";
      if (submitBtn) { submitBtn.disabled = true; submitBtn.value = "Sending..."; }

      var body = "Name: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\n\n" + message;

      var fallback = function (errMsg) {
        var mailto = "mailto:vigneshwaran.d.work@gmail.com?subject=" +
          encodeURIComponent(subject || "Contact from website") +
          "&body=" + encodeURIComponent(body);
        window.location.href = mailto;
        if (submitBtn) { submitBtn.disabled = false; submitBtn.value = original; }
        showMsg(false, errMsg || "Formspree couldn't be reached. Your email app should open — please press send there, or reach me at vigneshwaran.d.work@gmail.com.");
      };

      /* 1) Formspree (works on static hosting). PHP is not available on GitHub Pages.
         Replace FORMSPREE_ID with your form's ID from https://formspree.io. */
      if (!FORMSPREE_ID || FORMSPREE_ID.indexOf("YOUR_") === 0) {
        fallback();
      } else {
        fetch("https://formspree.io/f/" + FORMSPREE_ID, {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: JSON.stringify({
            _subject: subject || "Contact from website",
            name: name,
            _replyto: email,
            email: email,
            message: message
          })
        })
          .then(function (res) {
            if (!res.ok) throw new Error("http " + res.status);
            return res.json();
          })
          .then(function (data) {
            if (submitBtn) { submitBtn.disabled = false; submitBtn.value = original; }
            if (data && data.ok) {
              showMsg(true, "Message sent successfully! I'll get back to you soon.");
              form.reset();
            } else {
              fallback();
            }
          })
          .catch(function () { fallback(); });
      }
    });
  }
})();