import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import MyScreen from "../screens/MyScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChatListScreen from "../screens/ChatListScreen";
import ChatScreen from "../screens/ChatScreen";
import NotificationScreen from "../screens/NotificationScreen";
import SearchScreen from "../screens/SearchScreen";
import FriendScreen from "../screens/FriendScreen";
import MenuScreen from "../screens/MenuScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {},
});

const MainNavigator = createStackNavigator(
  {
    Home: MyScreen,
    Friend: FriendScreen,
    Profile: ProfileScreen,
    ChatList: ChatListScreen,
    Chat: ChatScreen,
    Notification: NotificationScreen,
    Search: SearchScreen,
    Menu: MenuScreen,
  },
  config
);
MainNavigator.path = "";

export default MainNavigator;
