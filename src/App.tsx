import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CommunityPage from "@/pages/community-page";
import { Toaster } from "@/components/ui/toaster";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* React query devtool for debugging */}
      <ReactQueryDevtools initialIsOpen={false} />

      {/* Toaster for notifications */}
      <Toaster />

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <CommunityPage />
      </main>
    </QueryClientProvider>
  );
}

export default App;
