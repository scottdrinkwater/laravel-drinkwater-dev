import { describe, it } from "vitest";
import { isEven, isOdd } from "../number";

describe("utils", () => {
    describe("number", () => {
        describe("isEven", () => {
            it("returns true for even numbers", () => {
                // Arrange
                const numbers = [2, 4, 6, 28, 5382];

                numbers.forEach((number) => {
                    // Act
                    const result = isEven(number);

                    // Assert
                    expect(result).toBe(true);
                });
            });
            it("returns false for even numbers", () => {
                // Arrange
                const numbers = [1, 3, 5, 99, 63739];

                numbers.forEach((number) => {
                    // Act
                    const result = isEven(number);

                    // Assert
                    expect(result).toBe(false);
                });
            });
        });
        describe("isOdd", () => {
            it("returns true for odd numbers", () => {
                // Arrange
                const numbers = [1, 3, 5, 99, 63739];

                numbers.forEach((number) => {
                    // Act
                    const result = isOdd(number);

                    // Assert
                    expect(result).toBe(true);
                });
            });
            it("returns false for even numbers", () => {
                // Arrange
                const numbers = [2, 4, 6, 28, 5382];

                numbers.forEach((number) => {
                    // Act
                    const result = isOdd(number);

                    // Assert
                    expect(result).toBe(false);
                });
            });
        });
    });
});
