export type ProcessStep = {
  no: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    no: "01",
    title: "Discover",
    description:
      "We get close to the business — what it does, who it's for and why it deserves to be chosen. No creative before clarity.",
  },
  {
    no: "02",
    title: "Direction",
    description:
      "We set a clear creative direction and align on it early, so the work has a point of view before a single pixel is placed.",
  },
  {
    no: "03",
    title: "Design",
    description:
      "We craft the identity, site or content to a high finish — every detail considered, nothing left to chance.",
  },
  {
    no: "04",
    title: "Deliver",
    description:
      "We ship clean, organised, ready-to-use assets — files, guidelines and everything your team needs to run with it.",
  },
  {
    no: "05",
    title: "Grow",
    description:
      "We stay close to keep the work sharp as the business moves — iterating, extending and improving over time.",
  },
];
