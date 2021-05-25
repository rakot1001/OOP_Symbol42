class ListItem {
  constructor(v) {
    this._value = v;
    this.next = null;
    this.prev = null;
  }

  get value() {
    return this._value;
  }

  set value(v) {
    this._value = v;
  }
}

class LinkedList {
  constructor(...args) {
    this.head = null;
    this.tale = null;
    for (const item of args) {
      this.push(item);
    }
  }
  push(v) {
    const newItem = new ListItem(v);

    if (this.length === 0) {
      this.head = newItem;
      this.tale = newItem;
    } else{
      this.tale.next = newItem;
      newItem.prev = this.tale;
      this.tale = newItem;
    }

    return ++this.length;
  }
}
