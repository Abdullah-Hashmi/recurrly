import { Link } from "expo-router";
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  return (
    <SafeAreaView>
      <Text>Sign In</Text>
        <Link href="/sign-up" className="mt-4 bg-primary text-white p-4">Create account</Link>
        <Link href="/" className="mt-4 bg-primary text-white p-4">Go Back Home</Link>
    </SafeAreaView>
  );
};

export default SignIn;