import React from "react"
import { Route, Switch } from "react-router"
import { Chats } from "./Component/Chats"
import { ChatScreen } from "./Component/ChatScreen"
import { Header } from "./Component/Header"
import { SwipeButton } from "./Component/SwipeButton"
import { TinderCards } from "./Component/TinderCard"

function App() {
  return (
    <div>
        <Switch>
            <Route path="/message/:person">
                <Header backButton="/message" />
                <ChatScreen />
            </Route>
            <Route path="/" exact>
                <Header />
                <TinderCards />
                <SwipeButton />
            </Route>
            <Route path="/message">
                <Header backButton="/"/>
                <Chats />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
