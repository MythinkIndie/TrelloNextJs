import { Database } from "../../types/database"
import Project from "./project"
import { type Project as ProjectEntity } from "../../types/projectType"

export default function ProjectList ({projects}:{projects: ProjectEntity[] | null}) {

    return (
  
        <pre>
        {
          
          projects?.map(project => {
            const {
              id,
              user_id,
              text: title
            } = project
            return (<Project key={id} projectName={title} projectid={id} />)
          })
        }
        </pre>
  
    )
  }