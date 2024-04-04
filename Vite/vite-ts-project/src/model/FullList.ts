import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  additem(itemObj: ListItem): void;
  removeItem(id: string): void;
}
//In TypeScript, when you declare a constructor as private,
// it means that the class cannot be instantiated from outside of its own class.

export default class FullList implements List {
  public static instance: FullList = new FullList();
  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }
  load(): void {
    const storedlist: string | null = localStorage.getItem("myList");
    if (typeof storedlist !== "string") return;
    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedlist);
    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._checked
      );
      FullList.instance.additem(newListItem);
    });
  }
  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }
  clearList(): void {
    this._list = [];
    this.save();
  }
  additem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }
  removeItem(id: string): void {
    this._list = this._list.filter((el) => el.id !== id);
    this.save();
  }
}
