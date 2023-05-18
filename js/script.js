// let newsTab = document.querySelector(".news-tab");
// let newsTabButtons = newsTab.querySelectorAll(".nav-link");
// let newsTabPanels = newsTab.querySelectorAll(".tab-panel");

// console.log(newsTabPanels);

// checkPanel()

// newsTabButtons.addEventListener("click", checkPanel)

// function checkPanel() {
//     for (panel of newsTabPanels) {
//       if (!panel.classList.contains("active")) {
//         panel.classList.add("d-none");
//       } if (panel.classList.contains("d-none")) {
//         panel.classList.remove("d-none");
//       }
//     }
// }

// Get the News tab
const newsTab = document.querySelector(".news-tab");

// Get all the tab buttons
const tabButtons = newsTab.querySelectorAll('.nav-link');

// Get all the tab panels
const tabPanels = document.querySelectorAll('.tab-panel');

// Function to show the selected tab panel and hide the others
function showTab(tabId) {
  // Hide all tab panels
  tabPanels.forEach(panel => {
    panel.style.display = 'none';
  });

  // Show the selected tab panel
  const selectedPanel = document.getElementById(tabId);
  if (selectedPanel) {
    selectedPanel.style.display = 'block';
  }
}

// Add click event listeners to the tab buttons
tabButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove the "active" class from all tab buttons
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    // Add the "active" class to the clicked tab button
    this.classList.add('active');

    // Get the target tab panel ID from the aria-controls attribute
    const targetTab = this.getAttribute('aria-controls');

    // Show the corresponding tab panel
    showTab(targetTab);
  });
});

// Initially show the first tab panel and add "active" class to the first tab button
if (tabButtons.length > 0) {
  const firstButton = tabButtons[0];
  const firstTab = firstButton.getAttribute('aria-controls');
  showTab(firstTab);
  console.log(tabButtons)
  firstButton.classList.add('active');
}
