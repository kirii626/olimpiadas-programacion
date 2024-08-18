import BocaCamiseta from '../assets/images/Boca camiseta.jpg';

const categories = [
    {
      name: 'Calzados',
      slug: 'calzados', // Añadir slug aquí

      products: [
        { 
          id: 1, 
          name: 'Zapatillas dou', 
          description: 'Zapatillas ligeras y cómodas para correr.', 
          price: '40000', 
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
          price: '25000', 
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
          price: '23000', 
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
          price: '24000', 
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
       slug: 'pantalones',
      products: [
        { 
          id: 4, 
          name: 'Pantalón Deportivo', 
          description: 'Pantalón ligero y flexible para entrenar.', 
          price: '20000', 
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
          price: '27000', 
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
       slug: 'camisetas',
      products: [
        { 
          id: 6, 
          name: 'Camiseta de Entrenamiento', 
          description: 'Camiseta transpirable para deportes.', 
          price: '15000', 
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
          price: '12500', 
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
