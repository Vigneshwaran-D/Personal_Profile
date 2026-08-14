/* ============================================================
   Viki Agent - free Gemini-powered chat widget
   Get a free API key at https://aistudio.google.com (Generative
   Language API, free tier) and paste it below.
   ============================================================ */
(function () {
  "use strict";

  var GEMINI_API_KEY = "AQ.Ab8RN6Kmeer_mulv9AXNZ-laWFXQ8CRivK-4CcfAuAmuiMAHoQ";
  var GEMINI_MODEL = "gemini-3-flash-preview";
  var GEMINI_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/" +
    GEMINI_MODEL +
    ":generateContent?key=" +
    encodeURIComponent(GEMINI_API_KEY);

  var KNOWLEDGE = [
    "Vigneshwaran D - Digital Transformation / Enterprise AI Manager, Chennai, Tamil Nadu, India.",
    "Phone: +91-7200217424. Email: vigneshwaran.d.work@gmail.com.",
    "LinkedIn: linkedin.com/in/vigneshwaran-dhanasekaran. Portfolio: vigneshwaran-d.github.io/Personal_Profile.",
    "",
    "PROFILE: 14+ years in enterprise AI, chatbots, hyperautomation and RPA. Currently Senior Manager - Enterprise AI at EXL Service (Feb 2025 - present), leading Enterprise AI Platform Engineering across Healthcare, Banking & Insurance: AI strategy, platform architecture, governance, HLD/LLD reviews. Filed two U.S. patents: Agentic Voice AI Call Training Simulator (App. No. 19/546,120, 5,000+ concurrent users, sub-200ms p99, Azure OpenAI Realtime + ElevenLabs + HeyGen, CrewAI scoring of 10K+ monthly calls) and a Mailbox Workflow Automation Platform (healthcare email triage with Presidio PHI/PII, React/TypeScript/Node/PostgreSQL).",
    "",
    "PREVIOUS ROLES: Manager - Digital Assistant (AI/ML) at PepsiCo, Hyderabad (Oct 2023 - Feb 2025): built SuMaaS (RAPTOR + MapReduce summarization over 10+ file formats, 1,000+ docs/week), BI Chatbot (SQL-RAG, LangChain multi-agent, 90%+ query accuracy, AI-generated charts, $900K saved/yr, reduced analysts 40 -> 16), AI Headline & Tagline Generator. Manager - Data Science & Conversational AI at Foundever, Chennai (Oct 2020 - Sep 2023): AWS Lex & Power Virtual Agent chatbots, UiPath RPA team, Admin Chatbot hyperautomation (admin headcount 10 -> 2 FTEs, 80% manual work eliminated), Zenni e-commerce chatbot, custom bot orchestrator replacing UiPath licensing. Supervisor - RPA Architect at AGS Health, Chennai (Mar 2012 - Sep 2020): 165+ production automations at 85% uptime, Python + MongoDB RPA orchestrator, -70% processing time across 50+ processes.",
    "",
    "EDUCATION: BCA (75.6% Distinction) from Sathyabama Institute of Science & Technology, Chennai (2011). Higher Secondary from KRMS (2008).",
    "",
    "SKILLS: Generative AI (LangChain, LlamaIndex, RAG, RAPTOR), Conversational AI (Dialogflow CX, AWS Lex, Power Virtual Agent, Azure OpenAI Realtime), Cloud (AWS, Azure, Azure AI Foundry, Azure AI Search, Pinecone, Prompt Flow, Semantic Kernel, LiteLLM, LangSmith, RAGAS), RPA (UiPath, Power Automate, Blue Prism, Automation Anywhere), BI (Power BI), UI/UX (Figma), Programming (Python, VBA, AHK), Databases (DynamoDB, SQL, MongoDB, PostgreSQL), Security (Azure AD/MSAL, JWT, RBAC, Presidio), plus project management, solution architecture and digital transformation.",
    "",
    "CERTIFICATIONS: LangChain - LLM Powered Applications, Microsoft Azure Cognitive Services, AWS Solutions Architect - Professional, Azure Architect Design Prep, UiPath Level 2 Orchestrator, RPA Solution Architecture Fundamentals, Dialogflow CX Virtual Agent Development, Figma UI UX Design, Six Sigma White Belt.",
    "",
    "KEY PROJECTS: (1) BI Chatbot - LLM + RAG for SQL data retrieval and predictive analytics, $900K cost saving (analysts 40 -> 16). (2) Agentic Voice AI Call Training Simulator - patent-filed, 5,000+ concurrent users, sub-200ms p99 latency. (3) Admin Chatbot (AWS Lex hyperautomation) - admin headcount 10 -> 2 FTEs. (4) SuMaaS summarization platform - 1,000+ docs/week. (5) Mailbox Workflow Automation Platform - patent-filed healthcare email triage.",
    "",
    "NOTABLE METRICS: 2 U.S. patents filed, $900K annual savings, 7+ FTEs eliminated, 165+ bots deployed, 85% uptime, 5,000+ concurrent users, sub-200ms p99 latency."
  ].join("\n");

  var SYSTEM_PROMPT =
    "You are Viki, a friendly AI assistant for Vigneshwaran D's portfolio website. " +
    "Answer questions about Vigneshwaran D (his experience, projects, skills, education, certifications, metrics, and contact details) using ONLY the reference material below. " +
    "Be concise, professional and enthusiastic. Use short paragraphs or bullet points. " +
    "If asked something not covered by the reference material, say you don't have that detail and suggest contacting Vigneshwaran via the contact form or vigneshwaran.d.work@gmail.com. " +
    "Never invent facts, jobs, or metrics not in the reference material.\n\nREFERENCE MATERIAL:\n" + KNOWLEDGE;

  var history = [];
  var opened = false;
  var root, body, msgs, input, sendBtn;

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function format(text) {
    text = esc(text);
    text = text.replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>");
    text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
    text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/^([-*•]\s*)(.+)$/gm, "<div class=\"cw-bullet\">$2</div>");
    return text.replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>");
  }

  function typing(show) {
    var t = msgs.querySelector(".cw-typing");
    if (show) {
      if (!t) {
        t = document.createElement("div");
        t.className = "cw-msg cw-bot cw-typing";
        t.innerHTML = "<span></span><span></span><span></span>";
        msgs.appendChild(t);
      }
      msgs.scrollTop = msgs.scrollHeight;
    } else if (t) {
      t.remove();
    }
  }

  function addMsg(role, text) {
    var m = document.createElement("div");
    m.className = "cw-msg " + (role === "user" ? "cw-user" : "cw-bot");
    var avatar = role === "bot" ? '<span class="cw-avatar">V</span>' : "";
    m.innerHTML = avatar + '<div class="cw-bubble">' + (role === "bot" ? format(text) : esc(text)) + "</div>";
    msgs.appendChild(m);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function ask() {
    var text = input.value.trim();
    if (!text) return;
    input.value = "";
    input.style.height = "auto";
    history.push({ role: "user", parts: [{ text: text }] });
    addMsg("user", text);
    typing(true);
    var payload = {
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: history.slice(-20),
      generationConfig: { temperature: 0.5, maxOutputTokens: 800 }
    };
    fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
      .then(function (r) {
        typing(false);
        var text = r.ok
          ? (r.data.candidates && r.data.candidates[0] && r.data.candidates[0].content &&
             r.data.candidates[0].content.parts && r.data.candidates[0].content.parts[0].text) || "No reply."
          : null;
        if (!text) {
          var err = r.data && r.data.error && r.data.error.message ? r.data.error.message : "Unknown error";
          if (err.indexOf("API key") > -1) text = "The Gemini API key is not set. Paste your free key into js/chatbot.js (GEMINI_API_KEY).";
          else if (err.indexOf("PERMISSION") > -1 || err.indexOf("FORBIDDEN") > -1) text = "This API key doesn't have access to model " + GEMINI_MODEL + ". Generate a new key or change the model in js/chatbot.js.";
          else text = "Sorry, I hit an error: " + err;
        }
        history.push({ role: "model", parts: [{ text: text }] });
        addMsg("bot", text);
      })
      .catch(function () {
        typing(false);
        var text = "I couldn't reach the Gemini API (network blocked?). Check your connection and try again.";
        history.push({ role: "model", parts: [{ text: text }] });
        addMsg("bot", text);
      });
  }

  function build() {
    root = document.createElement("div");
    root.className = "cw-root";
    root.innerHTML =
      '<button class="cw-launcher" aria-label="Chat with Viki">' +
        '<span class="cw-open-ic">&#128172;</span>' +
        '<span class="cw-close-ic">&times;</span>' +
      "</button>" +
      '<div class="cw-panel" role="dialog" aria-label="Chat with Viki">' +
        '<div class="cw-head">' +
          '<div class="cw-head-av">V</div>' +
          '<div class="cw-head-txt"><div class="cw-head-name">Viki</div><div class="cw-head-sub">AI assistant · online</div></div>' +
          '<button class="cw-min" aria-label="Minimise">&#8211;</button>' +
        "</div>" +
        '<div class="cw-msgs"></div>' +
        '<div class="cw-chips">' +
          '<button>What does Vigneshwaran do?</button>' +
          '<button>Show his experience</button>' +
          '<button>Top projects</button>' +
          '<button>Contact details</button>' +
        "</div>" +
        '<div class="cw-in">' +
          '<textarea rows="1" placeholder="Ask Viki about Vigneshwaran..."></textarea>' +
          '<button class="cw-send" aria-label="Send">&#10148;</button>' +
        "</div>" +
      "</div>";
    document.body.appendChild(root);
    body = root.querySelector(".cw-msgs");
    input = root.querySelector("textarea");
    sendBtn = root.querySelector(".cw-send");
    root.querySelector(".cw-launcher").addEventListener("click", toggle);
    root.querySelector(".cw-min").addEventListener("click", close);
    root.querySelector(".cw-send").addEventListener("click", ask);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(); }
    });
    input.addEventListener("input", function () {
      input.style.height = "auto";
      input.style.height = Math.min(input.scrollHeight, 120) + "px";
    });
    root.querySelectorAll(".cw-chips button").forEach(function (b) {
      b.addEventListener("click", function () { input.value = b.textContent; ask(); });
    });
  }

  function toggle() {
    if (!opened) open(); else close();
  }

  function open() {
    opened = true;
    root.classList.add("cw-open");
    if (!msgs.childNodes.length) {
      addMsg("bot", "Hi! I'm Viki, Vigneshwaran's AI assistant. Ask me about his experience, projects, skills, or how to get in touch.");
    }
    input.focus();
  }

  function close() {
    opened = false;
    root.classList.remove("cw-open");
  }

  build();
})();
