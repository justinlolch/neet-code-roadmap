class ProductOfNumbers {
    private prefixProduct: number[];

    constructor() {
        this.initialize();
    }

    initialize() {
        this.prefixProduct = [1];
    }

    getCurrentSize(): number {
        return this.prefixProduct.length;
    }

    getProductByIndex(index: number): number {
        return this.prefixProduct[index];
    }

    add(num: number): void {
        if (num === 0) {
            this.initialize();
        } else {
            const lastProduct: number = this.getProductByIndex(this.getCurrentSize() - 1);
            this.prefixProduct.push(lastProduct * num);
        }
    }

    getProduct(k: number): number {
        if (k >= this.getCurrentSize()) {
            return 0;
        }
        return (
            this.getProductByIndex(this.getCurrentSize() - 1) /
            this.getProductByIndex(this.getCurrentSize() - k - 1)
        );
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */

// 14/2/2025
