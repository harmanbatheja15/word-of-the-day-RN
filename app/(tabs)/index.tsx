import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWordContext } from '@/contexts/WordContext';
import { WordCard } from '@/components/WordCard';
import { RefreshCw } from 'lucide-react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export default function HomeScreen() {
  const { currentWord, fetchNewWord, isLoading } = useWordContext();
  const [refreshAnimation, setRefreshAnimation] = useState(false);

  useEffect(() => {
    if (!currentWord) {
      fetchNewWord();
    }
  }, [currentWord, fetchNewWord]);

  const handleNewWord = () => {
    setRefreshAnimation(true);
    fetchNewWord();
    setTimeout(() => setRefreshAnimation(false), 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Expand your vocabulary daily</Text>

        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#6A5ACD" />
            <Text style={styles.loadingText}>Finding a great word...</Text>
          </View>
        ) : currentWord ? (
          <Animated.View
            entering={FadeIn.duration(500)}
            exiting={FadeOut.duration(300)}
            style={styles.cardContainer}
          >
            <WordCard word={currentWord} />
          </Animated.View>
        ) : (
          <Text style={styles.errorText}>
            Unable to load word. Please try again.
          </Text>
        )}

        <TouchableOpacity
          style={styles.newWordButton}
          onPress={handleNewWord}
          disabled={isLoading}
        >
          <Animated.View
            style={[
              styles.iconContainer,
              refreshAnimation && styles.spinAnimation,
            ]}
          >
            <RefreshCw size={24} color="#fff" />
          </Animated.View>
          <Text style={styles.buttonText}>New Word</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 24,
    textAlign: 'center',
  },
  cardContainer: {
    width: '100%',
    maxWidth: 400,
    marginBottom: 32,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  loadingText: {
    marginTop: 16,
    color: '#64748b',
    fontSize: 16,
  },
  errorText: {
    color: '#ef4444',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  newWordButton: {
    backgroundColor: '#6A5ACD',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6A5ACD',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  iconContainer: {
    marginRight: 8,
  },
  spinAnimation: {
    transform: [{ rotate: '360deg' }],
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
