import { Link, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import NewPaymentCardScreen from "./screens/payment-cards/NewPaymentCardScreen";
import PaymentCardsListScreen from "./screens/payment-cards/PaymentCardsListScreen";
import SignIn from "./screens/auth/SignIn";
import SignUp from "./screens/auth/SignUp";

const Stack = createNativeStackNavigator();
function StackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitleAlign: "center" }}
      initialRouteName="SignIn"
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "WeGoWhere" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "WeGoWhere" }}
      />
      <Stack.Screen
        name="PaymentCardsList"
        component={PaymentCardsListScreen}
        options={{
          title: "Cards",
          headerRight: () => (
            <Link to="/NewPaymentCard">
              <Feather name="plus" size={28} color="black" />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="NewPaymentCard"
        component={NewPaymentCardScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}
