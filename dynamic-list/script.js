const html = document.querySelector("html");
const list = document.createElement("ul");
const description = document.createElement("p");
description.textContent =
  "This is a dynamic list. Click anywhere to add a list item. Click on a list item to rename it.";

document.body.appendChild(description);
document.body.appendChild(list);

html.onclick = function () {
  const listItem = document.createElement("li");
  const itemContent = prompt("What do you want to add to the list?");
  listItem.textContent = itemContent;
  list.appendChild(listItem);

  listItem.onclick = function (e) {
    e.stopPropagation();
    // to stop the behavior when a click triggers two prompts(for html and for listItem)

    const itemContent = prompt("What do you want to replace the item with?");
    listItem.textContent = itemContent;
  };
};
