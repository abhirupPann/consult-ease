"use client"
import consult_ease_logo from "@public/consult_ease_logo.png"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { MailOpen } from "lucide-react"
import { useState } from "react"
import { StickyBanner } from "../ui/sticky-banner"
import { useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button"
import { toast } from "sonner"


const creatorcompo: { title: string; href: string; description: string }[] = [
  {
    title: "Sayan Dey",
    href: "/creators",
    description:
      "Leader, Lead Content Creator",
  },
  {
    title: "Abhirup Pan",
    href: "/creators",
    description:
      "Lead Web Developer",
  },
  {
    title: "Rima Majumder",
    href: "/creators",
    description:
      "Lead Investor, UI/UX designer",
  },
  {
    title: "Ayush Mukherjee",
    href: "/creators",
    description: "Lead MERN developer, ML expert",
  },
  {
    title: "Ranadip Patra",
    href: "/creators",
    description:
      "ML expert, Cloud Engineer",
  },
]


const tokenCompo: { title: string; href: string; description: string }[] = [
  {
    title: "Claim your tokens!",
    href: "/tokens",
    description:
      "Every time you consult a doctor and make a payment, you earn tokens."
  },
 
]

export function NavigationMenuDemo() {

 
  interface UserDet {
    email: string
    f_name: string,
    l_name: string,
    role : string,
    token: string,
    _id: string
  }
  const [userDet, setUserDet] = useState<UserDet | null>(null);
  const [initials, setInitials] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('user_det');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUserDet(parsed);
        const ini1 = parsed.f_name?.[0]?.toUpperCase() || '';
        const ini2 = parsed.l_name?.[0]?.toUpperCase() || '';
        setInitials(ini1 + ini2);
      
      } catch (err) {
        console.error("Failed to parse user_det:", err);
      }
    }
  }, []);


  const handleLogOut = ()=>{
    localStorage.removeItem('user_det');
    toast("Logged Out Successfully!")
    setTimeout(() => {
          window.location.reload();
    }, 1000);

  }
  return (
    <div>
    <div>      <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
            <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
              Sign up for ConsultEase today and get 3 months FREE on our Premium Plan – packed with advanced features like video consultations, patient management, and more.
            </p>
          </StickyBanner>
    </div>
    <div className="flex items-center justify-between mx-[2vw] mt-[1vh] pb-[1vh] bg-transparent">     
    <Link href={"/"}>
          <Image src={consult_ease_logo}
      className=" cursor-pointer"
      alt="This is dino"
      width={70}
      height={35}
    /></Link> 

       <NavigationMenu>

<NavigationMenuList>
<NavigationMenuItem>
    <Link href="/" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Home
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <Link href="/">
    <NavigationMenuTrigger>Doctors</NavigationMenuTrigger>
    </Link>
    
    <NavigationMenuContent>
      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        <li className="row-span-3">
          <NavigationMenuLink asChild>
            <a
              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
              href="/"
            >
              {/* <Icons.logo className="h-6 w-6" /> */}
              <div className="mb-2 mt-4 text-lg font-medium">
              Dr. Adrian Bennett, MD
              </div>
              <p className="text-sm leading-tight text-muted-foreground">
              Senior Consultant and Chief Medical Officer (CMO),
              Internal Medicine and Healthcare Administration,
              25+ years in patient care and hospital management

              </p>
            </a>
          </NavigationMenuLink>
        </li>
        <ListItem href="/" title="Dr. Sophia Carter, MBBS, MD">
        
        Consultant Pediatrician,
        Child Health and Development,
        12 years
        </ListItem>
        <ListItem href="/" title="Dr. Ethan Wilson, MBBS, DM">
          Cardiologist,
          Heart and Cardiovascular Diseases,
          18 years
        </ListItem>
        <ListItem href="/" title="Dr. Priya Sharma, MBBS, MD">        
        General Practitioner,
        Family Medicine,
        8 years

        </ListItem>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Creators</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
        {creatorcompo.map((creatorcompo) => (
          <ListItem
            key={creatorcompo.title}
            title={creatorcompo.title}
            href={creatorcompo.href}
          >
            {creatorcompo.description}
          </ListItem>
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
  <NavigationMenuItem>
  <Link href="/" legacyBehavior passHref>
  <NavigationMenuTrigger>Tokens</NavigationMenuTrigger>
  </Link>
    
    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
        {tokenCompo.map((tokenCompo) => (
          <ListItem
            key={tokenCompo.title}
            title={tokenCompo.title}
            href={tokenCompo.href}
          >
            {tokenCompo.description}
          </ListItem>
        ))}
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <Link href="/appointment" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Appointment Booking
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
</NavigationMenuList>
</NavigationMenu>
{userDet ? 
    <div className=" mr-[5vw]">
     <DropdownMenu>
      <DropdownMenuTrigger><div className=" bg-blue-400 rounded-full w-10 h-10 flex items-center  justify-center">{`${initials}`}</div></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <Link href={"/sub"}>
         <DropdownMenuItem>Subscription</DropdownMenuItem> 
        </Link>
        
        <DropdownMenuItem className=" text-red-500" onClick={handleLogOut}>Log Out</DropdownMenuItem>
      </DropdownMenuContent>
     </DropdownMenu>
    </div> : 
   <div>
  
    <Link href="/signup">
      <Button>
        <MailOpen /> Login with Email
      </Button>
   </Link>
  </div>}


   </div>
 </div>  
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
