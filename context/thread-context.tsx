import React, { useEffect, useState } from "react";

import { Thread } from "@/types/threads";
import { generateThreads } from "@/utils/generate-dummy-data";

export const ThreadContext = React.createContext<Thread[]>([]);

export const ThreadProvdier = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    setThreads(generateThreads());
  }, []);

  return (
    <ThreadContext.Provider value={threads}>{children}</ThreadContext.Provider>
  );
};
