const first_btn = document.querySelector("#first-page-btn");

function loadPage() {
  const body = document.querySelector("body");
  body.innerHTML = `<section class='success-message'>
    <div id="test"><img src="./assets/images/icon-success.svg" alt="" class="success-img">
    <h1 class="title">Thanks for subscribing!</h1>
    <p class="general-text">
      A confirmation email has been sent to <span id="bold-email">ash@loremcompany.com</span>. Please open
      it and click the button inside to confirm your subscription.
    </p></div>
    <button type="submit" style="--text: 'Dismiss message';" class="sub-button">Dismiss message</button>
</section>`;
}

function isValidEmail(email) {
  const emailRegex =
    /[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?/;
  console.log(emailRegex);
  return emailRegex.test(email);
}

document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    const emailInput = document.getElementById("email"),
      invalid_text = document.querySelector(".text-invalid");
    const email = emailInput.value.trim();
    if (!isValidEmail(email) || email == "") {
      console.log(email);
      event.preventDefault();
      emailInput.classList.add("invalid");
      invalid_text.classList.add("invalid");
    } else {
      event.preventDefault();
      window.scrollTo(0,0);
      loadPage();
    }
  });

document.getElementById("email").addEventListener("input", function () {
  this.classList.remove("invalid");
  document.querySelector(".text-invalid").classList.remove("invalid");
});
