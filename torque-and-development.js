// https://www.hackerrank.com/challenges/torque-and-development/problem

class Graph {
  constructor(v) {
    this.v = v;
    this.adj = {};
    this.libs = 0;
    this.connected = 0;

    for (let i = 1; i <= v; i++) {
      this.adj[i] = [];
    }
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
  }

  connect() {
    const visited = [];

    for (let i = 1; i <= this.v; ++i) {
      if (!visited[i]) {
        this.dfs(i, visited);
        this.libs++;
      }
    }
  }

  dfs(v, visited) {
    const {adj} = this;
    visited[v] = true;

    for (let i = 0; i < adj[v].length; ++i) {
      if (!visited[adj[v][i]]) {
        this.dfs(adj[v][i], visited);
        this.connected++;
      }
    }
  }
}

function roadsAndLibraries(n, c_lib, c_road, cities) {
  if (c_lib <= c_road) {
    return c_lib * n;
  } else {
    const graph = new Graph(n);

    for (let i = 0; i < cities.length; i++) {
      graph.addEdge(cities[i][0], cities[i][1]);
    }

    graph.connect();

    return graph.connected * c_road + graph.libs * c_lib;
  }
}
