import { writable, type Writable } from 'svelte/store';

export const PathHome: string     = '/';
export const PathAbout: string  = '/about';
export const PathServices: string = '/services';
export const PathContact: string   = '/contact';

export type PathNames = (
  '/'
  | '/about'
  | '/services'
  | '/contact'
) | string;

export const CURRENT_PATH: Writable<PathNames|string> = writable(PathHome);