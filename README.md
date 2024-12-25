# Calculadora de Tiempo

Calculadora de lapsos de tiempo offline.

## Descripción

Esta aplicación permite calcular el tiempo transcurrido entre una hora de inicio y la hora actual del dispositivo. Funciona offline gracias al uso de un Service Worker.

## Estructura del Proyecto

- `index.html`: Archivo HTML principal que contiene la estructura de la aplicación.
- `style.css`: Archivo CSS para los estilos de la aplicación.
- `app.js`: Archivo JavaScript que contiene la lógica de la aplicación.
- `sw.js`: Archivo JavaScript del Service Worker para el soporte offline.
- `manifest.json`: Archivo de manifiesto para la configuración de la aplicación web.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone <https://github.com/SylenthMen/calculatortime.git>
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd <CALCULADORDETIEMPO>
    ```

## Uso

1. Abre [index.html](http://_vscodecontentref_/0) en tu navegador.
2. Ingresa la hora y los minutos de inicio.
3. Haz clic en "Calcular" para ver el tiempo transcurrido.
4. Haz clic en "Limpiar" para reiniciar los campos.

## Service Worker

El Service Worker se registra automáticamente cuando se carga la página. Permite que la aplicación funcione offline al cachear los archivos necesarios.

## Archivos Cacheados

- `/`
- [index.html](http://_vscodecontentref_/1)
- [192x192.png](http://_vscodecontentref_/2)
- [512x512.png](http://_vscodecontentref_/3)

## Personalización

Puedes personalizar los estilos en [style.css](http://_vscodecontentref_/4) y modificar la lógica en [app.js](http://_vscodecontentref_/5) según tus necesidades.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.