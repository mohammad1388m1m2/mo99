const elements = [
    { name: "هیدروژن", symbol: "H", atomicNumber: 1, atomicWeight: 1.008, isotopes: ["H-1", "H-2", "H-3"] },
    { name: "هلیم", symbol: "He", atomicNumber: 2, atomicWeight: 4.0026, isotopes: ["He-3", "He-4"] },
    // ... (سایر عناصر) ...
    { name: "اوگانسون", symbol: "Og", atomicNumber: 118, atomicWeight: 294, isotopes: ["Og-294"] },
];

function searchElement() {
    const input = document.getElementById('search').value.trim();
    const elementInfo = document.getElementById('element-info');
    const nameElement = document.getElementById('name');
    const symbolElement = document.getElementById('symbol');
    const atomicNumberElement = document.getElementById('atomic-number');
    const atomicWeightElement = document.getElementById('atomic-weight');
    const isotopesElement = document.getElementById('isotopes');

    const searchByNumber = /^\d+$/.test(input);
    const searchByNameOrSymbol = elements.find(element => element.name === input || element.symbol === input);

    let result;
    if (searchByNumber) {
        const atomicNumber = parseInt(input);
        result = elements.find(element => element.atomicNumber === atomicNumber);
    } else {
        result = searchByNameOrSymbol;
    }

    if (result) {
        nameElement.innerText = `نام: ${result.name}`;
        symbolElement.innerText = `نماد: ${result.symbol}`;
        atomicNumberElement.innerText = `عدد اتمی: ${result.atomicNumber}`;
        atomicWeightElement.innerText = `وزن اتمی: ${result.atomicWeight}`;
        isotopesElement.innerText = `ایزوتوپ‌ها: ${result.isotopes.join(', ')}`;
        elementInfo.style.display = 'block';
    } else {
        elementInfo.style.display = 'none';
        alert('عنصر مورد نظر پیدا نشد!');
    }
}
