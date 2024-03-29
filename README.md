# DDD Training Template Typescript

<h1>WORK IN PROGRESS</h1>

Separation between domain event and integration event


## Goal : Leasing car

Two BC Registration and Leasing

Pool of car leasing, or to repair before leasing

Add car, integration event  => consumer leasing BC to be rented

See: _CarReadyToRentIntegrationEvent_



## Bounded context

- Driver Registration
- Car Registration
- Leasing


## Skeleton


- src
  - bounded-context-name
    - application-core
      - aggregate-name
        - application
        - domain
      - ports
    - infrastructure
    - presentation
    - tests


## Idea

Idea for a domain event:

A user rent a car, the status of user is update to Car Rented.
When is release the car, a domain event is emmited, the user status change to "FreeToRentACar"

Domain event: Driver(Aggregate) rent car => Car(Aggregate) status updated to RENTED


See: CarRentedEvent


## Command

Run integration test with sqlite memory (db) (no need to up docker-compose)

    npm run test:integration

Run unit test

    npm run test


## Services

### Api

http://localhost:3000/hello/world

### RabbitMq

http://localhost:15673/#/queues


## Credits


Example:

https://www.mirkosertic.de/blog/2013/04/domain-driven-design-example/

Example library:

https://github.com/ddd-cqrs-es/BookLibrary/blob/master/BookingLibrary.Domain.Core/AggregateRoot.cs

https://github.com/ddd-cqrs-es/BookLibrary/tree/master/BookingLibrary.Domain.Core

https://github.com/ddd-by-examples/library

https://medium.com/nick-tune-tech-strategy-blog/ddd-pattern-library-contexts-d6ae81f462ef


Update aggregate:

https://khalilstemmler.com/articles/typescript-domain-driven-design/updating-aggregates-in-domain-driven-design/


Domain event

https://lostechies.com/jimmybogard/2010/04/08/strengthening-your-domain-domain-events/

https://udidahan.com/2009/06/14/domain-events-salvation/

https://khalilstemmler.com/articles/typescript-domain-driven-design/chain-business-logic-domain-events/

Domain event vs Integration event:

https://devblogs.microsoft.com/cesardelatorre/domain-events-vs-integration-events-in-domain-driven-design-and-microservices-architectures/

https://github.com/kgrzybek/modular-monolith-with-ddd


RabbitMQ

https://dev.to/omardiaa48/microservices-with-expressjs-and-rabbitmq-34dk

https://geshan.com.np/blog/2021/07/rabbitmq-docker-nodejs/

https://sharmilas.medium.com/get-started-with-rabbitmq-in-node-js-1adb18d019d0

https://github.com/stemmlerjs/white-label/blob/master/src/modules/notification/subscribers/index.ts


ACL

https://stackoverflow.com/questions/909264/ddd-anti-corruption-layer-how-to

https://dev.to/asarnaout/the-anti-corruption-layer-pattern-pcd

https://awesome-architecture.com/cloud-design-patterns/anti-corruption-layer-pattern/#videos

----------------
https://tpierrain.blogspot.com/2020/04/adapters-are-true-heralds-of-ddd.html


An anti-corruption layer can be implemented in various forms:
- external gateway/service/intermediate API
- dedicated in-middle database (for old systems)
- or just an in-proc adapter within a hexagonal architecture.


The ACL-Adapter of your hexagonal architecture will therefore very often have to call these multiple sources to be able to offer a consolidated vision to your domain.

For instance:

- Calling a first service of another BC to recover incomplete data
- Translating or adapting part of its response into another data structure ready to be used to forge an intelligible request to another external service (often belonging to the same second BC but not always)
- Sending this second request to the second system or endpoint
- Getting the result of this second call and adapt the whole set to produce a response that will finally suit your own Hexagon with its Domain-level semantic

----------------


An Anti-Corruption Layer is a layer (it can be a package, a class, or an entire system) that lives in between our client and the external application.

----------------


ACL many implems

https://www.linkedin.com/pulse/design-patterns-app-refactoring-microservices-sharan-gowde/

Link to EAI (enterprise application integration) : https://www.piloter.org/techno/support/EAI.htm



Clean Archi

https://leandeep.com/clean-architecture/
