export const metadata = {
  title: "Chicken Salad Chick Nutrition Facts – Complete Guide",
  description: "Complete Chicken Salad Chick nutrition facts, menu calories, macros, allergen information and healthy ordering tips."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0, background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1000px", margin: "auto", padding: "20px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
