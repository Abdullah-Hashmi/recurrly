import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SubscriptionDetails = () => {
    // const params = useLocalSearchParams()
    // console.log(params)

    const {id} = useLocalSearchParams<{id: string}>();
    
    console.log("ID: ", id)

    
  return (
    <SafeAreaView>
      <Text>SubscriptionDetails {id}</Text>
      <Link href="/" >
        Go Back Home
      </Link>
    </SafeAreaView>
  )
}

export default SubscriptionDetails