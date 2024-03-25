export const PageLayout = ({children}) => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
     {children}
    </main>
  );
};
