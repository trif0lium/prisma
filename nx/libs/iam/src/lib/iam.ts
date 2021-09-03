export class Resource {
  name: string;
  roles: Role[];

  constructor(name: string, roles: Role[]) {
    this.name = name;
    this.roles = roles;
  }
}

export class Role {
  name: string;
  description?: string;
  capabilities: Capability[];
  constructor(name: string, capabilities: Capability[], description?: string) {
    this.name = name;
    this.capabilities = capabilities;
    this.description = description;
  }
}

export class Capability {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
