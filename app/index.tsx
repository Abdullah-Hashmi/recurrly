import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind!
            </Text>
            <Link href="/onboarding" className="mt-4 bg-primary text-white p-4">Go to onboarding</Link>;
            <Link href="/sign-in" className="mt-4 bg-primary text-white p-4">Sign in</Link>;
            <Link href="/sign-up" className="mt-4 bg-primary text-white p-4">Create account</Link>
        </View>
    );
}
