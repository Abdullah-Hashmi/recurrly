import { View, Text } from 'react-native';
import {Link} from "expo-router";

const SignIn = () => {
  return (
    <View>
      <Text>Sign In</Text>
        <Link href="/sign-up" className="mt-4 bg-primary text-white p-4">Create account</Link>
    </View>
  );
};

export default SignIn;