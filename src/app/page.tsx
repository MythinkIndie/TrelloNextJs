import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { AuthButtonServer } from '@/app/components/authform/auth-button-server';
import { redirect } from 'next/navigation';
import ProjectList from './components/project/project-list';
import { type Database } from './types/database';
import { type Project as ProjectEntity } from "./types/projectType"

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  const projectAt = cookies().get('projectAt');

  if (session === null) {

    redirect('/login');

  }

  if (projectAt !== undefined) {

    redirect('/projects');

  }

  const { data: projects } : {data: ProjectEntity[] | null} = await supabase.from('projects').select('*, users(*)');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white">
      <section className='min-w-[600px] mx-auto border-l border-r border-white/20 min-h-screen'>
        <AuthButtonServer />
        <ProjectList projects={projects} />
      </section>
    </main>
  )
}
