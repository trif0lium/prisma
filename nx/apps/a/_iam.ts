import { Service, Resource } from '@nx/iam';

export default () =>
  new Service('artifactRegistry', [
    new Resource('file', ['get', 'list']),
    new Resource('package', ['get', 'list']),
    new Resource('repository', [
      'downloadArtifact',
      'uploadArtifact',
      'get',
      'list',
    ]),
  ]);
