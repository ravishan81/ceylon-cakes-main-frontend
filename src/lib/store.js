import { create } from 'zustand';
import { BASE_URL } from './config';

export const useGalleryStore = create((set) => ({
  galleryData: null,
  loading: false,
  error: null,
  fetchGallery: async (page = 1, limit = 100) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${BASE_URL}/gallery?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch gallery data');
      }
      const data = await response.json();
      set({ galleryData: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));
