import "./css/style.css";

import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./template/ListTemplate";

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;
  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;
  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();
  });
  const clearItems = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;
  clearItems.addEventListener("click", (): void => {
    fullList.clearList();
    template.clear();
  });
  fullList.load();
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);