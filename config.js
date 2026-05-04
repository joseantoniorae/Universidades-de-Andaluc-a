var config = {
    var config = {
  accessToken: 'TU_TOKEN_AQUI',
  style: 'mapbox://styles/mapbox/dark-v11',

  showMarkers: true,
  markerColor: '#3FB1CE',

  theme: 'dark',
  title: 'Universidades de Andalucía',
  subtitle: 'Sedes de los rectorados',

  chapters: [
    {
      id: 'granada',
      alignment: 'left',
      title: 'Universidad de Granada',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Hospital_Real_Granada.jpg',
      description: 'El Hospital Real es la sede histórica del rectorado de la UGR.',
      location: {
        center: [-3.60106, 37.18495],
        zoom: 16,
        pitch: 0,
        bearing: 0
      }
    },
    {
      id: 'sevilla',
      alignment: 'right',
      title: 'Universidad de Sevilla',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Universidad_de_Sevilla_-_Rectorado.jpg',
      description: 'El rectorado se ubica en la antigua Real Fábrica de Tabacos.',
      location: {
        center: [-5.9915, 37.3772],
        zoom: 16,
        pitch: 0,
        bearing: 0
      }
    }
  ]
};
