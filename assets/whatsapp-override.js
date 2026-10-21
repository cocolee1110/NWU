/* Never Without You — Chapter 1-style override.
   Works with both chapter formats:
   - New: .msg / .who / .bubble
   - Old: .message / .sender / .bubble

   Add before </body>:
   <script src="../../assets/whatsapp-override.js" defer></script>
*/

(function () {
  const style = document.createElement('style');
  style.id = 'chapter-style-override';

  style.textContent = `
    :root {
      --bg: #f6f4f1;
      --ink: #26231f;
      --mute: #7a736a;
      --card: #ffffff;
      --line: #e4dfd8;
      --left: #ffffff;
      --leftInk: #26231f;
      --right: #d9ecdf;
      --rightInk: #1d2a22;
      --accent: #b4506b;
      --note: #fff6e0;
      --noteLine: #ecd9a5;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #171513;
        --ink: #ece7e0;
        --mute: #9b9388;
        --card: #201d1a;
        --line: #34302b;
        --left: #2a2622;
        --leftInk: #ece7e0;
        --right: #2d4a3a;
        --rightInk: #e8f3ec;
        --accent: #e08aa3;
        --note: #2c2616;
        --noteLine: #5a4b22;
      }
    }

    * {
      box-sizing: border-box;
    }

    html {
      -webkit-text-size-adjust: 100%;
    }

    body {
      margin: 0 !important;
      background: var(--bg) !important;
      color: var(--ink) !important;
      font: 16px/1.55 system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
    }

    main {
      max-width: 720px !important;
      margin: 0 auto !important;
      padding: 24px 16px 64px !important;
    }

    h1 {
      font-size: 1.6rem !important;
      line-height: 1.25 !important;
      margin: .4em 0 .8em !important;
      color: var(--ink) !important;
    }

    details {
      background: var(--card) !important;
      border: 1px solid var(--line) !important;
      border-radius: 12px !important;
      padding: .6em 1em !important;
      margin: 0 0 .8em !important;
    }

    summary {
      cursor: pointer !important;
      font-weight: 600 !important;
      color: var(--ink) !important;
    }

    details ul {
      margin: .6em 0 .4em !important;
      padding-left: 1.2em !important;
    }

    details li {
      margin: .35em 0 !important;
      color: var(--ink) !important;
    }

    .date {
      margin: 2.2em 0 .6em !important;
      text-align: center !important;
      font-size: .95rem !important;
      font-weight: 600 !important;
      letter-spacing: .04em !important;
      color: var(--mute) !important;
      display: flex !important;
      align-items: center !important;
      gap: .8em !important;
      background: transparent !important;
      border: none !important;
      border-radius: 0 !important;
      padding: 0 !important;
    }

    .date::before,
    .date::after {
      content: "" !important;
      flex: 1 !important;
      border-top: 1px solid var(--line) !important;
    }

    .date span {
      display: block !important;
      text-align: center !important;
    }

    .conversation,
    .convo {
      margin-top: 1.4em !important;
      margin-bottom: .4em !important;
      padding: .35em .9em !important;
      display: table !important;
      margin-inline: auto !important;
      font-size: .95rem !important;
      font-weight: 600 !important;
      background: var(--card) !important;
      border: 1px solid var(--line) !important;
      border-radius: 999px !important;
      color: var(--ink) !important;
    }

    .ts {
      display: block !important;
      text-align: center !important;
      font-size: .75rem !important;
      color: var(--mute) !important;
      margin: .2em 0 .8em !important;
    }

    .receipt,
    .event {
      text-align: center !important;
      font-size: .78rem !important;
      color: var(--mute) !important;
      margin: .5em 0 !important;
    }

    .event {
      font-style: italic !important;
    }

    .message,
    .msg {
      display: flex !important;
      flex-direction: column !important;
      margin: .28em 0 !important;
      max-width: 100% !important;
    }

    .message.left,
    .msg.left {
      align-items: flex-start !important;
    }

    .message.right,
    .msg.right {
      align-items: flex-end !important;
    }

    .sender,
    .who {
      font-size: .72rem !important;
      font-weight: 700 !important;
      margin: .5em .9em .1em !important;
    }

    .bubble {
      margin: 0 !important;
      padding: .5em .95em !important;
      border-radius: 18px !important;
      max-width: 82% !important;
      overflow-wrap: anywhere !important;
      white-space: pre-wrap !important;
      box-shadow: 0 1px 0 rgba(0, 0, 0, .04) !important;
      background: var(--left) !important;
      color: var(--leftInk) !important;
      border: 1px solid var(--line) !important;
      border-bottom-left-radius: 6px !important;
    }

    .message.right .bubble,
    .msg.right .bubble {
      background: var(--right) !important;
      color: var(--rightInk) !important;
      border-bottom-right-radius: 6px !important;
    }

    .bubble.emoji-only {
      font-size: 1.6rem !important;
      line-height: 1.3 !important;
      padding: .25em .7em !important;
    }

    .note,
    .author-note {
      margin-top: 3em !important;
      padding: 1.2em 1.1em !important;
      background: var(--note) !important;
      border: 1px dashed var(--noteLine) !important;
      border-radius: 14px !important;
    }

    .note h2,
    .author-note h2 {
      margin: .1em 0 .6em !important;
      font-size: 1rem !important;
      color: var(--ink) !important;
    }

    .note p,
    .author-note p {
      margin: .5em 0 !important;
      color: var(--ink) !important;
    }

    .author-note .dots {
      text-align: center !important;
      color: var(--mute) !important;
      margin: .1em 0 !important;
    }

    a {
      color: var(--accent) !important;
    }

    .body img {
      border-radius: 8px !important;
      max-height: 620px !important;
    }

    @media (max-width: 480px) {
      .bubble {
        max-width: 90% !important;
      }

      h1 {
        font-size: 1.35rem !important;
      }
    }

    @media print {
      body {
        background: #fff !important;
        color: #000 !important;
      }

      main {
        max-width: none !important;
        padding: 0 !important;
      }

      .message,
      .msg,
      .receipt,
      .event {
        break-inside: avoid !important;
      }

      .left .bubble,
      .right .bubble {
        background: #fff !important;
        color: #000 !important;
        border: 1px solid #bbb !important;
      }

      .note,
      .author-note {
        background: #fff !important;
        border-color: #999 !important;
      }
    }
  `;

  document.head.appendChild(style);

  /* Move sender names outside the message bubble.
     If a name is inside .bubble, move it directly above the bubble. */
  document.querySelectorAll('.message, .msg').forEach((message) => {
    const bubble = message.querySelector('.bubble');
    const name = message.querySelector('.sender, .who');

    if (bubble && name && bubble.contains(name)) {
      message.insertBefore(name, bubble);
    }
  });

  /* Stable sender colors for group chats.
     The same person receives the same color across all chapters. */
  const senderColors = {
    'tt’': '#027eb5',
    'Patricia🌻': '#7a4baf',
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

  document.querySelectorAll('.message .sender, .msg .who').forEach((sender) => {
    const name = sender.textContent.trim();

    if (senderColors[name]) {
      sender.style.setProperty('color', senderColors[name], 'important');
      return;
    }

    if (!(name in assigned)) {
      assigned[name] = fallbackColors[fallbackIndex % fallbackColors.length];
      fallbackIndex++;
    }

    sender.style.setProperty('color', assigned[name], 'important');
  });
})();