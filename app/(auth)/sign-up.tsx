import { View, Text } from 'react-native';
import {Link} from "expo-router";

const SignUp = () => {
    return (
        <View>
            <Text>Sign Up</Text>
            <Link href="/sign-in" className="mt-4 bg-primary text-white p-4">Sign in</Link>
        </View>
    );
};

export default SignUp;