/* WhatsApp-style override for Never Without You chapter pages.
   Add before </body>:
   <script src="../../assets/whatsapp-override.js" defer></script>
*/

(function () {
  const style = document.createElement('style');
  style.id = 'whatsapp-override-style';

  style.textContent = `
    :root {
      --wa-bg: #e5ddd5;
      --wa-panel: #f0f2f5;
      --wa-left: #ffffff;
      --wa-right: #d9fdd3;
      --wa-text: #111b21;
      --wa-muted: #667781;
      --wa-link: #027eb5;
      --wa-border: #d1d7db;
    }

    html,
    body {
      background: var(--wa-bg) !important;
      color: var(--wa-text) !important;
      font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, sans-serif !important;
    }

    main {
      max-width: 900px !important;
      padding: 24px 12px 60px !important;
    }

    header {
      background: var(--wa-panel) !important;
      border: 1px solid var(--wa-border) !important;
      border-radius: 16px !important;
      box-shadow: none !important;
    }

    header h1,
    h1,
    h2,
    h3 {
      color: var(--wa-text) !important;
    }

    header p,
    summary,
    footer,
    .system,
    .date {
      color: var(--wa-muted) !important;
    }

    .message {
      margin: 8px 0 !important;
    }

    .bubble {
      background: var(--wa-left) !important;
      border-radius: 8px 8px 8px 2px !important;
      border: 1px solid rgba(0, 0, 0, .06) !important;
      box-shadow: 0 1px 1px rgba(11, 20, 26, .13) !important;
      color: var(--wa-text) !important;
    }

    .message.right .bubble {
      background: var(--wa-right) !important;
      border-radius: 8px 8px 2px 8px !important;
    }

    .sender {
      font-weight: 700 !important;
      margin-bottom: 3px !important;
    }

    .conversation {
      background: #008069 !important;
      color: #ffffff !important;
      border-radius: 8px !important;
      font-weight: 700 !important;
    }

    .date {
      border-top: 1px solid var(--wa-border) !important;
      background: var(--wa-panel) !important;
      border-radius: 8px !important;
      padding: 8px 14px !important;
      display: inline-block !important;
      margin-top: 30px !important;
    }

    .note {
      background: var(--wa-panel) !important;
      border: 1px solid var(--wa-border) !important;
      border-radius: 8px !important;
    }

    a {
      color: var(--wa-link) !important;
    }

    .body img {
      border-radius: 8px !important;
      max-height: 620px !important;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --wa-bg: #0b141a;
        --wa-panel: #111b21;
        --wa-left: #202c33;
        --wa-right: #005c4b;
        --wa-text: #e9edef;
        --wa-muted: #8696a0;
        --wa-link: #53bdeb;
        --wa-border: #2a3942;
      }
    }
  `;

  document.head.appendChild(style);

  /* Stable sender colors for group chats.
     The same person receives the same color across all chapters. */
  const senderColors = {
    'tt’': '#e0a1e7ff',
    'Patricia🌻': '#7fabe0ff',
    'font_pcp': '#c2185b',
    'lalin': '#e65100',
    'eclaire': '#00838f',
    'JJAPP': '#2e7d32',
    'BEll': '#b71c1c',
    'Namfon': '#4527a0',
    'Duen': '#5d4037',
    'khim09': '#00695c',
    'ปะป๊า': '#8d6e63',
    'หม่าม้า': '#ad1457'
  };

  const fallbackColors = [
    '#027eb5',
    '#7a4baf',
    '#c2185b',
    '#e65100',
    '#00838f',
    '#2e7d32',
    '#b71c1c',
    '#4527a0',
    '#5d4037',
    '#00695c'
  ];

  let fallbackIndex = 0;
  const assigned = {};

  document.querySelectorAll('.message .sender').forEach((sender) => {
    const name = sender.textContent.trim();

    if (senderColors[name]) {
      sender.style.color = senderColors[name];
      return;
    }

    if (!(name in assigned)) {
      assigned[name] = fallbackColors[fallbackIndex % fallbackColors.length];
      fallbackIndex++;
    }

    sender.style.color = assigned[name];
  });
})();