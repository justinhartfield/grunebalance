// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Create the root element if it doesn't exist
  if (!document.getElementById("root")) {
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
  }

  // Language data
  const languages = [
    // {
    //   code: "en",
    //   name: "English",
    //   flag: "🇬🇧",
    //   redirect: "https://www.weed.de/patient-werden?lang=en&el=grunebalance&tw_source=Google&tw_campaign=grunebalance_campaign&utm_term=grunebalance_base_campaign&utm_content=grunebalance_base_ad",
    // },
    {
      code: "de",
      name: "Deutsch",
      flag: "🇩🇪",
      redirect: "https://www.weed.de/patient-werden?lang=de&el=grunebalance&tw_source=Google&tw_campaign=grunebalance_campaign&utm_term=grunebalance_base_campaign&utm_content=grunebalance_base_ad",
    },
    // {
    //   code: "tr",
    //   name: "Türkçe",
    //   flag: "🇹🇷",
    //   redirect: "https://www.weed.de/patient-werden?lang=tr&el=grunebalance&tw_source=Google&tw_campaign=grunebalance_campaign&utm_term=grunebalance_base_campaign&utm_content=grunebalance_base_ad",
    // },
  ];

  // Track selected language
  let selectedLanguage = null;

  // Handle language selection
  function handleLanguageClick(language) {
    selectedLanguage = language.code;

    // Update button styles
    updateButtonStyles();

    // Open in new tab
    window.open(language.redirect, "_blank", "noopener,noreferrer");
  }

  // Update button styles based on selection
  function updateButtonStyles() {
    const buttons = document.querySelectorAll(".language-btn");
    buttons.forEach((btn, index) => {
      if (selectedLanguage === languages[index].code) {
        btn.classList.add("selected");
      } else {
        btn.classList.remove("selected");
      }
    });
  }

  // Create the HTML structure
  const html = `
        <div class="app-container">
            <!-- Background layers -->
            <div class="background-image"></div>
            <div class="background-overlay"></div>
            
            <!-- Main content -->
            <div class="content">
                <!-- Title section -->
                <div class="title-container">
                    <div class="title-badge">
                        <div class="title-content">
                            <div class="title-dot"></div>
                            <h1 class="title-text">FINDE DEINE GRÜNE BEHANDLUNG</h1>
                        </div>
                    </div>
                </div>
                
                <!-- Language buttons -->
                <div class="languages-grid">
                    ${languages
                      .map(
                        (lang, index) => `
                        <button class="language-btn" data-index="${index}">
                            <div class="language-content">
                                <div class="language-flag">${lang.flag}</div>
                                <div class="language-name">${lang.name}</div>
                            </div>
                            <div class="language-hover-overlay"></div>
                        </button>
                    `
                      )
                      .join("")}
                </div>
                
                <!-- Footer text -->
                <div class="footer-section">
                    <p class="footer-text">
                        Erhalte ärztliche Beratung zu natürlichen Behandlungswegen. 
                        Schnell, sicher und kompetent.
                    </p>
                    <div class="footer-badge-container">
                        <div class="footer-badge">FINDE DEINEN WEG</div>
                    </div>
                </div>
            </div>
        </div>
    `;

  // Insert HTML into root
  document.getElementById("root").innerHTML = html;

  // Add event listeners to buttons
  document.querySelectorAll(".language-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => handleLanguageClick(languages[index]));
  });
});
