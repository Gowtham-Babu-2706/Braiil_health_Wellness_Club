import { createClient } from "@supabase/supabase-js";

// Initialize the Supabase client
// We use import.meta.env for Vite projects.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://placeholder-project-id.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Helper function to fetch images from a specified Supabase table.
 * Assumes your table has an 'image_url' or 's3Url' column pointing to your AWS S3 bucket.
 * 
 * @param {string} tableName - The name of the table (e.g., 'gallery_images', 'hero_section')
 * @returns {Promise<Array>} - Returns an array of data from the table
 */
export const fetchSectionData = async (tableName) => {
  try {
    const { data, error } = await supabase.from(tableName).select("*");
    
    if (error) {
      console.error(`Error fetching from ${tableName}:`, error.message);
      return [];
    }
    
    return data || [];
  } catch (err) {
    console.error("Supabase client error:", err);
    return [];
  }
};
