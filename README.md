# fullstack-kube

Simple Kubernetes production setup for fullstack app.

## Stack

- Frontend (Hello world Create React App)
- Backend (Hello world KoaJS)

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

## Kube commands

### Apply kube

```
kubectl apply -f kube/app.yaml
```

### Check pods

```
kubectl get pods -l app=app-fe
```

### Check deployment

```
kubectl get deployment
```

### Check service

```
kubectl get service
```

### Check logs

```
kubectl logs -f -l app=app-be
```

### SSH to Pod

```
kubectl exec --stdin --tty app-fe-5b77f6c8c8-lfsvx -- /bin/sh
```

### Delete

```
kubectl delete service,deployment app-fe app-be
```

## Reference

- https://kubernetes.io/docs/reference/kubectl/cheatsheet/

## License

MIT
