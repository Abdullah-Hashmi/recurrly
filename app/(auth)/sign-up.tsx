import { View, Text } from 'react-native';
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

const SignUp = () => {
    return (
        <SafeAreaView>
            <Text>Sign Up</Text>
            <Link href="/sign-in" className="mt-4 bg-primary text-white p-4">Sign in</Link>
        </SafeAreaView>
    );
};

export default SignUp;