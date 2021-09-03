export class Service {
  name: string;
  resources: Resource[];
}

export class Resource {
  name: string;
  capabilities: Capability[];

  constructor(name: string, capabilities: Capability[]) {
    this.name = name;
    this.capabilities = capabilities;
  }
}

export class Capability {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
