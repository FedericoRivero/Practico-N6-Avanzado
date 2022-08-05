- Explica con tus palabras, las siguientes preguntas.

- Que es un numero Natural?
    Un numero natural son todos aquellos numeros que no son negativos y que son mayores o iguales a cero,
    y donde x-1 sea un numero natural.

- Que es una estructura de datos?
    Una estructura de datos es una coleccion de datos que se organizan de forma que se pueda
    acceder a ellos de forma facil y rapida.

- Que es map(), reduce(), filter() y ForEacH() 
    map() es una funcion que recibe una funcion y una coleccion de datos y devuelve una nueva coleccion de datos.

    reduce() es una funcion que recibe una funcion y una coleccion de datos y devuelve un solo dato.

    filter() es una funcion que recibe una funcion y una coleccion de datos y devuelve una coleccion de datos filtrada si la condicion se cumple.

    ForEach() es una funcion que recibe una funcion y una coleccion de datos y devuelve una coleccion de datos en orden ascendente.

- Explica una situacion en donde usarias cada una de las estructuras mencionadas anteriormente.

    - Map()
    Se usa para transformar una coleccion de datos en una nueva coleccion de datos.
    Por ejemplo, si tenemos una coleccion de numeros y queremos transformar cada numero en una cadena, podemos usar map().
    Por ejemplo:
    ```javascript
    const numeros = [1, 2, 3, 4, 5];
    const cadenas = numeros.map(numero => numero.toString());
    ```
    El resultado seria:
    ```javascript
    [ '1', '2', '3', '4', '5' ]
    ```
    - Reduce()
    Se usa para reducir una coleccion de datos en un solo dato.
    Por ejemplo, si tenemos una coleccion de numeros y queremos sumar todos los numeros, podemos usar reduce().
    Por ejemplo:
    ```javascript
    const numeros = [1, 2, 3, 4, 5];
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero);
    ```
    El resultado seria:
    ```javascript
    15
    ```
    - Filter()
    Se usa para filtrar una coleccion de datos.
    Por ejemplo, si tenemos una coleccion de numeros y queremos filtrar los numeros mayores a 3, podemos usar filter().
    Por ejemplo:
    ```javascript
    const numeros = [1, 2, 3, 4, 5];
    const mayoresA3 = numeros.filter(numero => numero > 3);
    ```
    El resultado seria:
    ```javascript
    [ 4, 5 ]
    ```
    - ForEach()
    Se usa para iterar sobre una coleccion de datos.
    Por ejemplo, si tenemos una coleccion de numeros y queremos iterar sobre cada numero, podemos usar ForEach().
    Por ejemplo:
    ```javascript
    const numeros = [1, 2, 3, 4, 5];
    numeros.forEach(numero => console.log(numero));
    ```
    El resultado seria:
    ```javascript
    1
    2
    3
    4
    5
    ```
