import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { qrCodeService, QRCode, QRCodeInsert, QRCodeUpdate } from '@/lib/api'

// Query keys for React Query
export const QR_CODES_QUERY_KEY = 'qr-codes'
export const QR_CODE_QUERY_KEY = 'qr-code'

/**
 * Hook for fetching all QR codes
 */
export function useQRCodes() {
  return useQuery({
    queryKey: [QR_CODES_QUERY_KEY],
    queryFn: () => qrCodeService.getQRCodes(),
  })
}

/**
 * Hook for fetching a single QR code by ID
 */
export function useQRCode(id: string) {
  return useQuery({
    queryKey: [QR_CODE_QUERY_KEY, id],
    queryFn: () => qrCodeService.getQRCode(id),
    enabled: !!id, // Only run the query if an ID is provided
  })
}

/**
 * Hook for creating a new QR code with optimistic updates
 */
export function useCreateQRCode() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (newQRCode: QRCodeInsert) => qrCodeService.createQRCode(newQRCode),
    onSuccess: (data) => {
      // Update the QR codes list query cache
      queryClient.invalidateQueries({ queryKey: [QR_CODES_QUERY_KEY] })
    },
  })
}

/**
 * Hook for updating a QR code with optimistic updates
 */
export function useUpdateQRCode() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: QRCodeUpdate }) => 
      qrCodeService.updateQRCode(id, updates),
    onMutate: async ({ id, updates }) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: [QR_CODE_QUERY_KEY, id] })

      // Snapshot the previous value
      const previousQRCode = queryClient.getQueryData<QRCode>([QR_CODE_QUERY_KEY, id])

      // Optimistically update the cache
      if (previousQRCode) {
        queryClient.setQueryData<QRCode>([QR_CODE_QUERY_KEY, id], {
          ...previousQRCode,
          ...updates,
        })
      }

      return { previousQRCode }
    },
    onError: (err, { id }, context) => {
      // If the mutation fails, roll back to the previous value
      if (context?.previousQRCode) {
        queryClient.setQueryData<QRCode>(
          [QR_CODE_QUERY_KEY, id],
          context.previousQRCode
        )
      }
    },
    onSuccess: (data) => {
      // Update the QR codes list query cache
      queryClient.invalidateQueries({ queryKey: [QR_CODES_QUERY_KEY] })
    },
  })
}

/**
 * Hook for deleting a QR code with optimistic updates
 */
export function useDeleteQRCode() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => qrCodeService.deleteQRCode(id),
    onMutate: async (id) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: [QR_CODES_QUERY_KEY] })

      // Snapshot the previous value
      const previousQRCodes = queryClient.getQueryData<QRCode[]>([QR_CODES_QUERY_KEY])

      // Optimistically update the cache
      if (previousQRCodes) {
        queryClient.setQueryData<QRCode[]>(
          [QR_CODES_QUERY_KEY],
          previousQRCodes.filter((qrCode) => qrCode.id !== id)
        )
      }

      return { previousQRCodes }
    },
    onError: (err, id, context) => {
      // If the mutation fails, roll back to the previous value
      if (context?.previousQRCodes) {
        queryClient.setQueryData<QRCode[]>(
          [QR_CODES_QUERY_KEY],
          context.previousQRCodes
        )
      }
    },
    onSuccess: () => {
      // Invalidate the QR codes list query cache
      queryClient.invalidateQueries({ queryKey: [QR_CODES_QUERY_KEY] })
    },
  })
}