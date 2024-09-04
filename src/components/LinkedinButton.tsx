import Link from "next/link";
import Image from "next/image";

type LinkedInButtonProps = {
  isLoggedIn: boolean;
  linkedInAccount: string;
};

export default function LinkedInButton({
  isLoggedIn,
  linkedInAccount,
}: LinkedInButtonProps) {
  return (
    <Link
      href={isLoggedIn ? linkedInAccount : "https://www.linkedin.com"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/assets/linkedIn.svg"
        alt="LinkedIn logo"
        width={50}
        height={50}
      />
    </Link>
  );
}
