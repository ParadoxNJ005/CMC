export default function LoadingPage() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex max-w-[500px] flex-col items-center justify-center text-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
        <h1 className="mt-6 text-xl font-medium">Loading...</h1>
        <p className="mt-2 text-muted-foreground">Please wait while we prepare your content.</p>
      </div>
    </div>
  )
}
