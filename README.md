# SLACK NOTIFICATION

Obtiene datos de formularios de contacto de mis proyectos y los envía a un canal en mi cuenta de Slack

Servicio de notificaciones personalizadas para Slack, envía mensajes y alertas a canales de forma fácil y segura.

Este proyecto busca facilitar la comunicación y la colaboración entre proyectos a través de notificaciones personalizadas en Slack.

# DOCS

## `/api/slack`

### Descripción

La ruta `/api/slack` es un punto de entrada para enviar notificaciones a un canal de Slack. Esta ruta acepta solicitudes HTTP POST y devuelve una respuesta JSON con el resultado de la operación.

### Método

* `POST /api/slack`

### Query Params

* `token`: Token de autenticación de Slack (requerido)

### Body Params
* `email`: E-mail del usuario que realiza la consulta (requerido)
* `name`: Nombre del ususario que realiza la consulta(requerido)
* `data`: Mensaje o consulta del usuario (opcional)
* `app`:  Aplicación o proyecto que realiza la consulta (requerido)


### Ejemplo de Solicitud

```json
POST /api/slack?token={token} HTTP/1.1
Content-Type: application/json

{
  "email": "fulano_de_tal@email.com",
  "name": "Fulano De Tal",
  "data": "Hola, este es un mensaje de prueba",
  "app": "PeliAPP"
}
```

### Respuesta

* `204 No Content`: La notificación se envió correctamente
* `401 Unauthorized`: El token de autenticación es inválido o inexistente
* `400 Bad Request`: La solicitud no es válida (falta algún parámetro requerido)
