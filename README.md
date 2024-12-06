## Hi, there! 👋

You can see 2 services in this repository:
- `notification-service` - a service that sends notifications to users.
- `user-service` - a service that manages users.

Run the following command to start the services:
```bash
$ docker-compose up --build
# For Apple Silicon users:
$ docker compose up --build
```

P.S. I added .env files to git for the sake of simplicity. In a real-world scenario, I would add them to .gitignore.