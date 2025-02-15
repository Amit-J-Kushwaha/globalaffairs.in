function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



function highlightText() {
  const input = document.getElementById('searchInput').value.trim();
  const content = document.getElementById('articles-list');
  const text = content.innerHTML;

  // Remove existing highlights
  content.innerHTML = text.replace(/<span class="highlight">(.*?)<\/span>/g, "$1");

  if (input === "") {
    return;
  }

  // Highlight new matches
  const regex = new RegExp(`(${input})`, "gi");
  const highlightedText = content.innerHTML.replace(regex, '<span class="highlight">$1</span>');
  content.innerHTML = highlightedText;

  // Scroll to the first highlighted word
  const firstHighlight = document.querySelector(".highlight");
  if (firstHighlight) {
    firstHighlight.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}




