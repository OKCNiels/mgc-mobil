
import { Text, SafeAreaView } from 'react-native';
import { ThemeProvider } from "./src/context";

export default function App() {
  return (
    <ThemeProvider>

      <SafeAreaView>
        <Text>APLICATIVO DE MGC!</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
