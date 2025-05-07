import { View, Text, StyleSheet } from 'react-native';
import { WordWithMeta } from '@/types';
import { formatDate } from '@/utils/dateUtils';

type HistoryWordCardProps = {
  word: WordWithMeta;
};

export function HistoryWordCard({ word }: HistoryWordCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.wordText}>{word.word}</Text>
        <Text style={styles.dateText}>{formatDate(word.date)}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.partOfSpeechContainer}>
          <Text style={styles.partOfSpeech}>{word.partOfSpeech}</Text>
        </View>

        <Text style={styles.definitionText}>{word.definition}</Text>

        {word.example && (
          <Text style={styles.exampleText}>"{word.example}"</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#EDE9FF',
  },
  wordText: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#6A5ACD',
  },
  dateText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
  },
  detailsContainer: {
    padding: 16,
  },
  partOfSpeechContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  partOfSpeech: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#6A5ACD',
    backgroundColor: '#EDE9FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  phonetic: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    marginLeft: 8,
  },
  definitionText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#334155',
    marginBottom: 8,
    lineHeight: 20,
  },
  exampleText: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    fontStyle: 'italic',
    lineHeight: 18,
  },
});
