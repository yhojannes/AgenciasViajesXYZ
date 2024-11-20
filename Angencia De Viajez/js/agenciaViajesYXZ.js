// Precios de los destinos
let priceGuajira = 1980000;
let priceChicamocha = 1600000;
let priceLlanos = 1500000;

// Totales finales
let totalAdults = 0;
let totalChildren = 0;
let totalTravelTravelersGuajira = 0;
let totalTravelTravelersChicamocha = 0;
let totalTravelTravelersLlanos = 0;
let subtotalGuajira = 0;
let subtotalChicamocha = 0;
let subtotalLlanos = 0;
let totalDiscount = 0;
let totalNetPayable = 0;

// Número de cotizaciones a realizar
let quantityQuotes = parseInt(prompt("¿Cuántas cotizaciones desea realizar?"));

// Ciclo for para realizar las cotizaciones deseadas
for (let i = 0; i < quantityQuotes; i++) {
    console.log(`Cotización #${i + 1}`);

    let nameCustomer = prompt("Ingrese el nombre del Cliente:");

    let destiny;
    let destinationValid = false;

    // Si ingresa mal el destino, vuelve a preguntar
    while (!destinationValid) {
        destiny = prompt("Ingrese el destino: 'Guajira', 'Cañón del Chicamocha', 'Llanos Orientales':");
        if (destiny == "Guajira" || destiny == "Cañón del Chicamocha" || destiny == "Llanos Orientales") {
            destinationValid = true;
        } else {
            console.log("Destino equivocado");
        }
    }

    let numberAdults = parseInt(prompt("Ingrese el número de adultos:"));
    let numberChildren = parseInt(prompt("Ingrese el número de niños:"));

    let subtotal = 0;
    let discount = 0;
    let NetPayable = 0;

    // Calcular subtotal según destino
    if (destiny == "Guajira") {
        subtotal = priceGuajira * (numberAdults + numberChildren * 0.6);
        totalTravelTravelersGuajira += numberAdults + numberChildren;
        subtotalGuajira += subtotal;
    } else if (destiny == "Cañón del Chicamocha") {
        subtotal = priceChicamocha * (numberAdults + numberChildren * 0.6);
        totalTravelTravelersChicamocha += numberAdults + numberChildren;
        subtotalChicamocha += subtotal;
    } else if (destiny == "Llanos Orientales") {
        subtotal = priceLlanos * (numberAdults + numberChildren * 0.6);
        totalTravelTravelersLlanos += numberAdults + numberChildren;
        subtotalLlanos += subtotal;
    } else {
        console.log("Se equivocó de destino");
    }

    // Aplicar descuento si hay más de 4 adultos y más de 2 niños
    if (numberAdults > 4 && numberChildren > 2) {
        discount = 0.2 * subtotal;
    } else {
        discount = 0;
        console.log("No hubo descuento");
    }

    // Calcular neto a pagar
    NetPayable = subtotal - discount;

    // Acumular totales
    totalAdults += numberAdults;
    totalChildren += numberChildren;
    totalDiscount += discount;
    totalNetPayable += NetPayable;

    // Imprimir la cotización para el cliente
    console.log(`Cotización para: ${nameCustomer}`);
    console.log(`Destino: ${destiny}`);
    console.log(`Número de adultos: ${numberAdults}`);
    console.log(`Número de niños: ${numberChildren}`);
    console.log(`Subtotal: $${subtotal}`);
    console.log(`Descuento: $${discount}`);
    console.log(`Neto a pagar: $${NetPayable}`);
    console.log("------------------------");
}

// Mostrar totales finales
console.log("┌───────────────────────────────────────┐");
console.log("│               Totales                 │");
console.log("└───────────────────────────────────────┘");

console.log(`Totales:`);
console.log(`Total de adultos: ${totalAdults}`);
console.log(`Total de niños: ${totalChildren}`);
console.log(`Total de viajeros a la Guajira: ${totalTravelTravelersGuajira}`);
console.log(`Total de viajeros al Cañón del Chicamocha: ${totalTravelTravelersChicamocha}`);
console.log(`Total de viajeros a los Llanos Orientales: ${totalTravelTravelersLlanos}`);
console.log(`Subtotal de viajes a la Guajira: $${subtotalGuajira}`);
console.log(`Subtotal de viajes al Cañón del Chicamocha: $${subtotalChicamocha}`);
console.log(`Subtotal de viajes a los Llanos Orientales: $${subtotalLlanos}`);
console.log(`Total del descuento: $${totalDiscount}`);
console.log(`Total del neto a pagar: $${totalNetPayable}`);
