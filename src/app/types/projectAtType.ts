import { type Database } from "./database";
import { type Project } from "./projectType";

type ProjectInfoTables = Database['public']['Tables']['infoproyect']['Row']

export type ProjectTables = ProjectInfoTables & {project: Project}