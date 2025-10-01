document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const status = document.createElement("p");
    status.id = "formStatus";

    // remove any previous status messages
    const oldStatus = document.getElementById("formStatus");
    if (oldStatus) oldStatus.remove();

    form.appendChild(status);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        status.textContent = "✅ Thanks! Your message has been sent.";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "❌ Oops! Something went wrong. Try again.";
        status.style.color = "red";
      }
    } catch (error) {
      status.textContent = "⚠️ Network error. Please try again.";
      status.style.color = "red";
    }
  });
});
