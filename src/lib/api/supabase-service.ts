import { createClient } from '@supabase/supabase-js';
import useSWR from 'swr';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Generic fetcher function for SWR
const fetcher = async (url: string) => {
  const { data, error } = await supabase.from(url).select('*');
  if (error) throw error;
  return data;
};

// Generic hook for fetching data with SWR
export function useData<T>(tableName: string) {
  const { data, error, mutate } = useSWR<T[]>(tableName, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

// Generic CRUD operations
export const createRecord = async <T>(tableName: string, data: Partial<T>) => {
  const { data: result, error } = await supabase
    .from(tableName)
    .insert(data)
    .select()
    .single();

  if (error) throw error;
  return result;
};

export const updateRecord = async <T>(
  tableName: string,
  id: string,
  data: Partial<T>
) => {
  const { data: result, error } = await supabase
    .from(tableName)
    .update(data)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return result;
};

export const deleteRecord = async (tableName: string, id: string) => {
  const { error } = await supabase.from(tableName).delete().eq('id', id);
  if (error) throw error;
};

// Optimistic update helper
export const optimisticUpdate = async <T>(
  tableName: string,
  id: string,
  data: Partial<T>,
  mutate: (data: any, shouldRevalidate?: boolean) => Promise<any>
) => {
  // Optimistically update the local data
  await mutate(
    async (currentData: T[]) => {
      return currentData.map((item: any) =>
        item.id === id ? { ...item, ...data } : item
      );
    },
    false // Don't revalidate immediately
  );

  try {
    // Perform the actual update
    const result = await updateRecord(tableName, id, data);
    // Revalidate to ensure consistency
    await mutate();
    return result;
  } catch (error) {
    // Revert optimistic update on error
    await mutate();
    throw error;
  }
}; 