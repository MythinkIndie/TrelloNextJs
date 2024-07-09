'use client'

import ProjectServer from "./project-server"

export default function Project ({projectName, projectid}:{projectName: string, projectid: string}) {

  return (

    <button onClick={() => ProjectServer(projectid)}>
      <div className='text-center align-center p-6 border border-blue-500'>
        {projectName}
      </div>
    </button>

  )

}