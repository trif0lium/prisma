export class Service {
  name: string;
  resources: Resource[];

  constructor(name: string, resources: Resource[]) {
    this.name = name;
    this.resources = resources;
  }
}

export class Resource {
  name: string;
  capabilities: string[];

  constructor(name: string, capabilities: string[]) {
    this.name = name;
    this.capabilities = capabilities;
  }
}

// export class Capability {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
