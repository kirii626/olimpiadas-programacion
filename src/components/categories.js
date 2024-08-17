import BocaCamiseta from '../assets/images/Boca camiseta.jpg';

const categories = [
    {
      name: 'Calzados',
      products: [
        { 
          id: 1, 
          name: 'Zapatillas dou', 
          description: 'Zapatillas ligeras y cómodas para correr.', 
          price: '$20.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          collection: 'Colecciones', // Agregado
          lo_mejor: true, // Agregado
          novedad: true // Agregado
        },
        { 
          id: 2, 
          name: 'Botines de Fútbol', 
          description: 'Botines para fútbol de alta calidad.', 
          price: '$25.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          collection: 'Colecciones', // Agregado
          lo_mejor: false, // Agregado
          novedad: false // Agregado
        },
        { 
          id: 144, 
          name: 'Zapatillas dou', 
          description: 'Zapatillas ligeras y cómodas para correr.', 
          price: '$20.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          collection: 'Colecciones', // Agregado
          lo_mejor: true, // Agregado
          novedad: true // Agregado
        },

        { 
          id: 133, 
          name: 'Zapatillas dou', 
          description: 'Zapatillas ligeras y cómodas para correr.', 
          price: '$20.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          collection: 'Colecciones', // Agregado
          lo_mejor: true, // Agregado
          novedad: true // Agregado
        },
        { 
          id: 132, 
          name: 'Zapatillas dou', 
          description: 'Zapatillas ligeras y cómodas para correr.', 
          price: '$20.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          collection: 'Colecciones', // Agregado
          lo_mejor: true, // Agregado
          novedad: true // Agregado
        },
        { 
          id: 224, 
          name: 'Zapatillas dou', 
          description: 'Zapatillas ligeras y cómodas para correr.', 
          price: '$20.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          collection: 'Colecciones', // Agregado
          lo_mejor: true, // Agregado
          novedad: true // Agregado
        },
        { 
          id: 10, 
          name: 'Zapatillas dou', 
          description: 'Zapatillas ligeras y cómodas para correr.', 
          price: '$20.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          collection: 'Colecciones', // Agregado
          lo_mejor: true, // Agregado
          novedad: true // Agregado
        },
        { 
          id: 9, 
          name: 'Zapatillas dou', 
          description: 'Zapatillas ligeras y cómodas para correr.', 
          price: '$20.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          collection: 'Colecciones', // Agregado
          lo_mejor: true, // Agregado
          novedad: true // Agregado
        },
        { 
          id: 8, 
          name: 'Zapatillas dou', 
          description: 'Zapatillas ligeras y cómodas para correr.', 
          price: '$20.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          collection: 'Colecciones', // Agregado
          lo_mejor: true, // Agregado
          novedad: true // Agregado
        },
        // Otros productos con sus respectivas propiedades
      ],
    },
    {
      name: 'Pantalones',
      products: [
        { 
          id: 4, 
          name: 'Pantalón Deportivo', 
          description: 'Pantalón ligero y flexible para entrenar.', 
          price: '$15.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          collection: 'Novedades', // Agregado
          lo_mejor: false, // Agregado
          novedad: true // Agregado
        },
        { 
          id: 5, 
          name: 'Jeans', 
          description: 'Jeans de corte ajustado para uso casual.', 
          price: '$20.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          collection: 'Colecciones', // Agregado
          lo_mejor: true, // Agregado
          novedad: false // Agregado
        },
      ],
    },
    {
      name: 'Camisetas',
      products: [
        { 
          id: 6, 
          name: 'Camiseta de Entrenamiento', 
          description: 'Camiseta transpirable para deportes.', 
          price: '$10.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          collection: 'Novedades', // Agregado
          lo_mejor: true, // Agregado
          novedad: true // Agregado
        },
        { 
          id: 7, 
          name: 'Camiseta Casual', 
          description: 'Camiseta cómoda para el día a día.', 
          price: '$12.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          collection: 'Colecciones', // Agregado
          lo_mejor: false, // Agregado
          novedad: false // Agregado
        },
        
      ],
    },
  ];

export default categories;
