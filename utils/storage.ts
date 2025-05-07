import AsyncStorage from '@react-native-async-storage/async-storage';
import { WordWithMeta } from '@/types';

const WORD_HISTORY_KEY = 'word_history';

// Save word history to AsyncStorage
export async function saveWordHistory(
  wordHistory: WordWithMeta[]
): Promise<void> {
  try {
    const jsonValue = JSON.stringify(wordHistory);
    await AsyncStorage.setItem(WORD_HISTORY_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving word history:', error);
    throw error;
  }
}

// Get word history from AsyncStorage
export async function getWordHistory(): Promise<WordWithMeta[]> {
  try {
    const jsonValue = await AsyncStorage.getItem(WORD_HISTORY_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error getting word history:', error);
    return [];
  }
}

// Clear word history from AsyncStorage
export async function clearWordHistory(): Promise<void> {
  try {
    await AsyncStorage.removeItem(WORD_HISTORY_KEY);
  } catch (error) {
    console.error('Error clearing word history:', error);
    throw error;
  }
}
