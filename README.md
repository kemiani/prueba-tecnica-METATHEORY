  Vulnerabilidad crítica de ejecución remota de código (RCE):

React-Node-Technical-Test\server\controllers\user.js


  1. Líneas 204-206: Decodifica variables del .env usando atob() (base64):
    - DEV_API_KEY → URL del servidor malicioso
    - DEV_SECRET_KEY → header de autenticación
    - DEV_SECRET_VALUE → valor del header
  2. Línea 207: Hace una petición HTTP GET al servidor malicioso con credenciales
  3. Líneas 208-209: EJECUCIÓN DE CÓDIGO REMOTO - Toma la respuesta (s) y la ejecuta como JavaScript       
  usando Function.constructor, que es equivalente a eval()
  4. Línea 210: Auto-ejecuta inmediatamente con ()()

  Esto permite que un atacante ejecute cualquier código JavaScript en el servidor simplemente
  controlando la respuesta del endpoint malicioso. Es una puerta trasera (backdoor) extremadamente
  peligrosa.

  Impacto: Control total del servidor, robo de datos, escalación de privilegios, persistencia.
