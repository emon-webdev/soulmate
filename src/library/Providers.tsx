"use client";
import { store } from "@/redux/store";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React from "react";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
    </Provider>
  );
};

export default Providers;
