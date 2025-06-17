import { useCallback } from 'react';
import { useQRCodes, createQRCode, updateQRCode, deleteQRCode, optimisticQRCodeUpdate, type QRCode, type CreateQRCodeData, type UpdateQRCodeData } from '../api/qr-code-service';

export function useQRCode() {
  const { data: qrCodes, isLoading, isError, mutate } = useQRCodes();

  const create = useCallback(async (data: CreateQRCodeData) => {
    try {
      const newQRCode = await createQRCode(data);
      await mutate([...(qrCodes || []), newQRCode]);
      return newQRCode;
    } catch (error) {
      console.error('Error creating QR code:', error);
      throw error;
    }
  }, [qrCodes, mutate]);

  const update = useCallback(async (id: string, data: UpdateQRCodeData) => {
    try {
      return await optimisticQRCodeUpdate(id, data, mutate);
    } catch (error) {
      console.error('Error updating QR code:', error);
      throw error;
    }
  }, [mutate]);

  const remove = useCallback(async (id: string) => {
    try {
      // Optimistically remove from the list
      await mutate(
        (currentData: QRCode[] | undefined) => 
          currentData?.filter(qr => qr.id !== id),
        false
      );
      
      await deleteQRCode(id);
      await mutate();
    } catch (error) {
      console.error('Error deleting QR code:', error);
      await mutate(); // Revalidate on error
      throw error;
    }
  }, [mutate]);

  return {
    qrCodes,
    isLoading,
    isError,
    create,
    update,
    remove,
  };
} 