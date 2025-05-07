import { Tabs } from 'expo-router';
import { Book, History } from 'lucide-react-native';
import { WordProvider } from '@/contexts/WordContext';

export default function TabLayout() {
  return (
    <WordProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#6A5ACD',
          tabBarInactiveTintColor: '#94a3b8',
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: '#e2e8f0',
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          headerStyle: {
            backgroundColor: '#6A5ACD',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Word of the Day',
            tabBarLabel: 'Today',
            tabBarIcon: ({ color, size }) => (
              <Book size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: 'Word History',
            tabBarLabel: 'History',
            tabBarIcon: ({ color, size }) => (
              <History size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </WordProvider>
  );
}