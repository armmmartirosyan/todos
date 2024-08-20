import { QueryClient, QueryClientProvider } from "react-query";
import { OnlyChildrenProps } from "../types";

export function ReactQueryProvider({ children }: OnlyChildrenProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
