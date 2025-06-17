import { useData, createRecord, updateRecord, deleteRecord, optimisticUpdate } from './supabase-service';
import { handleSupabaseError } from '../utils/api-error';
import { PostgrestError } from '@supabase/supabase-js';

export interface QRCode {
  id: string;
  title: string;
  url: string;
  design?: {
    foregroundColor: string;
    backgroundColor: string;
    logo?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CreateQRCodeData {
  title: string;
  url: string;
  design?: QRCode['design'];
}

export type UpdateQRCodeData = Partial<CreateQRCodeData>;

// Hook for fetching QR codes
export function useQRCodes() {
  return useData<QRCode>('qr_codes');
}

// Create a new QR code
export const createQRCode = async (data: CreateQRCodeData) => {
  try {
    return await createRecord<QRCode>('qr_codes', {
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    handleSupabaseError(error as PostgrestError);
  }
};

// Update an existing QR code
export const updateQRCode = async (id: string, data: UpdateQRCodeData) => {
  try {
    return await updateRecord<QRCode>('qr_codes', id, {
      ...data,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    handleSupabaseError(error as PostgrestError);
  }
};

// Delete a QR code
export const deleteQRCode = async (id: string) => {
  try {
    return await deleteRecord('qr_codes', id);
  } catch (error) {
    handleSupabaseError(error as PostgrestError);
  }
};

// Optimistic update for QR codes
export const optimisticQRCodeUpdate = async (
  id: string,
  data: UpdateQRCodeData,
  mutate: (data: QRCode[] | undefined, shouldRevalidate?: boolean) => Promise<QRCode[] | undefined>
) => {
  try {
    return await optimisticUpdate<QRCode>('qr_codes', id, {
      ...data,
      updatedAt: new Date().toISOString(),
    }, mutate);
  } catch (error) {
    handleSupabaseError(error as PostgrestError);
  }
};