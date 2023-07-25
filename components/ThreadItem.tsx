import { Pressable, StyleSheet, View, useColorScheme } from "react-native";
import { Image } from "expo-image";

import { Text } from "@/components/Themed";
import BottomIcons from "@/components/BottomIcons";
import PostFooter from "@/components/PostFooter";
import PostHeading from "@/components/PostHeading";
import PostLeftSide from "@/components/PostLeftSide";

import { Thread } from "@/types/threads";

interface TheradItemProps {
  thread: Thread;
}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function ThreadItem({ thread }: TheradItemProps): JSX.Element {
  return (
    <Pressable style={styles.container}>
      <PostLeftSide {...thread} />
      <View style={{ flexShrink: 1, gap: 6 }}>
        <PostHeading
          name={thread.author.name}
          verified={thread.author.verified}
          createdAt={thread.createdAt}
        />
        <Text>{thread.content}</Text>
        {thread.image && (
          <Image
            source={thread.image}
            style={{ width: "100%", minHeight: 300, borderRadius: 10 }}
            placeholder={blurhash}
            contentFit="cover"
            transition={500}
          />
        )}
        <BottomIcons />
        <PostFooter replies={thread.repliesCount} likes={thread.likesCount} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    paddingBottom: 18,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
