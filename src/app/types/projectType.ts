import { type Database } from "./database";
import { type User } from "./userType";

type ProjectEntity = Database['public']['Tables']['projects']['Row']

export type Project = ProjectEntity & {user: User}