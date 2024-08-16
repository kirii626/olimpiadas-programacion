// src/data/categories.js
import BocaCamiseta from '../assets/images/Boca camiseta.jpg';

const categories = [
    {
      name: 'Calzados',
      products: [
        { 
          id: 1, 
          name: 'Zapatillas Deportivas', 
          description: 'Zapatillas ligeras y cómodas para correr.', 
          price: '$20.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'] 
        },
        { 
          id: 2, 
          name: 'Botines de Fútbol', 
          description: 'Botines para fútbol de alta calidad.', 
          price: '$25.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'] 
        },
        { 
          id: 3, 
          name: 'Zapatos Casuales', 
          description: 'Zapatos elegantes y cómodos para el día a día.', 
          price: '$30.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'] 
        },
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
          sizes: ['XS', 'S', 'M', 'L', 'XL'] 
        },
        { 
          id: 5, 
          name: 'Jeans', 
          description: 'Jeans de corte ajustado para uso casual.', 
          price: '$20.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'] 
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
          sizes: ['XS', 'S', 'M', 'L', 'XL'] 
        },
        { 
          id: 7, 
          name: 'Camiseta Casual', 
          description: 'Camiseta cómoda para el día a día.', 
          price: '$12.000', 
          imageUrl: BocaCamiseta,
          colors: ['#000000', '#FFFFFF', '#FF0000'], 
          sizes: ['XS', 'S', 'M', 'L', 'XL'] 
        },
      ],
    },
  ];

export default categories;
