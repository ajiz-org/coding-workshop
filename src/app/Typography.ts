export const APP_TEXT = {
  title: "Coding Workshops",
  register: "Register Now !",
};

export interface TimelineData {
  title: string;
  modules: {
    title: string;
    time: string;
    subModuleTitles?: string[];
  }[];
}

export const TIMELINE_DATA: TimelineData[][] = [
  [
    {
      title: "",
      modules: [
        {
          title: "Introduction to Software Processing Models",
          time: "13:30 - 14:00",
          subModuleTitles: [
            "- Definition of processing models",
            "- Synchronous Processing (Sync)",
            "- Asynchronous Processing (Async)",
            "- Example",
          ],
        },
        {
          title: "Benefits of Async Processing.",
          time: "14:00 - 14:30",
          subModuleTitles: [
            "- Reducing the time to wait.",
            "- Parallelism & Concurrency.",
            "- Failure isolation and system recovery.",
          ],
        },
        {
          title: "Message Queues.",
          time: "14:30 - 15:30",
          subModuleTitles: [
            "- Understanding Message Queues.",
            "- The Role of Message Queues in Async Processing.",
            "- Decoupled Communication.",
            "- Benefits of Decoupled Communication.",
            "- Reliability and Message Persistence.",
            "- Easier scalability.",
            "- Backpressure on services.",
          ],
        },
        {
          title: "Break",
          time: "15:30 - 16:00",
        },
      ],
    },
  ],
  [
    {
      title: "",
      modules: [
        {
          title: "RabbitMQ as a Message Broker.",
          time: "16:00 - 17:00",
          subModuleTitles: [
            "- RabbitMQ core components.",
            "- Installing the RabbitMQ library.",
            "- Hands-on learning by building small projects:",
            "- a. Hello World app",
            "- b. Distributed Task Queue",
            "- c. Implementing the PUB/SUB pattern",
            "- d. Routing messages and exploring RabbitMQ exchanges",
          ],
        },
        {
          title: "Introducing a problem to solve with RabbitMQ.",
          time: "17:00 - 17:30",
          subModuleTitles: [
            "- Distributed systems challenges.",
            "- Designing a solution to work on top of RabbitMQ infrastructure.",
            "- Implementing the solution",
            "- Alternatives to use",
          ],
        },
        {
          title: "Q&A Session.",
          time: "17:30 - 18:00",
        },
      ],
    },
    {
      title: "Session 3: October 29",
      modules: [
        {
          title: "Coding Session.",
          time: "13:30 - 18:00",
        },
      ],
    },
  ],
];
