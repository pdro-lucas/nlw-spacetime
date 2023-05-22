import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import bgBlur from "./src/assets/bg-blur.png";
import NLWLogo from "./src/assets/nlw-logo.svg";
import Stripes from "./src/assets/stripes.svg";

import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import * as SecureStore from "expo-secure-store";
import { styled } from "nativewind";
import { useEffect } from "react";
import { api } from "./src/lib/api";

const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/0c3492dd852929aa5bb4",
};

const StyledStripes = styled(Stripes);

export default function App() {
  const [request, response, signinWithGithub] = useAuthRequest(
    {
      clientId: "0c3492dd852929aa5bb4",
      scopes: ["identity"],
      redirectUri: makeRedirectUri({
        scheme: "spacetime",
      }),
    },
    discovery
  );

  useEffect(() => {
    // console.log(makeRedirectUri({ scheme: "spacetime" }));

    if (response?.type === "success") {
      const { code } = response.params;

      api
        .post("/register", {
          code,
        })
        .then((response) => {
          const { token } = response.data;

          SecureStore.setItemAsync("token", token);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [response]);

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <ImageBackground
      source={bgBlur}
      className="relative flex-1 items-center bg-gray-900 px-12 py-10"
      imageStyle={{
        position: "absolute",
        left: "-100%",
      }}
    >
      <StyledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <NLWLogo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
          onPress={() => signinWithGithub()}
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
