import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const ChatRoomItem = ({chatRoom}) => {
  //const chatRoom = props.chatRoom;
  const user = chatRoom.users[1];

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />

      {/* if there is new message show messageBadge if not hen show null */}
      {chatRoom.newMessages ? (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      ) : null}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </View>
  );
};

export default ChatRoomItem;