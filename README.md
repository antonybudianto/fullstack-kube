# fullstack-kube

## Getting started

1. Build and push image, make sure you've **changed** the image username to yours.

   ```
   docker-compose build
   ```

   ```
   docker-compose push
   ```

   > You don't have to use docker-compose to build images, it's just for convenience.

2. Apply kubernetes config

   ```
   kubectl apply -f kube/app.yml
   ```

3. Open http://localhost for Frontend

4. Open http://localhost/api/ping for Backend

## License

MIT
