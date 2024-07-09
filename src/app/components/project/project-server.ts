'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Project from './project';

export default async function ProjectServer(id: string) {

  try {
  const myCookies = cookies();

  myCookies.set('projectAt', id);
  redirect('/');
  } catch (err) {

    console.log(err)
  }

}