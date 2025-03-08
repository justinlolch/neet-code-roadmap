function minimumRecolors(blocks: string, k: number): number {
    let left: number = 0;
    let reColor: number = 0;
    let res: number = k;

    for (let right: number = 0; right < blocks.length; right++){
        if (blocks[right] === "W")
            reColor += 1;
        if ((right-left+1 )=== k) {
            res = Math.min(res, reColor);
            if (blocks[left] === "W")
                reColor -=1;
            left+=1;
        }
    }

    return res;
}

console.log(minimumRecolors("WBBWWBBWBW", 7)) // 3
console.log(minimumRecolors("WBWBBBW", 2)) // 0

// 8/3/2025
