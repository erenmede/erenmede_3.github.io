document.addEventListener('DOMContentLoaded', () => {

  // --- DİL YÖNETİMİ VE ÇEVİRİLER ---
  const translations = {
    tr: {
      "skip": "Ana içeriğe atla",
      "toolbar.langLabel": "Dil:",
      "toolbar.contrastLabel": "Kontrast:",
      "toolbar.normal": "Standart",
      "toolbar.highContrast": "Yüksek Kontrast",
      "toolbar.sizeLabel": "Yazı Boyutu:",
      "header.name": "Eren MEDE — Erişilebilirlik Portfolyosu",
      "header.tagline": "WCAG 2.2 ve PDF/UA Standartlarında Doküman & Web Erişilebilirlik Uzmanı",
      "nav.about": "Hakkımda",
      "nav.certs": "Sertifikalarım",
      "nav.projects": "Örnek Çalışmalar",
      "nav.contact": "İletişim",
      "about.title": "Hakkımda",
      "about.p1": "Devlet okulunda 20 yıldır İngilizce öğretmenliği ve müdür yardımcılığı yapıyorum. IAAP’ın CPACC sertifikası üzerinden erişilebilirlik alanına geçiş yapıyor, WCAG ve PDF/UA standartlarında eğitim materyallerinin uzaktan erişilebilirlik değerlendirmesi ve düzeltmesi üzerine uzmanlaşıyorum.",
      "certs.title": "Sertifikalarım",
      "certs.subtitle": "Uluslararası akredite sertifikalarım ve doğrulama bağlantıları",
      "certs.c1.badge": "IAAP Sertifikası",
      "certs.c1.name": "IAAP CPACC — Certified Professional in Accessibility Core Competencies",
      "certs.c1.desc": "Erişilebilirlik ilkeleri, WCAG standartları, evrensel tasarım ve engellilik yasaları konusunda uluslararası yeterlilik belgesi.",
      "certs.c1.btn": "Sertifikayı İndir (PDF)",
      "certs.c2.badge": "PDF/UA Sertifikası",
      "certs.c2.name": "PDF/UA Doküman Erişilebilirlik ve PAC Denetim Uzmanlığı",
      "certs.c2.desc": "ISO 14289-1 (PDF/UA) standardında etiketleme, okuma sırası düzenleme ve PAC 2024 doğrulama uzmanlığı.",
      "certs.c2.btn": "Sertifikayı İndir (PDF)",
      "projects.title": "Örnek Çalışmalar",
      "projects.subtitle": "Erişilebilir hale getirdiğim dokümanlar ve detaylı vaka incelemeleri.",
      "blog.readTime1": "4 dk okuma",
      "blog.readTime2": "3 dk okuma",
      "blog.h1": "Karmaşık Ders Kitabının PDF/UA Standardına Dönüştürülmesi",
      "blog.excerpt1": "Karmaşık tablolar ve matematiksel içerikler barındıran 40 sayfalık eğitim dokümanının etiket yapısı, okuma sırası ve alternatif metin düzeltme adımları.",
      "blog.h2": "Kurumsal Raporların Kaynağında (Word) Erişilebilir Hazırlanması",
      "blog.excerpt2": "Hiyerarşik başlık yapıları (H1-H4), renk kontrastına uygun grafikler ve tablo başlık eşleştirmeleri ile sıfır hatalı dışa aktarım (Export PDF).",
      "blog.readTime3": "6 dk okuma",
      "blog.h3": "Bir MEB Çalışma Yaprağını Erişilebilir Yapmak: PDF/UA Öncesi ve Sonrası",
      "blog.excerpt3": "Biyoloji 11 \"Bağışıklık Sistemi\" çalışma yaprağının PAC raporlarında 1 etiketten 404 etikete, binlerce hatadan sıfır hataya yolculuğu ve raporda kalan 3 uyarının nedeni.",
      "blog.readMore": "Yazıyı Oku ve Dokümanı İncele",
      "contact.title": "İletişim",
      "contact.desc": "Dokümanlarınızın WCAG ve PDF/UA erişilebilirlik değerlendirmesi için iletişim kurabilirsiniz.",
      "contact.emailLabel": "E-posta:"
    },
    en: {
      "skip": "Skip to main content",
      "toolbar.langLabel": "Language:",
      "toolbar.contrastLabel": "Contrast:",
      "toolbar.normal": "Standard",
      "toolbar.highContrast": "High Contrast",
      "toolbar.sizeLabel": "Font Size:",
      "header.name": "Eren MEDE — Accessibility Portfolio",
      "header.tagline": "WCAG 2.2 & PDF/UA Document & Web Accessibility Specialist",
      "nav.about": "About Me",
      "nav.certs": "Certifications",
      "nav.projects": "Case Studies",
      "nav.contact": "Contact",
      "about.title": "About Me",
      "about.p1": "I have been working as an English teacher and vice principal in a public school for 20 years. Transitioning to accessibility with IAAP CPACC certification, specializing in WCAG and PDF/UA document auditing.",
      "certs.title": "Certifications",
      "certs.subtitle": "Internationally accredited credentials and verification links",
      "certs.c1.badge": "IAAP Credential",
      "certs.c1.name": "IAAP CPACC — Certified Professional in Accessibility Core Competencies",
      "certs.c1.desc": "International credential covering accessibility principles, WCAG standards, universal design, and accessibility legislation.",
      "certs.c1.btn": "Download Certificate (PDF)",
      "certs.c2.badge": "PDF/UA Credential",
      "certs.c2.name": "PDF/UA Accessibility & PAC Audit Specialist",
      "certs.c2.desc": "Specialized training on ISO 14289-1 (PDF/UA) tagging, reading order, and PAC 2024 auditor compliance.",
      "certs.c2.btn": "Download Certificate (PDF)",
      "projects.title": "Case Studies",
      "projects.subtitle": "Remediated accessible documents and detailed case studies.",
      "blog.readTime1": "4 min read",
      "blog.readTime2": "3 min read",
      "blog.h1": "Remediating Complex Academic Textbooks to PDF/UA Standard",
      "blog.excerpt1": "Tag structure, reading order, and alt-text remediation for a 40-page educational document containing complex tables and formulas.",
      "blog.h2": "Designing Accessible Corporate Reports at the Source (MS Word)",
      "blog.excerpt2": "Applying heading hierarchies (H1-H4), contrast-compliant graphics, and table headers for zero-error PDF export.",
      "blog.readTime3": "6 min read",
      "blog.h3": "Making a Turkish Ministry Worksheet Accessible: PDF/UA Before and After",
      "blog.excerpt3": "How a Biology 11 \"Immune System\" worksheet went from 1 tag to 404 tags and thousands of PAC errors to zero, and why 3 warnings remain in the report.",
      "blog.readMore": "Read Post & Download Document",
      "contact.title": "Contact",
      "contact.desc": "Get in touch for WCAG and PDF/UA accessibility audits and document remediation.",
      "contact.emailLabel": "Email:"
    }
  };

  const setLanguage = (lang) => {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  };

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });

  // --- KONTRAST DEĞİŞTİRME ---
  document.querySelectorAll('[data-contrast]').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-contrast');
      document.documentElement.setAttribute('data-contrast', mode);
      document.querySelectorAll('[data-contrast]').forEach(b => {
        b.setAttribute('aria-pressed', b.getAttribute('data-contrast') === mode);
      });
    });
  });

  // --- YAZI BOYUTU DİNAMİK ÖLÇEKLEME (HTML ROOT FONT-SIZE % CHANGE) ---
  //document.querySelectorAll('[data-scale]').forEach(btn => {
    //btn.addEventListener('click', () => {
      //const scale = btn.getAttribute('data-scale');
      //document.documentElement.setAttribute('data-scale', scale);
      //document.querySelectorAll('[data-scale]').forEach(b => {
        //b.setAttribute('aria-pressed', b.getAttribute('data-scale') === scale);
      //});
    //});
  //});
  
 // --- YAZI BOYUTU AYARI (Dinamik Kök Font Boyutu) ---
const sizeButtons = document.querySelectorAll('.tsize');

sizeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    sizeButtons.forEach(b => {
      b.setAttribute('aria-pressed', 'false');
      b.classList.remove('bg-sky-700', 'text-white');
    });

    btn.setAttribute('aria-pressed', 'true');
    btn.classList.add('bg-sky-700', 'text-white');

    const scale = btn.getAttribute('data-scale'); // 100, 115, 130
    
    // Standart body font boyutu 16px kabul edilerek oranlanır
    let baseFontSize = 16; 
    if (scale === '115') baseFontSize = 18.4;
    if (scale === '130') baseFontSize = 20.8;

    document.documentElement.style.fontSize = baseFontSize + 'px';
  });
});

  // --- EKRAN OKUYUCU DOSTU MODAL YÖNETİMİ ---
  let lastFocusedElement = null;

  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    lastFocusedElement = document.activeElement;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length > 0) {
      focusable[0].focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal(modalId);
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
  };

  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add('hidden');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openModal(btn.getAttribute('data-modal'));
    });
  });

  document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) closeModal(modal.id);
    });
  });

  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });

});
