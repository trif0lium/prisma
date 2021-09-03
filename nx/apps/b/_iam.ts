import { Service, Resource } from '@nx/iam';

export default () =>
  new Service('container', [
    new Resource('apiService', ['create', 'delete', 'get', 'list']),
    new Resource('backendConfig', ['create', 'delete', 'get', 'list']),
    new Resource('cluster', ['create', 'delete', 'get', 'list']),
    new Resource('deployment', [
      'create',
      'delete',
      'get',
      'list',
      'getScale',
      'getStatus',
    ]),
  ]);
