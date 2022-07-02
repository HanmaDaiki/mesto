export default class Section {
  constructor(renderer) {
    this._renderer = renderer;
  }

  renderItems(items, userId) {
    items.forEach((item) => {
      this._renderer(item, userId, this._addAppendItem);
    });
  }

  renderNewItem(item, userId) {
    this._renderer(item, userId, this._addPrependItem);
  }

  _addAppendItem(element, container) {
    container.append(element);
  }

  _addPrependItem(element, container) {
    container.prepend(element);
  }
}
