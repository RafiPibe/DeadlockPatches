import { supabase } from './supabaseClient';
import { PatchNotes } from './types';

export async function getPatches(): Promise<PatchNotes[]> {
  const { data, error } = await supabase
    .from('patches')
    .select('*')
    .order('date', { ascending: false });
    
  if (error) throw new Error(error.message);
  return data || [];
}

export async function getPatchById(id: string): Promise<PatchNotes> {
  const { data, error } = await supabase
    .from('patches')
    .select('*')
    .eq('id', id)
    .single();
    
  if (error) throw new Error('Patch not found');
  return data;
}

export async function createPatch(patch: PatchNotes): Promise<PatchNotes> {
  const { data, error } = await supabase
    .from('patches')
    .upsert([patch])
    .select()
    .single();
    
  if (error) throw new Error(error.message);
  return data;
}

export async function updatePatch(patch: PatchNotes): Promise<PatchNotes> {
  const { data, error } = await supabase
    .from('patches')
    .update(patch)
    .eq('id', patch.id)
    .select()
    .single();
    
  if (error) throw new Error(error.message);
  return data;
}

export async function deletePatch(id: string): Promise<void> {
  const { error } = await supabase
    .from('patches')
    .delete()
    .eq('id', id);
    
  if (error) throw new Error(error.message);
}
