# Taller Backend Semana 6

Este proyecto se realiza para el cumplimiento del Taller
de la semana 6 de Desarrollo de software orientado a la web


## Despliegue

Este proyecto se ejecuta en un servidor `express`, para los servicios de autenticacion.

Posee una base de datos `SQLITE` por lo que no necesita de configurar una conexion a base de datos

El frontend esta diseñado en `Angular`, los archivos estaticos se encuentran en `.\cliente\dist\taller_semana_6`.

Para desplegar el servidor dirigirse a la ruta
`.\servidor`

Desde hay el siguiente comando para instalar las dependencias:

```bash
  npm install
```

Una vez instaladas todas las dependencias, podemos lanzar el proyecyto con: 

```bash
  npm run start
```
Esto Iniciara el servidor express en http://localhost:3000


## API

#### Inicio de sesion

```http
  POST /api/v1/login
```

| Parametro | Tipo     | Descripcion                 |
| :-------- | :------- | :---------------------------|
| `user`    | `string` | **Requerido**. Email usuario|
| `password`| `string` | **Requerido**. Contraseña   |

#### Respuesta

| Parametro | Tipo     | Descripcion                 |
| :-------- | :------- | :---------------------------|
| `mensaje`    | `string` |  Resultado de la accion  |

#### Registrar nuevo usuario

```http
  POST /api/v1/register
```

| Parametro | Tipo     | Descripcion                 |
| :-------- | :------- | :---------------------------|
| `user`    | `string` | **Requerido**. Email usuario|
| `password`| `string` | **Requerido**. Contraseña   |

#### Respuesta

| Parametro | Tipo     | Descripcion                 |
| :-------- | :------- | :---------------------------|
| `mensaje`    | `string` |  Resultado de la accion  |



## Autor

- Juan Sebastian Lara Cardozo

