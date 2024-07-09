import { Database } from "../types/database"
import Table from "./table"
import { type ProjectTables as ProjectInfoEntity } from "../types/projectAtType"
import { type ProjectCards as ProjectInfoCards} from "../types/projectCards"

export default function TablesList ({tablesinfo, cards}: {tablesinfo: ProjectInfoEntity[] | null, cards: ProjectInfoCards[] | null}) {

    return (
  
        <pre className="flex m-4">
        {
          tablesinfo?.map(table => {
            const {
              id,
              name: title,
              projectRelation
            } = table
            return (<Table key={id} tableid={id} tableName={title} cards={cards}/>)
          })
        }
        </pre>
  
    )
  }