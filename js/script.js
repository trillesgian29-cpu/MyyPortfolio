// Lightbox for gallery images
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "rgba(0,0,0,0.85)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.innerHTML = `<img src="${img.src}" style="max-width:90%; max-height:90%; border-radius:12px">`;
    overlay.addEventListener("click", () => overlay.remove());
    document.body.appendChild(overlay);
  });
});
