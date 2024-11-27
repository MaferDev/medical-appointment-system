# Instalar dependencias en la lambda layer

Este proyecto tiene las dependencias que se utilizan en las otras lambdas y son necesarias que se creen primero para luego poder referenciarlos como una layer en las lambdas que lo requieran.

## Steps

### 1. Instalar paquetes

Es necesario estar dentro del directorio medical-appointment-layer/layer/nodejs e instalar las dependencias en modo producción.

```
npm i --production
```

Este permitirá general el node_modules en la carpeta para luego subir a AWS.

### 2. Crear un bucket en AWS para que contenga el layer

Es necesario que se cree un bucket en aws para que se suba el layer.
Ejemplo: medical-appointment-layers-{iniciales}

Una vez que se haya creado el bucket es necesario que el nombre del bucket se remplace en el archivo `serverless.yml`, en el campo **deploymentBucket** > **name**

### 3. Deployar la lambda layer

Para deployar la lambda layer es necesario esta en el directorio raiz del proyecto medical-appointment-layer, tener instalado serverless y ejecutar el siguiente comando:

```
serverless deploy
```

Al finalizar el deploy si todo fue satisfactorio se generará la arn de la layer que utilizaremos para el despliegue de las lambdas.

**Ejemplo:**

dependenciesLayer: arn:aws:lambda:us-east-1:xxxxxxxxx:layer:medical-appointment-layer:1

## Consideraciones

Cada vez que se agregue una nueva dependencia a los proyectos, es necesario agregarlo al package.json y luego instalar la dependencia, para que así las lambdas puedan hacer uso de esa dependencia.

Considerar que por cada despliegue de una layer se va a generar una nueva versión de lambda layer, y es necesario actualizar el layer al que se referencia en la lambda correspondiente (`lambda_definition.yml`)
