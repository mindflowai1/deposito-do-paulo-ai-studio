export function Hero() {
  const imageUrl = "https://knzolwnyxgmzxcsgxztk.supabase.co/storage/v1/object/sign/imagens/ChatGPT%20Image%2023%20de%20abr.%20de%202026,%2018_03_56.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmIzYmYwZC1kZGEzLTQ2ZTQtYjQ3MC1kZDkyNTU4NGU3MDYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZW5zL0NoYXRHUFQgSW1hZ2UgMjMgZGUgYWJyLiBkZSAyMDI2LCAxOF8wM181Ni5wbmciLCJpYXQiOjE3NzY5Nzg2NzAsImV4cCI6MTgwODUxNDY3MH0.xuQGgUNlGH-q66sKoDe76rQHskhCib9M7qdR7dR4TZ4";

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img 
          src={imageUrl}
          alt="Depósito de materiais de construção" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Bottom transition effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-paper to-transparent"></div>
    </section>
  );
}
