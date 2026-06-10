const platillos = [
    { id: 1, nombre: "Tacos al Pastor", precio: 50, cantidad: 0, categoria: "Comida" },
    { id: 2, nombre: "Enchiladas Verdes", precio: 60, cantidad: 100, categoria: "Comida" },
    { id: 3, nombre: "Flan de la abuela", precio: 80, cantidad: 50, categoria: "Postres" },
    { id: 4, nombre: "Agua de Jamaica", precio: 30, cantidad: 200, categoria: "Bebidas" },
    { id: 5, nombre: "Café de Olla", precio: 25, cantidad: 150, categoria: "Bebidas" },
    { id: 6, nombre: "Chiles en Nogada", precio: 120, cantidad: 20, categoria: "Comida" },
    { id: 7, nombre: "Pastel de Chocolate", precio: 90, cantidad: 30, categoria: "Postres" },
    { id: 8, nombre: "Limonada Casera", precio: 35, cantidad: 100, categoria: "Bebidas" },
    { id: 9, nombre: "Sopa de Tortilla", precio: 45, cantidad: 80, categoria: "Comida" },
    { id: 10, nombre: "Helado de Vainilla", precio: 40, cantidad: 60, categoria: "Postres" }
]

console.log("===== Bienvenido a nuestro restaurante =====");


// 1. Mostrar el menú con platillos disponibles (platillos disponibles)
const menuDisponible = platillos.filter((platillo) => {
    return platillo.cantidad > 0;
})

console.log("\n Aquí está nuestro menú Disponible:");

// Muestra solo los nombres de los platillos disponibles
const nombresDisponibles = menuDisponible.map((platillo) => {
    return `${platillo.nombre} - $${platillo.precio}`;
});
console.log(nombresDisponibles);
