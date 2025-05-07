import { View, Text, StyleSheet } from 'react-native';
import { WordWithMeta } from '@/types';
import { formatDate } from '@/utils/dateUtils';
import { BookOpen } from 'lucide-react-native';

type WordCardProps = {
  word: WordWithMeta;
};

export function WordCard({ word }: WordCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        <View style={styles.bookIconContainer}>
          <BookOpen size={20} color="#6A5ACD" />
        </View>
        <Text style={styles.dateText}>{formatDate(word.date)}</Text>
      </View>

      <Text style={styles.wordText}>{word.word}</Text>

      <View style={styles.pronunciationContainer}>
        <Text style={styles.partOfSpeech}>{word.partOfSpeech}</Text>
      </View>

      <View style={styles.definitionContainer}>
        <Text style={styles.definitionLabel}>Definition</Text>
        <Text style={styles.definitionText}>{word.definition}</Text>
      </View>

      {word.example && (
        <View style={styles.exampleContainer}>
          <Text style={styles.exampleLabel}>Example</Text>
          <Text style={styles.exampleText}>"{word.example}"</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  bookIconContainer: {
    backgroundColor: '#EDE9FF',
    padding: 8,
    borderRadius: 8,
  },
  dateText: {
    color: '#94a3b8',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  wordText: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  pronunciationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  partOfSpeech: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6A5ACD',
    backgroundColor: '#EDE9FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  phonetic: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    marginLeft: 8,
  },
  definitionContainer: {
    marginBottom: 16,
  },
  definitionLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#475569',
    marginBottom: 4,
  },
  definitionText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#334155',
    lineHeight: 24,
  },
  exampleContainer: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  exampleLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#475569',
    marginBottom: 4,
  },
  exampleText: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    fontStyle: 'italic',
    lineHeight: 22,
  },
});
