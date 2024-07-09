import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { type Database } from '../types/database';
import { type ProjectTables as ProjectInfoTables } from "../types/projectAtType"
import { type ProjectCards as ProjectInfoCards} from "../types/projectCards"
import TablesList from '../components/tables-list';

export default async function InsideProject () {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  const projectAt = cookies().get('projectAt');

  if (session === null) {

    redirect('/login');

  }

  if (projectAt === undefined) {

    redirect('/');

  }
  
  const { data: infoProject } : {data: ProjectInfoTables[] | null} = await supabase.from('infoproyect').select('*, projects(*, users(*))').eq('projectRelation', projectAt.value);
  const { data: infoCards } : {data: ProjectInfoCards[] | null} = await supabase.from('cardsOfTables').select('*').eq('OfProject', projectAt.value);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white">
      <section className='min-w-full mx-auto border-l border-r border-white/20 min-h-screen'>
        <nav className='bg-gray-200 py-2 text-lg text-black px-8 font-bold flex justify-between'>
          <span>Do list of tables</span>
          <span>Return</span>
        </nav>
        <div className='flex'>
          <TablesList tablesinfo={infoProject} cards={infoCards}/>
        </div>
      </section>
      <section className='min-w-full mx-auto border-l border-r border-white/20 min-h-screen hidden'>
        
      </section>
    </main>
  )
}
