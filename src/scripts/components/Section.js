export default class Section {
  constructor(renderer, container) {
    this._renderer = renderer;
    this._container = container;
  }

  renderItems(items, userId) {
    items.forEach((item) => {
      this._renderer(item, userId, this._addAppendItem.bind(this));
    });
  }

  renderNewItem(item, userId) {
    this._renderer(item, userId, this._addPrependItem.bind(this));
  }

  _addAppendItem(element) {
    this._container.append(element);
  }

  _addPrependItem(element) {
    this._container.prepend(element);
  }
}
