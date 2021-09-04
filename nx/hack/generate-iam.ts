import { ProjectType, readWorkspaceJson } from '@nrwl/workspace';
import * as fs from 'fs';
import * as path from 'path';

const workspace = readWorkspaceJson();
const apps = Object.entries(workspace.projects)
  .map(([_, prj]) => prj)
  .filter((prj) => prj.projectType === ProjectType.Application);
const filePaths = apps
  .map((app) => app.root)
  .map((r) => path.join(__dirname, '../', r, 'iam.yml'));
console.log(filePaths);
