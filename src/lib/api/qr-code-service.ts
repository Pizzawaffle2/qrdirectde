import { supabase, Tables, InsertTables, UpdateTables } from './supabase-client'

// Type aliases for better readability
export type QRCode = Tables<'qr_codes'>
export type QRCodeInsert = InsertTables<'qr_codes'>
export type QRCodeUpdate = UpdateTables<'qr_codes'>

/**
 * Service for QR code operations
 * 
 * This service provides functions for CRUD operations on QR codes using the Supabase client.
 * It abstracts away the details of the Supabase API and provides a clean interface for the application.
 */
export const qrCodeService = {
  /**
   * Get all QR codes for the current user
   */
  async getQRCodes(): Promise<QRCode[]> {
    const { data, error } = await supabase
      .from('qr_codes')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching QR codes:', error)
      throw new Error(error.message)
    }

    return data || []
  },

  /**
   * Get a single QR code by ID
   */
  async getQRCode(id: string): Promise<QRCode | null> {
    const { data, error } = await supabase
      .from('qr_codes')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error(`Error fetching QR code with ID ${id}:`, error)
      throw new Error(error.message)
    }

    return data
  },

  /**
   * Create a new QR code
   */
  async createQRCode(qrCode: QRCodeInsert): Promise<QRCode> {
    const { data, error } = await supabase
      .from('qr_codes')
      .insert(qrCode)
      .select()
      .single()

    if (error) {
      console.error('Error creating QR code:', error)
      throw new Error(error.message)
    }

    return data
  },

  /**
   * Update an existing QR code
   */
  async updateQRCode(id: string, updates: QRCodeUpdate): Promise<QRCode> {
    const { data, error } = await supabase
      .from('qr_codes')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error(`Error updating QR code with ID ${id}:`, error)
      throw new Error(error.message)
    }

    return data
  },

  /**
   * Delete a QR code
   */
  async deleteQRCode(id: string): Promise<void> {
    const { error } = await supabase
      .from('qr_codes')
      .delete()
      .eq('id', id)

    if (error) {
      console.error(`Error deleting QR code with ID ${id}:`, error)
      throw new Error(error.message)
    }
  }
}