import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Lottie from "lottie-react-native";
import { useRef, useContext } from "react";

import { ThreadContext } from "@/context/thread-context";
import ThreadItem from "@/components/ThreadItem";

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null);
  const threads = useContext(ThreadContext);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 5 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            tintColor="transparent"
            onRefresh={() => animationRef.current?.play()}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require("@/lottie-animations/threads.json")}
          loop={false}
          autoPlay
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />
        {threads.map((thread) => (
          <ThreadItem key={thread.id} thread={thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
