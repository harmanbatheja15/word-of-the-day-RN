import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { Alert } from 'react-native';
import { fetchRandomWord } from '@/services/wordService';
import { WordWithMeta } from '@/types';
import {
  saveWordHistory,
  getWordHistory,
  clearWordHistory,
} from '@/utils/storage';

type WordContextType = {
  currentWord: WordWithMeta | null;
  wordHistory: WordWithMeta[];
  isLoading: boolean;
  error: string | null;
  fetchNewWord: () => Promise<void>;
  clearHistory: () => Promise<void>;
};

const WordContext = createContext<WordContextType | undefined>(undefined);

export function WordProvider({ children }: { children: ReactNode }) {
  const [currentWord, setCurrentWord] = useState<WordWithMeta | null>(null);
  const [wordHistory, setWordHistory] = useState<WordWithMeta[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load word history from storage on initial load
  useEffect(() => {
    loadWordHistory();
  }, []);

  const loadWordHistory = async () => {
    try {
      const history = await getWordHistory();
      setWordHistory(history);

      // Set the most recent word as current if history exists
      if (history.length > 0) {
        setCurrentWord(history[0]);
      }
    } catch (err) {
      console.error('Failed to load word history:', err);
      setError('Failed to load word history');
    }
  };

  const fetchNewWord = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const newWord = await fetchRandomWord();

      // Add unique ID and date to word
      const wordWithMeta: WordWithMeta = {
        ...newWord,
        id: Date.now().toString(),
        date: new Date(),
      };

      setCurrentWord(wordWithMeta);

      // Add to history and save
      const updatedHistory = [wordWithMeta, ...wordHistory];
      setWordHistory(updatedHistory);
      await saveWordHistory(updatedHistory);
    } catch (err) {
      console.error('Failed to fetch word:', err);
      setError('Failed to fetch a new word');
      Alert.alert(
        'Error',
        'Failed to fetch a new word. Please try again later.',
        [{ text: 'OK' }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = async () => {
    try {
      await clearWordHistory();
      setWordHistory([]);

      // Keep current word if it exists
      if (currentWord) {
        const currentWordOnly = [currentWord];
        setWordHistory(currentWordOnly);
        await saveWordHistory(currentWordOnly);
      }
    } catch (err) {
      console.error('Failed to clear history:', err);
      Alert.alert('Error', 'Failed to clear history. Please try again.', [
        { text: 'OK' },
      ]);
    }
  };

  return (
    <WordContext.Provider
      value={{
        currentWord,
        wordHistory,
        isLoading,
        error,
        fetchNewWord,
        clearHistory,
      }}
    >
      {children}
    </WordContext.Provider>
  );
}

export function useWordContext() {
  const context = useContext(WordContext);
  if (context === undefined) {
    throw new Error('useWordContext must be used within a WordProvider');
  }
  return context;
}
