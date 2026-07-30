/**
 * Doa Melawan Sihir — App renderer
 * Renders modular sections from APP_SECTIONS data.
 */

(function () {
  "use strict";

  const CHEVRON_SVG = `<svg class="item-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`;

  /* ── Content block renderers ───────────────────────────────── */

  function renderVerseGroup(block) {
    let html = `<div class="content-block">`;
    html += `<span class="content-label label-arabic">Arab</span>`;
    block.verses.forEach(function (v) {
      html += `<p class="arabic verse-block">${escapeHtml(v.arabic).replace(/\n/g, "<br>")}</p>`;
      if (v.reference) {
        html += `<span class="verse-ref">${escapeHtml(v.reference)}</span>`;
      }
    });
    if (block.translations && block.translations.length) {
      html += `<span class="content-label label-malay">Melayu</span>`;
      block.translations.forEach(function (t) {
        html += `<p class="translation translation-malay">`;
        if (t.source) {
          html += `<span class="translation-source">${escapeHtml(t.source)}</span>`;
        }
        if (t.reference) {
          html += `<span class="translation-source">${escapeHtml(t.reference)}</span>`;
        }
        html += escapeHtml(t.text);
        html += `</p>`;
      });
    }
    html += `</div>`;
    return html;
  }

  function renderVerse(block) {
    let html = `<div class="content-block">`;
    html += `<span class="content-label label-arabic">Arab</span>`;
    html += `<p class="arabic verse-block">${escapeHtml(block.arabic).replace(/\n/g, "<br>")}</p>`;
    if (block.reference) {
      html += `<span class="verse-ref">${escapeHtml(block.reference)}</span>`;
    }
    if (block.translations) {
      block.translations.forEach(function (t) {
        const labelClass = t.lang === "malay" ? "label-malay" : "label-english";
        const transClass = t.lang === "malay" ? "translation-malay" : "translation-english";
        const labelText = t.lang === "malay" ? "Melayu" : "English";
        html += `<div class="content-block">`;
        html += `<span class="content-label ${labelClass}">${labelText}</span>`;
        html += `<p class="translation ${transClass}">`;
        if (t.source) {
          html += `<span class="translation-source">${escapeHtml(t.source)}</span>`;
        }
        html += escapeHtml(t.text);
        html += `</p></div>`;
      });
    }
    html += `</div>`;
    return html;
  }

  function renderZikir(block) {
    let html = `<div class="content-block">`;
    html += `<span class="content-label label-arabic">Zikir</span>`;
    html += `<p class="arabic verse-block">${escapeHtml(block.arabic)}</p>`;
    if (block.malay) {
      html += `<span class="content-label label-malay">Melayu</span>`;
      html += `<p class="translation translation-malay">${escapeHtml(block.malay)}</p>`;
    }
    if (block.english) {
      html += `<span class="content-label label-english">English</span>`;
      html += `<p class="translation translation-english">${escapeHtml(block.english)}</p>`;
    }
    html += `</div>`;
    return html;
  }

  function renderInstruction(block) {
    return `<div class="content-block">
      <span class="content-label label-instruction">Arahan</span>
      <p class="instruction">${block.text}</p>
    </div>`;
  }

  function renderText(block) {
    return `<div class="content-block text-block"><p>${escapeHtml(block.text)}</p></div>`;
  }

  function renderSteps(block) {
    let html = `<div class="content-block">`;
    if (block.title) {
      html += `<span class="content-label label-instruction">${escapeHtml(block.title)}</span>`;
    }
    html += `<ol class="step-list">`;
    block.steps.forEach(function (step, i) {
      html += `<li data-step="${i + 1}">${escapeHtml(step)}</li>`;
    });
    html += `</ol></div>`;
    return html;
  }

  function renderList(block) {
    const tag = block.ordered ? "ol" : "ul";
    const cls = block.ordered ? "step-list" : "bullet-list";
    let html = `<div class="content-block"><${tag} class="${cls}">`;
    block.items.forEach(function (item, i) {
      const attr = block.ordered ? ` data-step="${i + 1}"` : "";
      html += `<li${attr}>${escapeHtml(item)}</li>`;
    });
    html += `</${tag}></div>`;
    return html;
  }

  function renderSubsection(block) {
    return `<h4 class="subsection-title">${escapeHtml(block.title)}</h4>`;
  }

  const RENDERERS = {
    verseGroup: renderVerseGroup,
    verse: renderVerse,
    zikir: renderZikir,
    instruction: renderInstruction,
    text: renderText,
    steps: renderSteps,
    list: renderList,
    subsection: renderSubsection
  };

  function renderContentBlock(block) {
    const renderer = RENDERERS[block.type];
    if (!renderer) {
      console.warn("Unknown content block type:", block.type);
      return "";
    }
    return renderer(block);
  }

  /* ── Section & item renderers ──────────────────────────────── */

  function renderItem(item) {
    const openAttr = item.defaultOpen ? " open" : "";
    let bodyHtml = "";
    if (item.content) {
      bodyHtml = item.content.map(renderContentBlock).join("");
    }
    return `<details class="item-card" id="${escapeHtml(item.id)}"${openAttr}>
      <summary class="item-summary">
        <span class="item-title">${escapeHtml(item.title)}</span>
        ${CHEVRON_SVG}
      </summary>
      <div class="item-body">${bodyHtml}</div>
    </details>`;
  }

  function renderSection(section) {
    let itemsHtml = "";
    if (section.items && section.items.length > 0) {
      itemsHtml = section.items.map(renderItem).join("");
    } else if (section.placeholder) {
      itemsHtml = `<p class="placeholder-notice">${escapeHtml(section.placeholder)}</p>`;
    }

    return `<section class="section-block" id="${escapeHtml(section.id)}">
      <div class="section-header">
        <span class="section-number">${section.number}</span>
        <h2 class="section-title">${escapeHtml(section.title)}</h2>
      </div>
      ${itemsHtml}
    </section>`;
  }

  function shortTitle(title) {
    if (title.length <= 22) return title;
    return title.split(" ").slice(0, 3).join(" ") + "…";
  }

  /* ── Utilities ─────────────────────────────────────────────── */

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ── Init ──────────────────────────────────────────────────── */

  function initNav() {
    const nav = document.getElementById("section-nav");
    const buttons = nav.querySelectorAll(".nav-btn");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const target = document.getElementById(btn.dataset.target);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            buttons.forEach(function (b) {
              b.classList.toggle("active", b.dataset.target === entry.target.id);
            });
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    document.querySelectorAll(".section-block").forEach(function (el) {
      observer.observe(el);
    });
  }

  function init() {
    const main = document.getElementById("main-content");
    const nav = document.getElementById("section-nav");

    main.innerHTML = APP_SECTIONS.map(renderSection).join("");
    nav.innerHTML = APP_SECTIONS.map(function (s) {
      return `<button class="nav-btn" data-target="${escapeHtml(s.id)}">${s.number}. ${escapeHtml(shortTitle(s.title))}</button>`;
    }).join("");

    initNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
