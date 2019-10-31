// https://leetcode.com/problems/number-of-islands/

/* Solution #1 */
class Ocean {
  constructor(ocean) {
    this.islands = 0;
    this.ocean = ocean;
    this.maxRows = ocean.length;
    this.maxCols = ocean[0].length;
    //this.blackList = new Set();

    this.traverseOcean();
  }

  traverseOcean() {
    for (let row = 0; row < this.maxRows; row++) {
      for (let col = 0; col < this.maxCols; col++) {
        if (this.ocean[row][col] === '1') {
          this.islands++;
          this.traverseIsland(row, col);
        }
      }
    }
  }

  traverseIsland = (row, col) => {
    const {traverseIsland} = this;

    if (this.ocean[row][col] === '1') {
      this.ocean[row][col] = '0';

      // up
      if (row > 0) {
        traverseIsland(row - 1, col);
      }
      // down
      if (row < this.maxRows - 1) {
        traverseIsland(row + 1, col);
      }
      // left
      if (col > 0) {
        traverseIsland(row, col - 1);
      }
      // right
      if (col < this.maxCols) {
        traverseIsland(row, col + 1);
      }
    }
  };
}

function numIslands(grid) {
  return !grid.length ? 0 : new Ocean(grid).islands;
}

// Runtime: O(row * col)
// Space: O(row * col)

/* Solution #2 */
function numIslands(grid) {
  if (!grid.length) return 0;

  const maxCols = grid[0].length;
  const maxRows = grid.length;
  let islands = 0;

  function traverseIsland(row, col) {
    if (
      row > -1 &&
      row < maxRows &&
      col > -1 &&
      col < maxCols &&
      grid[row][col] === '1'
    ) {
      grid[row][col] = '0';

      // up
      traverseIsland(row - 1, col);
      // down
      traverseIsland(row + 1, col);
      // left
      traverseIsland(row, col - 1);
      // right
      traverseIsland(row, col + 1);
    }
  }

  for (let row = 0; row < maxRows; row++) {
    for (let col = 0; col < maxCols; col++) {
      if (grid[row][col] === '1') {
        islands++;
        traverseIsland(row, col);
      }
    }
  }

  return islands;
}

// Runtime: O(row * col)
// Space: O(row * col)
