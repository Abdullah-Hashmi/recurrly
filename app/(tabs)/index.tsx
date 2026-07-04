import { Link } from "expo-router";
import { View } from "react-native";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">

            <Link href="/onboarding" className="mt-4 bg-primary text-white p-4">Go to onboarding</Link>
            <Link href="/sign-in" className="mt-4 bg-primary text-white p-4">Sign in</Link>
            <Link href="/sign-up" className="mt-4 bg-primary text-white p-4">Create account</Link>
            <Link href="/subscriptions/spotify" className="mt-4 bg-primary text-white p-4">Subscription Details</Link>
            <Link href={{
                pathname: "/subscriptions/[id]",
                params: {
                    id: "claude-max"
                }
            }} className="mt-4 bg-primary text-white p-4">Claude Max Subscription</Link>
        </View>
    );
}
