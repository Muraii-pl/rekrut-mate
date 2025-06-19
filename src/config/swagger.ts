import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'Dokumentacja REST API dla aplikacji',
    },
    servers: [
      {
        url: `http://localhost:${ process.env.PORT || 3000 }`,
      },
    ],
  },
  apis: ['src/interfaces/routes/*.route.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
