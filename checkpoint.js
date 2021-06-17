// Importante: No modificar ni el nombre ni los argumentos que reciben las funciones, sólo deben escribir
// código dentro de las funciones ya definidas.


function minutosASegundos(minutos) {
  // Escribir una funcion que reciba un entero (minutos)
  // y retorne la cantidad de segundos
  // ej:
  // minutosASegundos(5) => 300
  // minutosASegundos(3) => 180
  // Tu código aca:
// Se declara la funcion para que retorne el valor convertido a segundos
  return minutos*60
}

function promedio(array) {
  // escribir una funcion que reciba un arreglo de enteros (array)
  // y retorne el promedio de esos numeros
  // ej:
  // promedio([1,2,3]) => 2
  // promedio([10, 20, 3]) => 11
  // Nota: Los numeros estan ordenados de menor a mayor.

  // Tu código aca:
//Se declara la funcion para que devuelva el valor promedio de los elementos del arreglo de entrada
  suma=0;
  for(let i=0;i<array.length;i++){
    suma=suma+array[i];
  }
  return suma/array.length
}

function salarioAnual(empleados, nombre) {
  // Escribe una funcion que reciba un arreglo de objetos con info de empleados (empleados)
  // y un string (nombre)
  // y retorne el salario anual del empleado con ese nombre;
  // ej: 
  // var empleados = [{
  //    nombre: 'Manuel',
  //    salario: 1000,
  //  },
  //  {
  //    nombre: 'Flor',
  //    salario: 4000,
  //  },
  //  {
  //    nombre: 'Maria',
  //    salario: 500,
  //  }
  // ];
  // salarioAnual(empleados, 'Flor'); => 48000
  // salarioAnual(empleados, 'Manuel;); => 12000
  // Tu código aca:
  //Se declara la funcion para el calculo del salario anual con argumentos de entrada {1:array, 2:nombre del empleado}
    for (i=0;i<empleados.length;i++){
      if(empleados[i].nombre===nombre){
        return empleados[i].salario*12;
      }
    }
}

function encontrarLaPalabra(string) {
  // Escribir una funcion que reciba un string (string) y retorne true si encuentra la palabra "henry" adentro.
  // si no, retorna false.
  // Ej:
  // encontrarLaBomba('bienvenidos a henry') => true;
  // encontrarLaBomba('hola que tal, como va?!') => false;

  // Tu código:
  //Se declara una funcion que devuelve true en caso de que el string que ingresa a la funcion sea 'bienvenidos a henry' y false en caso de que el string sea 'hola que tal, como va?!'
  var prueba='henry';
  var resultado=false;
  for(i=0;i<string.length-4;i++){
    if(string[i]===prueba[0]&&string[i+1]===prueba[1]&&string[i+2]===prueba[2]&&string[i+3]===prueba[3]&&string[i+4]===prueba[4]){
      resultado=true;
    }
  }
  return resultado
}

function index() {
  // Escribi una función encontraIndex en el prototipo de Arrays,
  // que recibe un elemento.
  // La function tiene que devolver el indice (index) del primer elemento que coincida con el pasado como parametro dentro del array.
  // Si el elemento se repite dentro del Array, este devuelve el indice del Primer elemento.
  // Si no existe ese elemento la funcion debe devolver -1
  // NO USAR LA FUNCION indexOf DE LOS ARREGLOS.
  // ej:
  // var numeros = [5, 6, 4, 65, 8, 4]
  // numeros.encontraIndex(4) debe devolver 2.
  // ya que el numero 4 se encuentra en la posicion 2 dentro del array.
  // numeros.encontraIndex(23) debe devolver -1 ya que ese elemento no existe en ese array.

  // Tu código aca:
  // Se declara un metodo (encontraIndex) en el prototipo de array para la funcion de buscar el index, el cual se puede usar en ambos arreglos: strings y numeros
  Array.prototype.encontraIndex=function(val){
    contador=0;
    for(i=0;i<this.length;i++){
      if(this[i]===val){
        contador=contador+1;
      }
    }
    if(contador!==0){
      return contador
    }
    else{
      return -1
    }
  }
};



function crearClaseEmpleado() {
  // Crear una clase para construir objetos de tipo Empleado.
  // el constructor debe recibir:
  // nombre (string) , salario (integer) , tareas (array de objetos), jefe (booleano - por defecto false) 
  // Esta funcion debe retonar la clase Persona.

  class Empleado {
    constructor(nombre, salario, tareas, jefe) {
      this.nombre = nombre;
      this.salario = salario;
      this.tareas = tareas;
      this.jefe = jefe || false;
    }

    addTarea(tarea, prioridad) {
      // el metodo addTarea recibe un string tarea y un entero prioridad y debe agregar un objeto:
      // { tarea: tarea, prioridad: prioridad} al arreglo de tareas del empleado.
      // no debe retornar nada.
      this.tareas.push({'prioridad':prioridad,'tarea':tarea});
    }

    switchJefe() {
      // este método debe switchear el booleano jefe, si estaba en true, dejarlo en false
      // y si estaba en false, dejarlo en true
      // no debe retornar nada.
      if(this.jefe===true){
        this.jefe=false;
      }
      else{
        this.jefe=true;
      }
    }
    getTareas() {
      // Escribe una función que retorne un arreglo con sólo los nombres (tarea) del arreglo de tareas
      // del empleado.
      // this.tareas = [
      //    {tarea: 'compras', prioridad: 1},
      //    {tarea: 'dar clases', prioridad: 3},
      //    {tarea: 'operaciones', prioridad: 2}
      //  ];
      // Ej:
      // persona.getTareas() // retorna ['compras', 'dar clases', 'operaciones']
      var hw= this.tareas.map(function(element){
        return element.tarea
      })
      return hw
    }

    getTareasPrioritarias(prioridad) {
      // Escribe una función que retorne las tareas con prioridad mayor al entero prioridad
      // ej, si la persona tuviera estas tareas:
      // {
      //   tareas: [{
      //     nombre: 'compras',
      //     prioridad: 4,
      //   }, {
      //     nombre: 'operaciones',
      //     prioridad: 2,
      //   }]
      // }
      // persona.getTareasPrioritarias(3) // retorna 
      // [{
      //  nombre: 'compras',
      //  prioridad: 4,
      // }]
      var hwp=[];
      this.tareas.forEach(function (element){
        if (element.prioridad>prioridad){
          hwp.push(element);
        }
      })
      return hwp
    }

  };

  return Empleado;
}

function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]
  Array.prototype.filtrar=function(funcion){
    var arreglo = []
    for(i=0;i<this.length;i++){
      arreglo.push(funcion(this[i]));
    }
    newarray=[];
    for(i=0;i<arreglo.length;i++){
      if(arreglo[i]!==false){
        newarray.push(this[i])
      }
    }
    return newarray
  }
};

// No modifiques nada debajo de esta linea
//

module.exports = {
  minutosASegundos,
  promedio,
  encontrarLaPalabra,
  salarioAnual,
  crearClaseEmpleado,
  index,
  filtrar
}
