export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: 'localhost',
    port: '8080',
    endpoints: {
        current: "/adder/current",
        add: "/adder"
    }
  }
};
