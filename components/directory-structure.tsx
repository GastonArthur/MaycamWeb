export default function DirectoryStructure() {
  return (
    <div className="font-mono text-sm bg-gray-100 p-4 rounded-md overflow-x-auto">
      <pre>
        {`my-nextjs-app/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── ...
├── components/
│   └── ...
├── public/                  <- Directorio para activos estáticos
│   ├── favicon.ico          <- Favicon (accesible como /favicon.ico)
│   ├── robots.txt           <- Archivo robots (accesible como /robots.txt)
│   ├── images/              <- Subdirectorio para imágenes
│   │   ├── logo.png         <- Accesible como /images/logo.png
│   │   ├── hero.jpg         <- Accesible como /images/hero.jpg
│   │   ├── products/        <- Organización por categorías
│   │   │   ├── product1.jpg
│   │   │   └── product2.jpg
│   │   └── backgrounds/
│   │       └── pattern.svg
│   ├── fonts/               <- Fuentes personalizadas
│   │   ├── custom-font.woff2
│   │   └── ...
│   └── documents/           <- Archivos descargables
│       ├── brochure.pdf
│       └── ...
├── node_modules/
├── package.json
└── ...`}
      </pre>
    </div>
  )
}

