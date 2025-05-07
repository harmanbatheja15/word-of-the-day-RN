import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWordContext } from '@/contexts/WordContext';
import { HistoryWordCard } from '@/components/HistoryWordCard';
import { Trash2 } from 'lucide-react-native';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

export default function HistoryScreen() {
  const { wordHistory, clearHistory } = useWordContext();

  const handleClearHistory = () => {
    Alert.alert(
      'Clear History',
      'Are you sure you want to clear all word history?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          onPress: () => clearHistory(),
          style: 'destructive',
        },
      ]
    );
  };

  const renderEmptyHistory = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>No words yet</Text>
      <Text style={styles.emptySubtitle}>
        Words you view will appear here in your history
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.historyCount}>
          {wordHistory?.length} {wordHistory?.length === 1 ? 'word' : 'words'}{' '}
          in history
        </Text>
        {wordHistory?.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearHistory}
          >
            <Trash2 size={18} color="#ef4444" />
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={wordHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Animated.View
            entering={FadeIn.duration(400)}
            exiting={FadeOut.duration(300)}
            layout={Layout.springify()}
            style={styles.cardContainer}
          >
            <HistoryWordCard word={item} />
          </Animated.View>
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={renderEmptyHistory}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  historyCount: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  clearButtonText: {
    color: '#ef4444',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
  listContent: {
    padding: 16,
    paddingBottom: 40,
  },
  cardContainer: {
    marginBottom: 16,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});
