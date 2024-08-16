

/**
 * 生成随机数 
 * @param minNum 
 * @param maxNum 
 * @returns number
 */
export function randomNum(minNum: number = 1000, maxNum: number = 9999): number {
    switch (arguments.length) {
        case 1:
            return Math.floor(Math.random() * minNum + 1);
        case 2:
            return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
        default:
            return 0;
    }
}