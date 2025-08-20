# Legacy Caps Drop Validator

Aplicación web basada en [NestJS](https://nestjs.com) que permite verificar gorras de un drop de forma sencilla. Cada vez que se valida un código, la app consulta Supabase, muestra la información de la gorra y aumenta su contador de validaciones.

## Requisitos
- Node.js 18+
- Cuenta de [Supabase](https://supabase.com) con una tabla `gorras`

### Variables de entorno
Crea un archivo `.env` en la raíz del proyecto:

```env
SUPABASE_URL="https://<tu-proyecto>.supabase.co"
SUPABASE_ANON_KEY="<tu-clave-anon>"
```

## Instalación

```bash
npm install
```

## Ejecución
```bash
# desarrollo con recarga
npm run start:dev

# producción
npm run start
```

## Estructura de la tabla `gorras`
La tabla utilizada por la aplicación debe contener los siguientes campos:

| Campo       | Tipo    | Descripción                           |
|-------------|---------|---------------------------------------|
| `id`        | text    | Identificador único de la gorra       |
| `imagen_url`| text    | URL de la imagen que se mostrará      |
| `contador`  | integer | Cantidad de veces que se validó       |

Cada validación incrementa automáticamente el valor de `contador`.

## Autor
**Legacy Caps** – Desarrollado por la casa oficial de gorras.

---
Si deseas contribuir o tienes sugerencias, ¡las pull requests son bienvenidas!
