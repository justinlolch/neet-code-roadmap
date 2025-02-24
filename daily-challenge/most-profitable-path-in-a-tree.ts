function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
    const n = amount.length;
    const graph: number[][] = Array.from({length: n}, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const bobTime = new Array(n).fill(Infinity);

    const findBobTime = (node: number, parent: number, time: number): boolean => {
        if (node === 0) {
            bobTime[node] = time;
            return true;
        }
        for (const neighbor of graph[node]) {
            if (neighbor === parent) continue;
            if (findBobTime(neighbor, node, time + 1)) {
                bobTime[node] = time;
                return true;
            }
        }
        return false;
    };

    findBobTime(bob, -1, 0);

    let maxProfit = -Infinity;

    const dfsAlice = (node: number, parent: number, time: number, profit: number): void => {
        if (time < bobTime[node]) {
            profit += amount[node];
        } else if (time === bobTime[node]) {
            profit += Math.floor(amount[node] / 2);
        }

        if (graph[node].length === 1 && node !== 0) {
            maxProfit = Math.max(maxProfit, profit);
        }

        for (const neighbor of graph[node]) {
            if (neighbor === parent) continue;
            dfsAlice(neighbor, node, time + 1, profit);
        }
    };

    dfsAlice(0, -1, 0, 0);

    return maxProfit;
}

console.log(mostProfitablePath([[0, 1], [1, 2], [1, 3], [3, 4]], 3, [-2, 4, 2, -4, 6])) // 6
console.log(mostProfitablePath([[0, 1]], 1, [-7280, 2350])) // -7280

// 24/2/2025
