export const APP_TEXT = {
  title: "Game Of Secrets",
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

export const TIMELINE_DATA: TimelineData[] = [
  {
    title: "Day 1: Introduction and First Iterations",
    modules: [
      {
        title: "Introduction to Cryptography",
        time: "13:30 - 14:30",
        subModuleTitles: [
          "-What is cryptography?",
          "-Why is cryptography important? (Web 3.0, ...)",
          "-Other uses of cryptography (Git, P2P, ...)",
          "-Quick Demonstrations: SSH, password generation, ...",
        ],
      },
      {
        title: "First Iteration - Everything is monitored by a bot.",
        time: "14:30 - 15:30",
        subModuleTitles: [
          "-Clear communication.",
          "-Common secret sharing.",
          "-Introduction to HMAC for authentication.",
          "-Role assignment by the bot.",
          "-Introduction to symmetric encryption (AES).",
          "-Full execution of the first version of the game",
        ],
      },
      {
        title: "Break",
        time: "15:30 - 16:00",
      },
      {
        title: "Second Iteration - Less trust in the platform.",
        time: "16:00 - 17:30",
        subModuleTitles: [
          "-Introduction to asymmetric schemes (RSA).",
          "-Message signing and verification.",
          "-Introduction to certification.",
        ],
      },
      {
        title: "Discussion, questions and answers.",
        time: "17:30 - 18:00",
      },
    ],
  },
  {
    title: "Day 2: Advanced Iterations and Practical Game",
    modules: [
      {
        title: "Quick revision of the previous day.",
        time: "14:00 - 15:30",
      },
      {
        title: "Third Iteration - Less trust in the bot.",
        time: "14:00 - 15:30",
        subModuleTitles: [
          "-Creation of secret identities.",
          "-Multi-party Coin Tossing for random role assignment.",
          "-Introduction to hybrid encryption.",
        ],
      },
      {
        title: "Break",
        time: "15:30 - 16:00",
      },
      {
        title: "Fourth Iteration - Addition of the seer.",
        time: "16:00 - 17:30",
        subModuleTitles: [
          "-Introduction to hash-based signing.",
          "-Ephemeral keys for communication between the wolves.",
          "-Multi Part Oblivious Transfer (1-n) for the seer.",
          "-Full execution of the final version of the game",
        ],
      },
      {
        title: "Discussion, questions, answers",
        time: "17:30 - 18:00",
        subModuleTitles: [
          "-Lead into the Next Session: develop a deployable version on private blockchains (with smart contract)",
        ],
      },
    ],
  },
];
