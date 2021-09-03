import { readWorkspaceJson } from '@nrwl/workspace';

export function generatePermissionEnum() {
  const projects = readWorkspaceJson().projects;
  console.log(projects);
}
