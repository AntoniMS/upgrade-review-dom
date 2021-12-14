// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let ul$ = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
  let li$ = document.createElement("li");
  li$.textContent = countries[i];
  ul$.appendChild(li$);
}
document.body.appendChild(ul$);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const pRemove$$ = document.querySelector(".fn-remove-me");
pRemove$$.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const printHere$$ = document.querySelector('[data-function="printHere"]');

let ul$$ = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
  let li$$ = document.createElement("li");
  ul$$.appendChild(li$$);
  li$$.innerHTML = cars[i];
}
printHere$$.appendChild(ul$$);

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.

const countriesTwo = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

for (const country of countriesTwo) {
  const div$ = document.createElement("div");
  div$.innerHTML = `<h4>${country.title}</h4><img src="${country.imgUrl}"/>`;
  document.body.appendChild(div$);
}



//////---


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la lista.

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// elementos de las listas que elimine ese mismo elemento del html.
