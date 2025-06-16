
import { StyleSheet, Text, View } from 'react-native';
import Button from '@/components/button';

export default function HomeScreen() {
// text-2xl is the size of the text, font-bold is the font weight, text-red-500 is the color of the text
  return (
    <View className='flex-1 p-4'>
      <Text className ='text-2xl font-bold text-white p-2'>Hello World</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
