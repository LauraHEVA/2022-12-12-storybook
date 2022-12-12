# Workshop Storybook - 80's movies

Aquí tienes una aplicación en React que muestra un listado de películas y una película destacada. Se alimenta de una [API REST](https://github.com/isdi-coders-2022/storybook-eighties-movies-api).

Tienes todo el JSX en el componente Layout. Separa en componentes (también el CSS) de modo que queden éstos:

- App (ya está)
- Layout (ya está)
- Header
- Navigation
- Hero
- Button
- MoviesList
- MovieCard

Instala Storybook y crea historias para los siguientes componentes:

- Hero
  Se debe poder ver en versión mobile y versión desktop (breakpoints 400px y 800px)
- MovieCard
  Se debe poder ver en versión condensada (con prop `condensed`) o completa (sin prop `condensed`)
- MoviesList
  Se debe poder en versión mobile y versión desktop (breakpoints 400px y 800px). Monta una historia con 2 películas y otra con 6. El componente debe recibir las películas por props.
- Header
  Se debe poder en versión mobile y versión desktop (breakpoints 400px y 800px)
