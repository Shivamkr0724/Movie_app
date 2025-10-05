import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import {icons} from "@/constants/icons";
import {images} from "@/constants/images";
import {func} from "ts-interface-checker";

const Profile = () => {
    const handleLogin = () => {};
    return (
        <SafeAreaView className="bg-dark-200 h-full">
            <ScrollView
                contentContainerStyle={{
                    height: "100%",
                }}
            >
                <View className="flex-1 justify-center items-center mt-6">
                    <Image
                        source={images.loginbg}
                        className="absolute w-full z-0"
                        resizeMode="contain"
                    />
                </View>


                <View className="flex-1 top-0">
                    <Text className="text-base text-center uppercase font-rubik text-white">
                        Welcome To Film-Flex
                    </Text>

                    <Text className="text-3xl font-rubik-bold text-white text-center mt-10">
                        🎬 Find it. Know it. Save it. {"\n"}
                        <Text className="text-white">Your movies, your way.</Text>
                    </Text>

                    <Text className="text-lg font-rubik text-white text-center mt-8">
                        Login to Film-Flex with Google
                    </Text>

                    <TouchableOpacity
                        onPress={handleLogin}
                        className="bg-white shadow-md shadow-zinc-300 rounded-full w-4/5 ml-10 py-4 mt-5"
                    >
                        <View className="flex flex-row items-center justify-center">
                            <Image
                                source={icons.google}
                                className="w-5 h-5"
                                resizeMode="contain"
                            />
                            <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                                Continue with Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Profile
