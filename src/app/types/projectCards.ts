import { type Database } from "./database";
import { type Project } from "./projectType";

type ProjectCardsInfo = Database['public']['Tables']['cardsOfTables']['Row']

export type ProjectCards = ProjectCardsInfo & {project: Project}