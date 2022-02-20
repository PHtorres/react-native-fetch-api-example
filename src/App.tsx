import React from "react";
import { Alert } from "./components/Alert";
import { AppContainer } from "./components/AppContainer";
import { RepositoriesScreen } from "./screens/Repositories";

export const App = () => {
  return (
    <AppContainer>
      <RepositoriesScreen />
      <Alert />
    </AppContainer>
  )
}