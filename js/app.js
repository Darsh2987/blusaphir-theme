import "../scss/imports.scss";

window.addEventListener("load", function () {
  //Function for the mobile view search icon to open the search box
  function toggleMobileSearchBox() {
    document
      .querySelector(".search-icon-mobile")
      .addEventListener("click", toggle);
    function toggle() {
      const mobileSearchBox = document.querySelector(".mobile-search-box");

      if (mobileSearchBox.classList.contains("mobile-search-box--show")) {
        mobileSearchBox.classList.remove("mobile-search-box--show");
      } else {
        mobileSearchBox.classList.add("mobile-search-box--show");
      }
    }
  }

  //Function for hamburger icon to open up the navigation menu during mobile view.
  function hamburger() {
    document.querySelector("#hamburger").addEventListener("click", menu);
    function menu() {
      const nav = document.querySelector("#nav");
      const hamburger = document.querySelector("#hamburger");

      if (nav.classList.contains("nav--reveal")) {
        nav.classList.remove("nav--reveal");
        hamburger.classList.remove("hamburger-container-open");
      } else {
        nav.classList.add("nav--reveal");
        hamburger.classList.add("hamburger-container-open");
      }
    }
  }

  //Function to generate and display social icons for the external links such as Facebook, Twitter etc.
  function generateSocialIcons() {
    const postATags = document.querySelectorAll(
      ".artist-single-posts-body a, .release-single-posts-body p a, .footer-nav-links-social a"
    );

    postATags.forEach(function (aTag) {
      const newSpan = document.createElement("span");
      newSpan.classList.add("social-icons");

      switch (aTag.innerText.toLowerCase()) {
        case "facebook":
        case "facebook - blu saphir recs":
        case "facebook - digital blus":
        case "facebook - blu saphir ltd":
          newSpan.classList.add("facebook-icon");
          aTag.prepend(newSpan);
          break;
        case "soundcloud":
          newSpan.classList.add("soundcloud-icon");
          aTag.prepend(newSpan);
          break;
        case "twitter":
          newSpan.classList.add("twitter-icon");
          aTag.prepend(newSpan);
          break;
        case "instagram":
          newSpan.classList.add("instagram-icon");
          aTag.prepend(newSpan);
          break;
        case "mixcloud":
          newSpan.classList.add("mixcloud-icon");
          aTag.prepend(newSpan);
          break;
        case "beatport":
        case "beatport - blu saphir":
        case "beatport - digital blus":
        case "beatport - blu saphir ltd":
          newSpan.classList.add("beatport-icon");
          aTag.prepend(newSpan);
          break;
        case "spotify":
          newSpan.classList.add("spotify-icon");
          aTag.prepend(newSpan);
          break;
        case "patreon":
          newSpan.classList.add("patreon-icon");
          aTag.prepend(newSpan);
          break;
        case "discogs":
          newSpan.classList.add("discogs-icon");
          aTag.prepend(newSpan);
          break;
        case "bandcamp":
          newSpan.classList.add("bandcamp-icon");
          aTag.prepend(newSpan);
          break;
        case "youtube":
          newSpan.classList.add("youtube-icon");
          aTag.prepend(newSpan);
          break;
      }
    });
  }

  // Function to get current year and dynamically keep the footer date year upto date
  function getyear() {
    const date = new Date();
    const year = date.getFullYear();
    document.querySelector(
      "#copyright"
    ).innerHTML = ` ${year}&copy Blu Saphir Recordings Limited.`;
  }

  toggleMobileSearchBox();
  hamburger();
  generateSocialIcons();
  getyear();
});
