
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
// text-2xl is the size of the text, font-bold is the font weight, text-red-500 is the color of the text
  return (
    <View style={styles.container}>
      <Text className ='text-2xl font-bold text-red-500 p-2'>Feed</Text> 
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
