type ErrorCardProps = {
  message: string;
};

export default function ErrorCard({ message }: ErrorCardProps) {
  return (
    <div className="text-secondary-500 text-center p-4">
      <h2>Something went wrong!</h2>
      <p>{message || "An error occurred"}</p>
    </div>
  );
}
