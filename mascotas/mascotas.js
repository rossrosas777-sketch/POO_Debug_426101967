class Mascota {
  #nombre;
  especie;
  edad;

  constructor(nombre, especie, edad) {
    this.#nombre = nombre;
    this.especie = especie;
    this.edad = edad;
  }

  getNombre() {
    return this.#nombre;
  }

  cumplirAnios() {
    //faltaba poner this.//
    this.edad = this.edad +1;
    console.log(`¡${this.#nombre} ahora tiene ${this.edad} años!`);
  }
}

const miGato = new Mascota("Mishi", "Gato", 3);
//se estaba intentando llamar a la propiedad privada desde afuera de la clase con (miGato.#nombre)//
console.log("Nombre:", miGato.getNombre());
console.log("Especie:", miGato.especie);
miGato.cumplirAnios();
