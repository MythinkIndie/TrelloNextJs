import { type ProjectCards as ProjectInfoCards} from "../types/projectCards"

export default function Card ({card}:{card: ProjectInfoCards }) {

    return (
        <div className='text-center align-center p-6 m-2 mt-4 border border-blue-500'>
            {card.title}
        </div>
    )
  
  }