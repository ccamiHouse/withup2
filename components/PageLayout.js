import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout({ children, title, description }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-lg text-gray-600">{description}</p>
            )}
          </div>
        )}
        <div className="prose prose-lg mx-auto max-w-none">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
