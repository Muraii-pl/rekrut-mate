| Layer             | Can depend on             | Must **not** depend on       | Description                                       |
|-------------------| ------------------------- |------------------------------|---------------------------------------------------|
| `api/`            | `application/`, `domain/` | `infrastructure/`            | Entry points (HTTP, CLI, REST controllers)        |
| `application/`    | `domain/`                 | `api/`, `infrastructure/`    | Orchestrates use cases, maps DTOs, handles events |
| `domain/`         | — (pure)                  | anything                     | Pure business logic — no external dependencies    |
| `infrastructure/` | anything                  | (no one should depend on it) | Implements DB access, external APIs, services     |



 

