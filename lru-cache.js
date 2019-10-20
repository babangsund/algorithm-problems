// https://leetcode.com/problems/lru-cache

class LRUCache {
  capacity;
  map;

  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.map.has(key)) return -1;

    const value = this.map.get(key);
    this._set(key, value);
    return value;
  }

  put(key, value) {
    this._set(key, value);

    if (this.map.size > this.capacity) {
      const firstKey = this.map.keys().next();
      if (!firstKey.done) {
        this.map.delete(firstKey.value);
      }
    }
  }

  _set(key, value) {
    this.map.delete(key);
    this.map.set(key, value);
  }
}
