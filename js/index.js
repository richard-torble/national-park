const listGroupItems = document.querySelectorAll(".list-group-item");

listGroupItems.forEach((listGroupItem) => {
  listGroupItem.addEventListener("mouseenter", changeListGroupPanel);
});

function changeListGroupPanel(e) {
  // Grabs each list group item when hovered over
  const targetItem = e.target;

  // Links list item to image panel
  const targetPanel = targetItem.getAttribute("aria-controls");

  // Navigate to the divs that contain the image panel with the hidden attribute
  const listGroup = targetItem.parentNode;
  const listGroupColumn = listGroup.parentNode;
  const listGroupRow = listGroupColumn.parentNode;

  // Add hidden attribute to all image panels
  listGroupRow
    .querySelectorAll('[role="tabpanel"]')
    .forEach((panel) => panel.setAttribute("hidden", true));

  // Remove hidden attribute when list group item is hovered over
  listGroupRow.querySelector([`#${targetPanel}`]).removeAttribute("hidden");
}
