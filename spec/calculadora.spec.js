describe("Teste Calculadora", function () {
    it("Somas válidas", function () {
        expect(soma(1, 2)).toBe(3);
        expect(soma(9, 9)).toBe(18);
    });

    it("Subtrações validas", function () {
        expect(subtracao(3, 1)).toBe(2);
        expect(subtracao(9, 3)).toBe(6);
    });

    it("multiplicações válidas", function () {
        expect(multiplicacao(1, 2)).toBe(2);
        expect(multiplicacao(9, 9)).toBe(81);
    });

    it("divisões válidas", function () {
        expect(divisao(4, 2)).toBe(2);
        expect(divisao(9, 9)).toBe(1);
    });

});