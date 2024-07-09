import { type ProjectCards as ProjectInfoCards} from "../types/projectCards"
import Card from "./card"

export default function Table ({tableName, tableid, cards}:{tableName: string, tableid: string, cards: ProjectInfoCards[] | null}) {

  return (

      <div className='text-center align-center p-6 border border-blue-500 m-2'>
        {tableName}
        {
          cards?.map(card => {
            if (card.exists_in_table == tableid) {
              return (
                <Card card={card}/>
              )
            }
          })
        }
      </div>

  )

}