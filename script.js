document.getElementById("screenshotBtn").addEventListener("click", async () => {
  try {
    const response = await fetch("https://webbackend-9ccq.onrender.com/screenshot", {
      method: "POST"
    });
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "infographic_screenshot.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    alert("Failed to take screenshot.");
    console.error(error);
  }
});
