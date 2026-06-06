@AGENTS.md

# Proyecto: Tours Tlaxcala

## Descripción
Sitio web de agencia de tours en Tlaxcala, México.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Estructura
```
app/
  page.tsx          # Página principal
  layout.tsx        # Root layout
  globals.css       # Estilos globales
  components/       # Componentes reutilizables
  context/          # React context providers
  lib/              # Utilidades y configuración
  mock/             # Datos de prueba
  links/            # Página de links (tipo Linktree)
public/             # Assets estáticos
```

## Colores de marca
| Token Tailwind       | Hex       | Uso                          |
|----------------------|-----------|------------------------------|
| `brand-navy`         | `#0d1b3e` | Fondo principal              |
| `brand-gold`         | `#c9a84c` | Acento (texto destacado)     |
| `brand-blue`         | `#3d5af1` | CTA primario                 |
| `brand-orange`       | `#f97316` | CTA secundario / header      |

Definidos en `globals.css` (@theme) y `app/lib/colors.ts`.

## Tipografía
- **Playfair Display** — headings (serif, italic para acentos)
- **Inter** — cuerpo de texto
- Variables CSS: `--font-playfair`, `--font-inter`

## Convenciones
- Items de nav en `app/mock/nav.ts` con props `for` (id destino) y `name`
- Datos de contacto en `app/mock/contact.ts`
- Cada sección tiene su mock en `app/mock/`

## Correcciones del usuario
<!-- Se agregan aquí automáticamente cuando el usuario corrija algo -->
