# Proyecto Final: H&M Materiales

## Descripción

Esta es la entrega final de mi proyecto del curso de React de CODERHOUSE. La consigna nos pedía desarrollar una app de un e-commerce para poder vender productos de un rubro a elección. 
Mi elección se trata de una venta de materiales para la construcción de un integrante de mi familia, la idea a futuro es hacerlo 100% funcional con todos los requisitos que el dueño del comercio me pida.

## Cómo levantar el proyecto

Una vez descargado el repositorio, deberas completar los campos en el archivo '.env' de ejemplo que se encuentra en la raíz del repositorio, con los valores correspondiente que te envíe, para poder accder a la base de datos de firebase.
Una vez seteados los valores de entorno, deberás tener instalado npm en tu máquina, e insertar los siguientes comandos en la consola, desde el directorio raíz del repositorio:
```
npm install
npm start
```

## Componentes

### Navbar

El navbar es el componente que muestra y da acceso a los links de las distintas secciones del e-commerce. Además contiene el CartWidget que nos permite ir al resumen de la compra para finalizarla.

### Item List
Este componente nos muestra el **catálogo** de productos del sitio. Desde el catálogo podemos acceder al detalle de cada producto para conocer más detalles y agregar el producto al carrito.

### Item Detail

Este componente muestra el **detalle del producto**, su descripción, su precio y la foto. Nos permite agregar el producto al carrito y seleccionar la cantidad de productos a agregar.

### Cart Widget

Este componente nos muestra la cantidad de productos que contiene nuestro carrito, y además nos permite acceder al checkout donde estará el resumen de la compra y podremos finalizarla.

### Checkout

En este componente se encuentra el resumen de la compra, detallando las cantidades y los precios de los productos agregados. Además nos permite finalizar la compra y emitir la orden.

## Demo
El siguiente video muestra el funcionamiento de la app del e-commerce:

https://github.com/LucMercado/PFReact-Mercado/assets/130707812/eb3e0e97-f208-4b0e-be73-3f07bfc684a5


