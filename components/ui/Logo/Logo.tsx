import Image from "next/image"
import Link from "../Link"

const Logo = ({ className = '', ...props }) => (
  // <Link href="/"><a><Image src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="Mesua Ferrea logo" width={128} height={60} /></a></Link>
  <img src="https://ik.imagekit.io/nwkv8fs6b2u/Mesua/Public/Logo/logo_47LO2E1WJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642163134968" alt="Mesua Ferrea Logo" width={128} height={60}/>
  // <svg
  //   width="32"
  //   height="32"
  //   viewBox="0 0 32 32"
  //   fill="none"
  //   xmlns="http://www.w3.org/2000/svg"
  //   className={className}
  //   {...props}
  // >
  //   <rect width="100%" height="100%" rx="16" fill="var(--secondary)" />
  //   <path
  //     fillRule="evenodd"
  //     clipRule="evenodd"
  //     d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
  //     fill="var(--primary)"
  //   />
  // </svg>
)

export default Logo
