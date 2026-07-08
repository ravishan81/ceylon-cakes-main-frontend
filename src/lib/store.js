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

export const useHomePageStore = create((set) => ({
  heroSlides: [],
  loading: false,
  error: null,
  fetchHeroSlides: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`${BASE_URL}/home-page`);
      if (!response.ok) {
        throw new Error('Failed to fetch home page images');
      }
      const json = await response.json();
      // Extract image1–image4 from the response, filtering out null values
      const { image1, image2, image3, image4 } = json.data || {};
      const slides = [image1, image2, image3, image4].filter(Boolean);
      set({ heroSlides: slides, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));
