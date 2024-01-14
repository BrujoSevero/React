# Proyecto React
## 01-WEATHERAPP
---
### Composición:
Este es mi proyecto de *React* referente a una aplicación del tiempo. Los componentes que la forman son las siguientes:

- WeatherForm.jsx
    Este componente compuesto por un formulario en el que consta de dos etiquetas input de tipo "text" donde pondremos la ciudad que queramos saber su tiempo y otro input de tipo "submit" para poder enviar la           información y posteriormente pasarla por pantalla.
- WeatherDisplay.jsx
    Este otro componente va a devolver una función llamada WeatherDisplay, que será el cuadro principal donde se muestra la ciudad escogida, temperatura, clima, día, nubosidad, humedad, viento y presión del día         actual.
- SmallSquare.jsx
    Al igual que el anterior compenente ya mencionado, también nos devolverá una función llamada SmallSquare, donde se proyectaran el día, tiempo y clima de los días posteriores al que estamos.
- App.jsx
    Este último componente nos mostrará la vista completa de los 3 componentes anteriores.
    Se ha usado dos constantes para llamar a dos APIs y que después llamaremos a través de un fetch recogiendo la información y distribuyéndola a los demás componentes, la primera API se realizará para el               componente WeatherDisplay y WeatherForm, y la segunda para SmallSquare y WeatherForm. Se usan 2 estados, primero para guardar la ciudad que hallamos ingresado en el formulario y después para conectarnos con la      API y extraer la información que requiramos para su posterior manipulación.

### Proceso para abrirlo
---
##### Paso 1
- Desde el cmd hacemos un git clone de nuestro proyecto en la ruta que tú quieras, ejemplo:
  <br /><br />
     git clone https://github.com/BrujoSevero/React.git
  <br /><br />
- Con esto se nos creará una copia del proyecto completo en nuestro dispositivo.
##### Paso 2
- Continuamos accediendo al proyecto que se nos ha clonado y una vez accedido a la carpeta general del proyecto ejecutamos el siguiente comando:
  <br /><br />
     npm install
  <br /><br />
- Esto hará que se nos instale las dependencias que sean necesarias para que el proyecto pueda ejecutarse adecuadamente.
- Ahora accedemos a la carpeta donde se encuentre el proyecto que queremos abrir en nuestro caso es *01-AppTiempo* y ejecutamos el siguiente comando:
  <br /><br />
      npm run dev
  <br /><br />
- Y listo, con esto se nos mostrará por pantalla del cmd una dirección del localhost para poder abrir el proyecto y verlo.
