const express = require("express");
const { findContinuation } = require("./logic");

const app = express();
const PORT = process.env.PORT || 3000;

// API endpoint
app.get("/continue", (req, res) => {
  const sound = req.query.sound;
  const match = findContinuation(sound);

  if (!match) {
    return res.json({
      input: sound || "",
      matches: []
    });
  }

  res.json({
    input: sound || "",
    matches: [match]
  });
});

// Minimal UI for testing
app.get("/", (_req, res) => {
  res.type("html").send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>The Musical Lake</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 2rem; }
          input { padding: .5rem; width: 250px; }
          button { padding: .5rem .75rem; }
          #out { margin-top: 1rem; }
          .tag { border:1px solid #ccc; border-radius:999px; padding:.1rem .5rem; margin-left:.25rem; font-size:.8rem; }
        </style>
      </head>
      <body>
        <h1>🎶 The Musical Lake</h1>
        <form id="f">
          <input id="sound" type="text" placeholder="brr, birip, plop..." autofocus />
          <button>Search</button>
        </form>
        <div id="out">No query yet.</div>
        <div> 
        <h3>Common Sounds</h3><ul>
          <li>brr</li>
          <li>birip</li>
          <li>plop</li>
          <li>fiu</li>
          <li>birip</li>
          <li>croac</li>
          <li>brrah</li>
        </ul>
        </div>
        <script>
          const form = document.getElementById('f');
          const out = document.getElementById('out');
          form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const sound = document.getElementById('sound').value;
            const r = await fetch('/continue?sound=' + encodeURIComponent(sound));
            const j = await r.json();
            if (!j.matches || j.matches.length === 0) {
              out.textContent = 'No matches.';
              return;
            }
            const m = j.matches[0];
            const next = m.continuation.length ? m.continuation.join(', ') : '(nothing — is the last sound)';
            out.innerHTML = \`
              <div><strong>Song #\${m.songNumber}</strong> <span class="tag">\${m.position}</span></div>
              <div>Next: \${next}</div>
            \`;
          });
        </script>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("Listening on http://localhost:" + PORT);
});
