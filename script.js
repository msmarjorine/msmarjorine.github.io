const tabs = document.querySelectorAll(".tab_btn");
const tabsContainer = document.querySelector(".tabs-container");
const tabsContent = document.querySelectorAll(".tab_content");

//Tabbed component

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab_btn");

  //Guard clause
  if (!clicked) return;

  //Remove active classes for all buttons and tabs
  tabs.forEach((t) => t.classList.remove("tab_btn_active"));
  tabsContent.forEach((tab) => tab.classList.remove("tab_content-active"));

  //Activate tab
  clicked.classList.add("tab_btn_active");

  //Activate content area
  document
    .querySelector(`.tab_content_${clicked.dataset.tab}`)
    .classList.add("tab_content-active");
});
