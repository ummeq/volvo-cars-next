const nextConfig = {
  //... other configurations ...
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,HEAD,PUT,PATCH,POST,DELETE',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Accept, Accept-Language, Accept-Encoding',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

